import './Header.css'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/img/learning-logo.svg'

function Header() {
  const location = useLocation().pathname
  return (
    <div className='Header'>
      <div className="container">
        <nav className='header__nav'>
          <img src={logo} alt="" />

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
          </ul>
        </nav>
      </div>

    </div>
  )
}

export default Header