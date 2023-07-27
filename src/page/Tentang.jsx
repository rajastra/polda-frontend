import Header from '../components/Header'
import './Tentang.css'
import keg9 from '../assets/keg9.jpg'
import Footer from '../components/Footer'

const Tentang = () => {
   return (
      <>
         <Header />
         <main>
            <section className="middle">
               <div>
                  <img src={keg9} alt="" className="jabatan" />
               </div>
               <div className="boxes">
                  <div className="boxs">
                     <div className="box visi">
                        <h4>VISI</h4>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</h5>
                     </div>
                     <div className="box misi">
                        <h4>MISI</h4>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</h5>
                     </div>
                  </div>
               </div>
            </section>
         </main>
         <Footer />
      </>
   )
}

export default Tentang