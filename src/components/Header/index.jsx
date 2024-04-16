import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/logo-light.png'
import '../../styles/components/Header.scss'

function Header() {
  const location = useLocation()
  const currentLocation = location.pathname
  return (
    <div className="Header">
      <img src={logo} alt="Logo TGdev" className="header-logo" />
      <nav>
        <Link to="/" className={currentLocation === '/' ? 'highlight' : ''}>
          Accueil
        </Link>
        <Link
          to="/portfolio"
          className={currentLocation === '/portfolio' ? 'highlight' : ''}
        >
          Portfolio
        </Link>
        <Link
          to="/contact"
          className={currentLocation === '/contact' ? 'highlight' : ''}
        >
          Contact
        </Link>
      </nav>
    </div>
  )
}

export default Header
