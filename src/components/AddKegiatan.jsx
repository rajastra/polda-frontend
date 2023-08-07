import { useState } from 'react';
import { Modal, Form, Input, Upload, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import useHttp from '../hooks/use-http';

const AddKegiatan = (props) => {
   const [form] = Form.useForm();
   const [uploadImage, setUploadImage] = useState(null);
   const { isLoading, sendRequest } = useHttp();

   const onCancelModal = () => {
      form.resetFields();
      props.onCancel();
   };

   const handleSubmit = async () => {
      try {
         const values = await form.validateFields();
         sendRequest({
            url: "/api/v1/kegiatan",
            method: "POST",
            body: {
               title: values.title,
               description: values.description,
               photo_url: uploadImage,
            },
            headers: {
               'Content-Type': "multipart/form-data",
            },
         },
            () => {
               message.success("Berhasil membuat kegiatan");
               onCancelModal();
               props.getGaleri();
            }
         )
      } catch (errorInfo) {
         console.log('Failed:', errorInfo);
      }
   };

   const handleImageUpload = (info) => {
      setUploadImage(info.file)
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
         okButtonProps={{ loading: isLoading }}
      >
         <Form form={form} layout="vertical">
            <Form.Item
               name="title"
               label="Judul Kegiatan"
               rules={[{ required: true, message: "Harap diisi" }]}
            >
               <Input />
            </Form.Item>
            <Form.Item name="description" label="Deskripsi" rules={[{ required: true, message: "Harap diisi" }]}>
               <Input />
            </Form.Item>
            <Form.Item name="image" label="Gambar"
               rules={[
                  {
                     validator: (_, value) =>
                        value && value.fileList && value.fileList.length > 0
                           ? Promise.resolve()
                           : Promise.reject(new Error('Please upload an image')),
                  },
                  {
                     required: true,
                  }
               ]}
            >
               <Upload
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={true}
                  beforeUpload={() => false}
                  onChange={handleImageUpload}
                  onPreview={handlePreview}
                  maxCount={1}
               >
                  <div>
                     <PlusOutlined />
                     <div style={{ marginTop: 8 }}>upload</div>
                  </div>
               </Upload>
            </Form.Item>
         </Form>
      </Modal >
   );
};

export default AddKegiatan;