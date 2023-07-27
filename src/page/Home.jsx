import Header from '../components/Header'
import logo2 from '../assets/LOGO2.png'
import './Home.css'
import Footer from '../components/Footer'

const Home = () => {
   return (
      <>
         <Header />
         <section className="content">
            <div className="container">
               <div className="imgHome">
                  <img
                     src={logo2}
                     alt="img1"
                     height="250px"
                  />
               </div>
               <div className="lgradien">
                  <h1>DITSAMAPTA</h1>
                  <h2>POLDA LAMPUNG</h2>
               </div>
            </div>
         </section>
         <Footer />
      </>
   )
}

export default Home