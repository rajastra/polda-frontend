import Header from '../components/Header'
import './Tentang.css'
import Footer from '../components/Footer'
import useHttp from '../hooks/use-http';
import { useCallback, useEffect, useState } from 'react';
import { Skeleton } from 'antd';
import tentangimg from '../assets/keg4.jpg'

const Tentang = () => {
   const { isLoading, sendRequest } = useHttp();
   const [tentang, setTentang] = useState({})

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


   return (
      <>
         <Header />
         <main className='tentang-container'>
            {isLoading ? <Skeleton active style={
               {
                  marginTop: "50px",
               }
            } /> : (
               <>
                  <div className="tentang-image">
                     <img src={tentang?.photo_url || tentangimg} alt="gambar tentang" />
                  </div>
                  <div className='tentang-box'>
                     <div className="tentang-item-box">
                        <h2>Visi</h2>
                        <p>{tentang?.visi || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.'}</p>
                     </div>
                     <div className="tentang-item-box">
                        <h2>Misi</h2>
                        <p>{tentang?.misi || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.'}</p>
                     </div>
                  </div>
               </>
            )}
         </main>

         <Footer />
      </>
   )
}

export default Tentang