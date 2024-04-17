import '../../styles/pages/Project.scss'
import Carousel from '../../components/Carousel'
import Collapse from '../../components/Collapse'
import { useParams, Navigate } from 'react-router-dom'
import Banner from '../../components/Banner'

function Project() {
  const { projectName } = useParams()
  return (
    <div className="Project">
      <Banner>
        <h2 className="banner-title">{projectName}</h2>
      </Banner>
      <h2>Page du projet {projectName}</h2>
    </div>
  )
}

export default Project
