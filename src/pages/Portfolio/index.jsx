import '../../styles/pages/Portfolio.scss'
import Card from '../../components/Card'
import { Link } from 'react-router-dom'
import Banner from '../../components/Banner'
import GetProjects from '../../utils/GetProjects'

function Portfolio() {
  GetProjects()
  const projects = JSON.parse(localStorage.getItem('projects'))

  return (
    <div className="Portfolio">
      <Banner>
        <h2 className="banner-title">PORTFOLIO</h2>
      </Banner>
      <div className="Portfolio-cards">
        {projects.map(({ id, cover, name, excerpt }) => (
          <div key={id} className="project-card">
            <Link to={`/portfolio/${name}`}>
              <Card id={id} title={name} cover={cover} excerpt={excerpt} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
