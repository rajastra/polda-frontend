import { useCallback, useEffect, useState } from 'react'
import useHttp from '../hooks/use-http';
import { useNavigate, useParams } from 'react-router-dom';
import { Skeleton } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import Header from '../components/Header';
import './GaleriDetail.css'


const GaleriDetail = () => {
   const { isLoading, sendRequest } = useHttp();
   const [kegiatan, setKegiatan] = useState();
   const { id } = useParams();
   const navigate = useNavigate();


   const getGaleri = useCallback(async () => {
      try {
         sendRequest({
            url: `/api/v1/kegiatan/${id}`,
            method: "GET",
         },
            (data) => {
               setKegiatan(data.data);
            }
         )
      } catch (error) {
         console.log(error);
      }
   }, [sendRequest, id])


   useEffect(() => {
      getGaleri();
   }, [getGaleri])

   return (
      <>
         <Header />
         {
            isLoading ? (
               <Skeleton active style={
                  {
                     marginTop: "50px",
                  }
               } />
            ) : (
               <div className='kegiatan-container'>
                  <div className='title-box'>
                     <div style={{
                        cursor: "pointer",
                     }}
                        onClick={() => navigate(-1)}
                     >
                        <ArrowLeftOutlined />
                     </div>
                     <h1 className='kegiatan-title'>{kegiatan?.title}</h1>
                  </div>
                  <div>
                     <div className='kegiatan-img-detail'>
                        <img src={kegiatan?.photo_url} alt="" />
                     </div>
                     <div className='kegiatan-desc'>
                        <p>{kegiatan?.description}</p>
                     </div>
                  </div>
               </div>
            )
         }
      </>
   )

}

export default GaleriDetail