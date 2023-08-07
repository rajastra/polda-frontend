import logo2 from '../assets/LOGO2.png'

const Footer = () => {
   return (
      <footer className="footer">
         <div className="list-down">
            <img src={logo2} alt="" className="logo-img" />
            <div className="nama-footer">
               <div>
                  <h2 className='footer-heading'>DITSAMAPTA</h2>
                  <h3 className='footer-secondary'>POLDA LAMPUNG</h3>
               </div>
               <div>
                  <h5 className='footer-info'>(0721) 488362</h5>
                  <h5 className='footer-info'>H754+RWQ, Jl. Drs. Warsito, Talang, Kec. Telukbetung Selatan, Kota Bandar Lampung, Lampung 35221, Indonesia</h5>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default Footer