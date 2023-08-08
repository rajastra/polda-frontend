import './Galeri.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useCallback, useEffect, useState } from 'react'
import useHttp from '../hooks/use-http'
import { Skeleton } from 'antd'
import { NavLink } from 'react-router-dom'

const Galeri = () => {
   const { isLoading, sendRequest } = useHttp();
   const [galeriData, setGaleriData] = useState([]);
   const [query, setQuery] = useState('')

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


   useEffect(() => {
      getGaleri();
   }, [getGaleri])

   const handleSearch = (e) => {
      setQuery(e.target.value)
   }

   const filteredGaleri = galeriData?.filter((galeri) => {
      return galeri.title.toLowerCase().includes(query.toLowerCase())
   })

   return (
      <>
         <Header />
         <main>
            <div className='pencarian-box'>
               <p>Pencarian:</p>
               <div className='pencarian-input'>
                  <input type="text" placeholder="Cari"
                     onChange={handleSearch} />
                  <button>Cari</button>
               </div>
            </div>
            {isLoading ? (
               <Skeleton active style={
                  {
                     marginTop: "50px",
                  }
               } />
            ) : (
               <div className='kegiatan-list'>
                  {filteredGaleri?.map((galeri) => {
                     return (
                        <div className='kegiatan-box' key={galeri.id}>
                           <img src={galeri.photo_url} alt="" className='kegiatan-img' />
                           <NavLink to={`/galeri/${galeri.id}`} className='kegiatan-text'>{galeri.title}</NavLink>
                        </div>
                     )
                  })}
               </div>
            )}
         </main>
         <Footer />
      </>
   )
}

export default Galeri