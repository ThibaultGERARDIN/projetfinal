import '../../styles/pages/Home.scss'
import Card from '../../components/Card'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
import profil from '../../assets/profil.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
            <button className="home-link">
              <FontAwesomeIcon icon="fa-brands fa-github" />
              Mon Github
            </button>
            <button className="home-link">
              <FontAwesomeIcon icon="fa-regular fa-file-pdf" />
              Mon CV
            </button>
          </div>
        </div>
      </div>
      <div className="skills">
        <h2>Mes compétences</h2>
        <div className="skills-collapse">
          <Collapse title="Languages" className="collapse">
            HTML CSS ETC
          </Collapse>
          <Collapse title="Outils" className="collapse">
            VScode, Figma, etc
          </Collapse>
        </div>
      </div>
    </div>
  )
}

export default Home
