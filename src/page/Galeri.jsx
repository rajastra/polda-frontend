import './Galeri.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import keg1 from '../assets/keg1.jpg'

const Galeri = () => {
   return (
      <>
         <Header />
         <main>
            <div className='pencarian-box'>
               <p>Pencarian:</p>
               <div className='pencarian-input'>
                  <input type="text" placeholder="Cari" />
                  <button>Cari</button>
               </div>
            </div>
            <div className='kegiatan-list'>
               <div className='kegiatan-box'>
                  <img src={keg1} alt="" className='kegiatan-img' />
                  <p className='kegiatan-text'>Kegiatan 1</p>
               </div>
               <div className='kegiatan-box'>
                  <img src={keg1} alt="" className='kegiatan-img' />
                  <p className='kegiatan-text'>Kegiatan 1</p>
               </div>
               <div className='kegiatan-box'>
                  <img src={keg1} alt="" className='kegiatan-img' />
                  <p className='kegiatan-text'>Kegiatan 1</p>
               </div>
               <div className='kegiatan-box'>
                  <img src={keg1} alt="" className='kegiatan-img' />
                  <p className='kegiatan-text'>Kegiatan 1</p>
               </div>
               <div className='kegiatan-box'>
                  <img src={keg1} alt="" className='kegiatan-img' />
                  <p className='kegiatan-text'>Kegiatan 1</p>
               </div>
               <div className='kegiatan-box'>
                  <img src={keg1} alt="" className='kegiatan-img' />
                  <p className='kegiatan-text'>Kegiatan 1</p>
               </div>

            </div>
         </main>
         <Footer />
      </>
   )
}

export default Galeri