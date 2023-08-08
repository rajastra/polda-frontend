import { useCallback, useEffect, useState } from 'react';
import { Modal, Form, Input, Upload, message, Skeleton, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import useHttp from '../hooks/use-http';
import DashboardLayout from '../components/DashboardLayout';
import './UbahBeranda.css'

const UbahTentang = () => {
   const [form] = Form.useForm();
   const [newData, setNewData] = useState({});
   const { isLoading, sendRequest } = useHttp();
   const { isLoading: isPosting, sendRequest: postingData } = useHttp();
   const [tentang, setTentang] = useState(null);
   const [fileList, setFileList] = useState([])

   const getTentang = useCallback(async () => {
      sendRequest({
         url: `/api/v1/tentang`,
         method: "GET",
      }, (data) => {
         setTentang(data.data[0])
      })
   }, [sendRequest])

   useEffect(() => {
      getTentang();
   }, [getTentang])

   useEffect(() => {
      if (tentang) {
         form.setFieldsValue({
            visi: tentang.visi,
            misi: tentang.misi,
         })
         setFileList([{
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: tentang.photo_url,
         }])
      }
   }, [tentang, form])



   const onCancelModal = () => {
      setNewData({});
      setFileList([{
         uid: '-1',
         name: 'image.png',
         status: 'done',
         url: tentang.photo_url,
      }])
   };

   const handleSubmit = async () => {
      try {
         if (Object.keys(newData).length === 0) {
            alert('Nothing has changed');
            return;
         }
         postingData({
            url: `/api/v1/tentang/${tentang.id}`,
            method: "PATCH",
            body: newData,
            headers: {
               'Content-Type': "multipart/form-data",
            },
         },
            (data) => {
               console.log(data)
               message.success("Berhasil Mengubah Beranda");
               getTentang();
               onCancelModal();
            }
         )
      } catch (errorInfo) {
         console.log('Failed:', errorInfo);
      }
   };

   const handleChange = ({ fileList: newFileList }) => {
      setFileList(newFileList)
      setNewData({ ...newData, photo_url: newFileList[0].originFileObj })
   };


   const handlePreview = async (file) => {
      if (!file.url && !file.preview) {
         file.preview = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(file.originFileObj);
            reader.onload = () => resolve(reader.result);
         });
      }

      // Show preview modal
      Modal.info({
         title: file.name,
         content: (
            <img
               alt="preview"
               style={{ width: '100%' }}
               src={file.url || file.preview}
            />
         ),
      });
   };

   return (
      <DashboardLayout>
         <div className='dashboard-container'>
            <h1 className='dashboard-title'>Ubah Tentang</h1>
            {isLoading && <Skeleton active style={{
               marginTop: '50px'
            }} />}
            {!isLoading && (<Form form={form} layout="horizontal" style={{
               marginTop: '50px'
            }}>
               <Form.Item name="photo_url" label="Logo"
               >
                  <Upload
                     name="avatar"
                     listType="picture-card"
                     className="avatar-uploader"
                     showUploadList={true}
                     beforeUpload={() => false}
                     onChange={handleChange}
                     onPreview={handlePreview}
                     maxCount={1}
                     fileList={fileList}
                  >
                     <div>
                        <PlusOutlined />
                        <div style={{ marginTop: 8 }}>upload</div>
                     </div>
                  </Upload>
               </Form.Item>
               <Form.Item name="visi" label="visi" >
                  <Input onChange={({ target: { value } }) => (newData["visi"] = value)} />
               </Form.Item>
               <Form.Item
                  name="misi"
                  label="misi"
               >
                  <Input onChange={({ target: { value } }) => (newData["misi"] = value)} />
               </Form.Item>
               <Button className="btn-simpan" htmlType="submit" onClick={handleSubmit} loading={isPosting}>Simpan</Button>
            </Form>)}
         </div>
      </DashboardLayout>

   );
};

export default UbahTentang;