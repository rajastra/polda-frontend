import { useCallback, useEffect, useState } from 'react';
import DashboardLayout from '../components/DashboardLayout'
import useHttp from '../hooks/use-http'
import { Button, Popconfirm, Skeleton, message } from 'antd';
import { EditOutlined, CloseOutlined } from '@ant-design/icons';
import './UbahGaleri.css'
import AddKegiatan from '../components/AddKegiatan';
import EditKegiatan from '../components/EditKegiatan';

const UbahGaleri = () => {
   const { isLoading, sendRequest } = useHttp();
   const [galeriData, setGaleriData] = useState([]);
   const [isAddKegiatan, setIsAddKegiatan] = useState(false);
   const [isEditKegiatan, setIsEditKegiatan] = useState(false);
   const [dataId, setDataId] = useState(null);

   const onCancel = () => {
      setIsAddKegiatan(false);
      setIsEditKegiatan(false);
      setDataId(null);
   }

   const getGaleri = useCallback(async () => {
      try {
         sendRequest({
            url: "/api/v1/kegiatan",
            method: "GET",
         },
            (data) => {
               setGaleriData(data.data);
            }
         )
      } catch (error) {
         console.log(error);
      }
   }, [sendRequest])

   const handleDelete = (id) => {
      sendRequest({
         url: `/api/v1/kegiatan/${id}`,
         method: "DELETE"
      },
         () => {
            message.success("Berhasil menghapus data");
            getGaleri();
         }
      )
   }

   useEffect(() => {
      getGaleri();
   }, [getGaleri])


   return (
      <DashboardLayout>
         <div className='dashboard-container'>
            <h1 className='dashboard-title'>Ubah Galeri</h1>
            {isLoading ? (
               <Skeleton style={
                  {
                     marginTop: "50px"
                  }
               } active />
            ) : (

               galeriData?.map((galeri) => {
                  return (
                     <div className="dashboard-item-box" key={galeri.id}>
                        <p className='galeri-item-text'>
                           {galeri.title}
                        </p>
                        <div className='edit-box'
                           onClick={() => {
                              setIsEditKegiatan(true);
                              setDataId(galeri.id);
                           }
                           }
                        >
                           <span>Edit</span>
                           <EditOutlined style={
                              {
                                 color: "green",
                              }
                           } />
                        </div>
                        <Popconfirm
                           title="yakin ingin menghapus?"
                           onConfirm={() => {
                              const kegiatanId = galeri.id;
                              handleDelete(kegiatanId)
                           }}
                           okText="Ya"
                           cancelText="Tidak"
                        >
                           <div className='delete-box'>
                              <CloseOutlined style={
                                 {
                                    color: "red",
                                    fontSize: "30px"
                                 }
                              } />
                           </div>
                        </Popconfirm>
                     </div>
                  )
               }
               )

            )}
            <Button onClick={() => setIsAddKegiatan(true)} className="btn-tambah" >Tambah</Button>
         </div>
         <AddKegiatan
            show={isAddKegiatan}
            onCancel={onCancel}
            getGaleri={getGaleri}
         />
         <EditKegiatan
            id={dataId}
            show={isEditKegiatan}
            onCancel={onCancel}
            getGaleri={getGaleri}
         />

      </DashboardLayout >
   )
}

export default UbahGaleri