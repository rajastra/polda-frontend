import Header from '../components/Header'
import homeImg from '../assets/home-img.png'
import homeImg2 from '../assets/homepg.jpg'
import logo2 from '../assets/LOGO2.png'
import './Home.css'
import Footer from '../components/Footer'
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
   return (
      <>
         <Header />
         <div className='home-container'>
            <div className='logo-carousel'>
               <img src={logo2} alt="gambar logo2" className='logo-carousel-img' />
            </div>
            <Carousel showArrows={true} showStatus={false} showThumbs={false} dynamicHeight>
               <div>
                  <img src={homeImg} />
               </div>
               <div>
                  <img src={homeImg2} />
               </div>
            </Carousel>
         </div>

         <Footer />
      </>
   )
}

export default Home