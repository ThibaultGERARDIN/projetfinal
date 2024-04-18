import '../../styles/components/Footer.scss'
import logo from '../../assets/logo-light.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="footer">
      <Link to="/">
        {' '}
        <img src={logo} alt="Logo TGdev" className="footer-logo" />
      </Link>
      <p className="footer-text">
        Thibault GERARDIN <br></br>23 rue du Chapitre <br></br> 43100 BRIOUDE{' '}
        <br></br> thibault.gerardin@gmail.com <br></br>06 83 95 14 38
      </p>
    </div>
  )
}

export default Footer
