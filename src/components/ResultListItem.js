import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FavoritePlacesContext } from '../context/favorites-places-context'
import Card from 'react-bootstrap/Card'

export function ResultListItem ({ result }) {
  const {
    fsq_id: id,
    name,
    categories,
    location,
    distance: distanceNoFormat,
    rating
  } = result
  const history = useHistory()
  const { favorites, onAddFavorite, onDeleteFavorite } = useContext(
    FavoritePlacesContext
  )

  const category = categories[0].name
  const icon = categories[0].icon.prefix + 'bg_32' + categories[0].icon.suffix
  const address = location.address
  const distance = distanceNoFormat
    ? `(${(distanceNoFormat / 1000).toFixed(1)} km)`
    : ''
  const isFav = !!favorites.find(fav => fav === id)
  const onCardClick = () => {
    history.push(`/place/${id}`)
  }

  const onFavClick = () => {
    if (isFav) onDeleteFavorite(id)
    else onAddFavorite(id)
  }

  return (
    <Card className='mb-3'>
      <Card.Body>
        <Card.Title onClick={onCardClick}>{name}</Card.Title>
        <Card.Subtitle>
          <img src={icon} />
          {category}
        </Card.Subtitle>
        <Card.Text>
          {address} {distance}
        </Card.Text>
        <Card.Text>{rating}</Card.Text>
        <Card.Text onClick={onFavClick}>{isFav ? 'FAV' : 'not fav'}</Card.Text>
      </Card.Body>
    </Card>
  )
}
