import './Galeri.css'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Galeri = () => {
   return (
      <>
         <Header />
         <main>
            <section className="sesi">
               <div className="row">
                  <div className="column">

                     <div className="up">
                        <div className="pencari-bar">
                           <h3>Pencarian</h3>
                           <div className="pencarian-box ">
                              <div>
                                 <form className="search">
                                    <input type="text" />
                                    <button type="submit"><i data-feather="search"></i></button>
                                 </form>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="column">
                     <div className="kegiatan">
                        <div className="galeri">
                           <div className="box g1">
                              <h4>KEGIATAN A</h4>
                              <img src="../source/keg1.jpg" alt="" className="img-polda" />
                           </div>
                           <div className="box g2">
                              <h4>KEGIATAN A</h4>
                              <img src="../source/keg2.jpg" alt="" className="img-polda" />
                           </div>
                           <div className="box g3">
                              <h4>KEGIATAN A</h4>
                              <img src="../source/keg3.jpg" alt="" className="img-polda" />
                           </div>
                        </div>
                     </div>
                     <div className="kegiatan">
                        <div className="galeri">
                           <div className="box g1">
                              <h4>VISI</h4>
                              <img src="../source/keg4.jpg" alt="" className="img-polda" />
                           </div>
                           <div className="box g2">
                              <h4>MISI</h4>
                              <img src="../source/keg5.jpg" alt="" className="img-polda" />
                           </div>
                           <div className="box g3">
                              <h4>MISI</h4>
                              <img src="../source/keg6.jpg" alt="" className="img-polda" />
                           </div>
                        </div>
                     </div>
                     <div className="kegiatan">
                        <div className="galeri">
                           <div className="box g1">
                              <h4>VISI</h4>
                              <img src="../source/keg7.jpg" alt="" className="img-polda" />
                           </div>
                           <div className="box g2">
                              <h4>MISI</h4>
                              <img src="../source/keg8.jpg" alt="" className="img-polda" />
                           </div>
                           <div className="box g3">
                              <h4>MISI</h4>
                              <img src="../source/keg9.jpg" alt="" className="img-polda" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </main>
         <Footer />
      </>
   )
}

export default Galeri