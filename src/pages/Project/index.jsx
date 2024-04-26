import '../../styles/pages/Project.scss'
import Carousel from '../../components/Carousel'
import Collapse from '../../components/Collapse'
import { useParams, Navigate } from 'react-router-dom'
import Banner from '../../components/Banner'
import Tag from '../../components/Tag'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

function Project() {
  const { projectName } = useParams()
  const projects = JSON.parse(localStorage.getItem('projects'))
  const currentProject = projects.find(({ name }) => name === projectName)

  return currentProject ? (
    <div className="Project" key={currentProject.id}>
      <Banner>
        <h2 className="banner-title">{projectName}</h2>
      </Banner>
      <Carousel data={currentProject.pictures} />
      <Tag tags={currentProject.tags} />
      {currentProject.link ? (
        <a
          href={currentProject.link}
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon="fa-brands fa-github" />
          Repo Github du projet
        </a>
      ) : (
        ''
      )}

      <div className="project-collapse">
        <span className="span-collapse">
          <Collapse className="collapse" title="Description">
            {currentProject.description}
          </Collapse>
        </span>
        <span className="span-collapse">
          <Collapse className="collapse" title="Compétences développées">
            {currentProject.skills}
          </Collapse>
        </span>
      </div>
      <Link to="/portfolio">
        <button className="link">Retour au portfolio</button>
      </Link>
    </div>
  ) : (
    <Navigate to="/erreur404" replace={true} />
  )
}

export default Project
