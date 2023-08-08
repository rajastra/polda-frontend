import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import Cookies from 'js-cookie'

const Header = () => {
   const isLogin = Cookies.get('token');

   return (
      <header className='header'>
         <div className='logo-box'>
            <img src={logo} alt="logo" className='logo-img' />
            <div className='logo-text'>
               <p className='logo-text-heading'>DITSAMAPTA</p>
               <p className='logo-text-secondary'>POLDA LAMPUNG</p>
            </div>
         </div>
         <nav>
            <ul className='nav-list'>
               <li className='list-item'><NavLink to="/"
                  className={({ isActive }) =>
                     isActive ? 'list-item-active' : undefined
                  }
                  end>Beranda</NavLink></li>
               <li className='list-item'><NavLink to="/tentang"
                  className={({ isActive }) =>
                     isActive ? 'list-item-active' : undefined
                  }
                  end>Tentang</NavLink></li>
               <li className='list-item'><NavLink to="/galeri"
                  className={({ isActive }) =>
                     isActive ? 'list-item-active' : undefined
                  }
                  end>Galeri</NavLink></li>
               {!isLogin && <li className='list-item'><NavLink to="/login"
                  className={({ isActive }) =>
                     isActive ? 'list-item-active' : undefined
                  }
                  end>Login</NavLink></li>}
               {isLogin && <li className='list-item'><NavLink to="/dashboard/ubah-beranda"
                  className={({ isActive }) =>
                     isActive ? 'list-item-active' : undefined
                  }
                  end>Dashboard</NavLink></li>}
            </ul>
         </nav>
      </header>
   )
}

export default Header