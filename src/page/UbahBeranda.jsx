import { useCallback, useEffect, useState } from 'react';
import { Form, Input, message, Skeleton, Button } from 'antd';
import useHttp from '../hooks/use-http';
import DashboardLayout from '../components/DashboardLayout';
import './UbahBeranda.css'

const UbahBeranda = () => {
   const [form] = Form.useForm();
   const [newData, setNewData] = useState({});
   const { isLoading, sendRequest } = useHttp();
   const { isLoading: isPosting, sendRequest: postingData } = useHttp();
   const [beranda, setBeranda] = useState(null);

   const getBeranda = useCallback(async () => {
      sendRequest({
         url: `/api/v1/beranda`,
         method: "GET",
      }, (data) => {
         setBeranda(data.data[0])
      })
   }, [sendRequest])

   useEffect(() => {
      getBeranda();
   }, [getBeranda])

   useEffect(() => {
      if (beranda) {
         form.setFieldsValue({
            telpon: beranda.telpon,
            lainnya: beranda.lainnya,
            alamat: beranda.alamat,
         })
      }
   }, [beranda, form])


   const onCancelModal = () => {
      form.resetFields();
      setNewData({});
   };

   const handleSubmit = async () => {
      try {
         if (Object.keys(newData).length === 0) {
            alert('Nothing has changed');
            return;
         }
         postingData({
            url: `/api/v1/beranda/${beranda.id}`,
            method: "PATCH",
            body: newData,
            headers: {
               'Content-Type': "multipart/form-data",
            },
         },
            () => {
               message.success("Berhasil Mengubah Beranda");
               getBeranda();
               onCancelModal();
            }
         )
      } catch (errorInfo) {
         console.log('Failed:', errorInfo);
      }
   };

   return (
      <DashboardLayout>
         <div className='dashboard-container'>
            <h1 className='dashboard-title'>Ubah Beranda</h1>
            {isLoading && <Skeleton active style={{
               marginTop: '50px'
            }} />}
            {!isLoading && (<Form form={form} layout="horizontal" style={{
               marginTop: '50px'
            }}>
               <Form.Item name="alamat" label="Alamat" >
                  <Input onChange={({ target: { value } }) => (newData["alamat"] = value)} />
               </Form.Item>
               <Form.Item
                  name="telpon"
                  label="Telpon"
               >
                  <Input onChange={({ target: { value } }) => (newData["telpon"] = value)} />
               </Form.Item>
               <Form.Item name="lainnya" label="Lainnya" >
                  <Input onChange={({ target: { value } }) => (newData["lainnya"] = value)} />
               </Form.Item>
               <Button className="btn-simpan" htmlType="submit" onClick={handleSubmit} loading={isPosting}>Simpan</Button>
            </Form>)}
         </div>
      </DashboardLayout>

   );
};

export default UbahBeranda;