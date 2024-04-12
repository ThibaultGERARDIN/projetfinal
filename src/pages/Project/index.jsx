import '../../styles/pages/Project.scss'
import Carousel from '../../components/Carousel'
import Collapse from '../../components/Collapse'
import { useParams, Navigate } from 'react-router-dom'

function Project() {
  const { projectName } = useParams()
  return (
    <div className="Project">
      <h2>Page du projet {projectName}</h2>
    </div>
  )
}

export default Project
