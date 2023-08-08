import { useCallback, useEffect, useState } from 'react';
import logo2 from '../assets/LOGO2.png'
import useHttp from '../hooks/use-http';
import { Skeleton } from 'antd';

const Footer = () => {
   const { isLoading, sendRequest } = useHttp();
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



   return (
      <footer className="footer">
         {isLoading ? <Skeleton active /> : (<div className="list-down">
            <img src={logo2} alt="" className="logo-img" />
            <div className="nama-footer">
               <div>
                  <h2 className='footer-heading'>DITSAMAPTA</h2>
                  <h3 className='footer-secondary'>POLDA LAMPUNG</h3>
               </div>
               <div>
                  <h5 className='footer-info'>{beranda?.telpon || '(0721) 488362'}</h5>
                  <h5 className='footer-info'>{beranda?.alamat || "H754+RWQ, Jl. Drs. Warsito, Talang, Kec. Telukbetung Selatan, Kota Bandar Lampung, Lampung 35221, Indonesia"}</h5>
               </div>
            </div>
         </div>)}
      </footer>
   )
}

export default Footer