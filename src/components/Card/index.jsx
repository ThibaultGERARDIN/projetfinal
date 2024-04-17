import '../../styles/components/Card.scss'

function Card(props) {
  return (
    <div
      key={props.id}
      className="Card"
      style={{
        backgroundImage: `url(${props.cover})`,
      }}
    >
      <div className="mask to-top">
        <h3>{props.title}</h3>

        <p className="excerpt">{props.excerpt}</p>
      </div>
    </div>
  )
}

export default Card
