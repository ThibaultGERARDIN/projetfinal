import '../../styles/pages/Home.scss'
import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
import profil from '../../assets/profil.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="Home">
      <Banner>
        <h1>Thibault GÉRARDIN - développeur web</h1>
      </Banner>

      <div className="about-me">
        <img
          src={profil}
          alt="Portrait Thibault GÉRARDIN"
          className="photo-profil"
        />
        <div className="description">
          <h2>A propos de moi</h2>
          <div className="description-txt">
            <p>
              Je m'appelle <strong>Thibault Gérardin</strong> et je suis{' '}
              <strong>développeur web.</strong>
              <br />
              <br />
              Je suis à votre service pour{' '}
              <strong>
                la création de site web sur mesure, la modernisation de votre
                site existant ou encore le référencement (SEO).
              </strong>
              <br />
              <br />A l'origine je suis{' '}
              <strong>ingénieur en construction bois</strong>, après 7 ans dans
              le milieu de la construction dont 5 en tant que responsable pôle
              charpente industrielle, j'ai voulu changer de branche et me suis
              naturellement tourné vers un domaine qui me passionne depuis
              toujours : <strong>le développement.</strong>
              <br />
              <br />
              Afin de réussir au mieux cette reconversion, j'ai suivi le
              parcours{' '}
              <a
                href="https://openclassrooms.com/fr/paths/899-developpeur-web"
                className="contact-link"
                target="_blank"
                rel="noreferrer"
              >
                Développeur Web
              </a>{' '}
              d'
              <strong>Openclassrooms</strong>, et me voilà aujourd'hui
              développeur à plein temps !
              <br />
              <br />
              Si vous avez une question ou un besoin, n'hésitez pas à{' '}
              <a href="/projetfinal/#/contact" className="contact-link">
                me contacter
              </a>
              .
            </p>
          </div>
          <div className="about-links">
            <a
              className="link"
              href="https://github.com/ThibaultGERARDIN"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon="fa-brands fa-github" />
              Mon Github
            </a>
            <a
              className="link"
              href="../projetfinal/images/cv.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon="fa-regular fa-file-pdf" />
              Mon CV
            </a>
          </div>
        </div>
      </div>
      <div className="skills">
        <h2>Mes compétences</h2>
        <div className="skills-collapse">
          <div className="collapse">
            <Collapse title="Stacks">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>NodeJS</li>
                <li>ReactJS</li>
                <li>Sass</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>SEO</li>
              </ul>
            </Collapse>
          </div>
          <div className="collapse">
            <Collapse title="Outils">
              <ul>
                <li>Visual Studio Code</li>
                <li>Git / Github</li>
                <li>W3C Validators</li>
                <li>Devtools</li>
                <li>Google lighthouse</li>
                <li>Wave</li>
                <li>Notion</li>
                <li>Wakelet</li>
                <li>Figma</li>
              </ul>
            </Collapse>
          </div>
        </div>
        <Link to="/portfolio">
          <button className="link">Voir mon portfolio</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
