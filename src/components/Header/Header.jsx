import './Header.css'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/img/learning-logo.svg'
import logotwo from '../../assets/img/learning-logo2.svg'
import headeravatar from '../../assets/img/header-avatar.svg'

function Header() {
  const location = useLocation().pathname
  return (
    <div className={location == '/' ? 'Header' : 'Header__white'}>
      <div className="container">
<<<<<<< HEAD
        <nav className='header__nav'>   
          <img src={logo} alt="" />
=======
        <nav className='header__nav'>
          <img src={location == '/' ? logo : logotwo} alt="" />
>>>>>>> da4749f9411a79e74f50b3598f4348c5f381e509

          <ul className='header__list'>
            <li className='header__item'>
              <Link className={location == '/' ? 'active' : null} to={'/'}>
                Home
              </Link>
            </li>
            <li className='header__item'>
              <Link className={location == '/courses' ? 'active' : null} to={'/courses'}>
                Courses
              </Link>
            </li>
            <li className='header__item'>
              <Link className={location == '/careers' ? 'active' : null} to={'/careers'}>
                Careers
              </Link>
            </li>
            <li className='header__item'>
              <Link className={location == '/blog' ? 'active' : null} to={'/blog'}>
                Blog
              </Link>
            </li>
            <li className='header__item'>
              <Link className={location == '/about' ? 'active' : null} to={'/about'}>
                About Us
              </Link>
            </li>
            {
              location == '/' ?
             <div className='login__link__div'>
               <li className=' login__link'>
              <Link to={'/login'}>
                Login
              </Link>
            </li>
            <li className=' signup__link'>
              <Link to={'/signup'}>
                Sign Up
              </Link>
            </li>
             </div> :
               <div className='login__link__div__right'>
                 <img src={headeravatar} alt="" />
                 <select >
                  <option>
                    Lina
                  </option>
                  <option>
                    shoxrux
                  </option>
                   <option>
                    education
                  </option>
                 </select>
               </div>
            }

          </ul>
        </nav>
      </div>

    </div>
  )
}

export default Header