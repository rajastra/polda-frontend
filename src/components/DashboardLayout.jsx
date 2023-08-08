import './DashboardLayout.css'
import logo from '../assets/logo3.png'
import { NavLink, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { message } from 'antd'


const DashboardLayout = (props) => {
   const navigation = useNavigate();

   const logout = () => {
      Cookies.remove('token')
      Cookies.remove('email')
      navigation('/')
      message.success('Berhasil logout')
   }

   return (
      <div>
         <header className='header'>
            <div className='logo-box'>
               <img src={logo} alt="logo" className='logo-img' />
               <div className='logo-text'>
                  <p className='shabara-text1'>Shabara</p>
                  <p className='shaara-text2'>Lampung</p>
               </div>
            </div>
            <nav>
               <ul className='nav-list'>
                  <li className='list-item'><NavLink to="/"
                     className={({ isActive }) =>
                        isActive ? 'list-item-active' : undefined
                     }
                     end>Preview</NavLink></li>
                  <li onClick={logout} className='list-item' style={
                     {
                        cursor: 'pointer'
                     }
                  }><a
                     className={({ isActive }) =>
                        isActive ? 'list-item-active' : undefined
                     }
                     end>Logout</a></li>
               </ul>
            </nav>
         </header>
         <main className='dashboard-box'>
            <div className='dashboard-menu'>
               <div className='dashboard-menu-text'>
                  <p className='dashboard-menu-heading'>Selamat datang!</p>
                  <p className='dashboard-menu-secondary'>Admin</p>
               </div>
               <nav>
                  <ul className='dashboard-nav'>
                     <li className='dashboard-nav-item'><NavLink to="/dashboard/ubah-beranda"
                        className={({ isActive }) =>
                           isActive ? 'dashboard-nav-item-active' : undefined
                        }
                        end>Ubah Beranda</NavLink></li>
                     <li className='dashboard-nav-item'><NavLink to="/dashboard/ubah-tentang"
                        className={({ isActive }) =>
                           isActive ? 'dashboard-nav-item-active' : undefined
                        }
                        end>Ubah tentang</NavLink></li>
                     <li className='dashboard-nav-item'><NavLink to="/dashboard/ubah-galeri"
                        className={({ isActive }) =>
                           isActive ? 'dashboard-nav-item-active' : undefined
                        }
                        end>Ubah galeri</NavLink></li>
                  </ul>
               </nav>


            </div>
            <div className='dashboard-content'>{props.children}</div>
         </main>
      </div>
   )
}

export default DashboardLayout