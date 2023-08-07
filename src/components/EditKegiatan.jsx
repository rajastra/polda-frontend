import { useCallback, useEffect, useState } from 'react';
import { Modal, Form, Input, Upload, message, Skeleton } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import useHttp from '../hooks/use-http';

const EditKegiatan = (props) => {
   const [form] = Form.useForm();
   const [newData, setNewData] = useState({});
   const { isLoading, sendRequest } = useHttp();
   const { isLoading: isPosting, sendRequest: postingData } = useHttp();
   const [kegiatan, setKegiatan] = useState(null);
   const [fileList, setFileList] = useState([])

   const getDetailKegiatan = useCallback(async () => {
      sendRequest({
         url: `/api/v1/kegiatan/${props.id}`,
         method: "GET",
      }, (data) => {
         setKegiatan(data.data)
      })
   }, [sendRequest, props.id])

   useEffect(() => {
      if (props.id) getDetailKegiatan();
   }, [props.id, getDetailKegiatan])

   useEffect(() => {
      if (kegiatan) {
         form.setFieldsValue({
            title: kegiatan.title,
            description: kegiatan.description,
         })
         setFileList([{
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: kegiatan.photo_url,
         }])
      }
   }, [kegiatan, form])


   const onCancelModal = () => {
      form.resetFields();
      setNewData({});
      props.onCancel();
   };

   const handleSubmit = async () => {
      try {
         if (Object.keys(newData).length === 0) {
            alert('Nothing has changed');
            return;
         }
         postingData({
            url: `/api/v1/kegiatan/${props.id}`,
            method: "PATCH",
            body: newData,
            headers: {
               'Content-Type': "multipart/form-data",
            },
         },
            () => {
               message.success("Berhasil Mengubah Kegiatan");
               props.getGaleri();
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
      <Modal
         okText="Simpan"
         cancelText="Batal"
         onOk={handleSubmit}
         open={props.show}
         onCancel={onCancelModal}
         okButtonProps={{ loading: isPosting }}
      >
         {isLoading && <Skeleton active />}
         {!isLoading && (<Form form={form} layout="vertical">
            <Form.Item
               name="title"
               label="Judul kegiatan"
            >
               <Input onChange={({ target: { value } }) => (newData["title"] = value)} />
            </Form.Item>
            <Form.Item name="description" label="Deskripsi" >
               <Input onChange={({ target: { value } }) => (newData["description"] = value)} />
            </Form.Item>
            <Form.Item name="image" label="Gambar"
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
         </Form>)}
      </Modal >
   );
};

export default EditKegiatan;