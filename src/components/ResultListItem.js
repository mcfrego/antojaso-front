import { useHistory } from 'react-router-dom'

import Card from 'react-bootstrap/Card'

export function ResultListItem ({ result }) {
  const history = useHistory()

  const {
    fsq_id: id,
    name,
    categories,
    location,
    distance: distanceNoFormat
  } = result

  const category = categories[0].name
  const icon = categories[0].icon.prefix + '32' + categories[0].icon.suffix
  const address = location.address
  const distance = `(${(distanceNoFormat / 1000).toFixed(1)} km)`

  const onCardClick = () => {
    history.push(`/place/${id}`)
  }

  return (
    <Card
      className='mb-3'
      bg='secondary'
      border='secondary'
      onClick={onCardClick}
    >
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>
          <img src={icon} />
          {category}
        </Card.Subtitle>
        <Card.Text>
          {address} {distance}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
