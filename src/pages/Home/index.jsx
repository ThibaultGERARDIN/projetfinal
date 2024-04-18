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
        <h1>Thibault GERARDIN - développeur web</h1>
      </Banner>

      <div className="about-me">
        <img
          src={profil}
          alt="Portrait Thibault GERARDIN"
          className="photo-profil"
        />
        <div className="description">
          <h2>A propos de moi</h2>
          <div className="description-txt">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              pariatur dolor vel dolorem laboriosam fugiat quae non libero. Ex
              eos temporibus perferendis quasi est officiis dolor incidunt
              assumenda, voluptas ullam.
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
              href="../images/cv.pdf"
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
            <Collapse title="Languages">HTML CSS ETC</Collapse>
          </div>
          <div className="collapse">
            <Collapse title="Outils">VScode, Figma, etc</Collapse>
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
