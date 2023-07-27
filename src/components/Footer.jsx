import logo2 from '../assets/LOGO2.png'

const Footer = () => {
   return (
      <footer className="footer">
         <div className="list-down">
            <img src={logo2} alt="" className="logo-img" />
            <div className="nama-footer">
               <h2>DITSAMAPTA</h2>
               <h3>POLDA LAMPUNG</h3>
               <h5>(0721) 488362</h5>
               <h5>H754+RWQ, Jl. Drs. Warsito, Talang, Kec. Telukbetung Selatan, Kota Bandar Lampung, Lampung 35221, Indonesia</h5>
            </div>
         </div>
      </footer>
   )
}

export default Footer