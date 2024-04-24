import { Link } from 'react-router-dom'
import '../../styles/pages/Error.scss'

function Error() {
  return (
    <div className="Error">
      <span className="error-title">
        <h2>Oups ! La page que vous demandez n'existe pas.</h2>
      </span>

      <Link to="/" className="link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}

export default Error
