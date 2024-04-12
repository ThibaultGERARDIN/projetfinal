import '../../styles/pages/Portfolio.scss'
import Card from '../../components/Card'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Portfolio() {
  return (
    <div className="Portfolio">
      <div className="Portfolio-cards">
        <Link to={`/portfolio/Booki`}>
          <Card id="1" title="Booki" />
        </Link>
        <Link to={`/portfolio/Sophie-Buel`}>
          <Card id="2" title="Sophie-Buel" />
        </Link>
        <Link to={`/portfolio/Menu-maker`}>
          <Card id="3" title="Menu-maker" />
        </Link>
        <Link to={`/portfolio/Nina-Carducci`}>
          <Card id="4" title="Nina-Carducci" />
        </Link>
        <Link to={`/portfolio/Kasa`}>
          <Card id="4" title="Kasa" />
        </Link>
        <Link to={`/portfolio/Mon-vieux-grimoire`}>
          <Card id="4" title="Mon-vieux-grimoire" />
        </Link>
      </div>
    </div>
  )
}

export default Portfolio
