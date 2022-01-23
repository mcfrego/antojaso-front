import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FavoritePlacesContext } from '../context/favorites-places-context'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Stack from 'react-bootstrap/Stack'
import { Heart, HeartFill } from 'react-bootstrap-icons'

export function ResultListItem ({ result, isDistanceOrder }) {
  const {
    fsq_id: id,
    name,
    categories,
    location,
    distance: distanceNoFormat,
    rating = 'not available'
  } = result
  const history = useHistory()
  const { favorites, onAddFavorite, onDeleteFavorite } = useContext(
    FavoritePlacesContext
  )

  // All api data formatting
  const category = categories[0].name
  const icon = categories[0].icon.prefix + 'bg_32' + categories[0].icon.suffix
  const address = location.address
  const distance = distanceNoFormat
    ? `Distance: ${(distanceNoFormat / 1000).toFixed(1)} km away`
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
    <Card className='mb-4'>
      <Card.Body>
        <Stack direction='horizontal'>
          <Card.Title className='me-auto text-primary' onClick={onCardClick}>
            <u>{name}</u>
          </Card.Title>
          {isFav && (
            <HeartFill size={25} color='lightseagreen' onClick={onFavClick} /> // This instead of ternary op. because of eslint
          )}
          {!isFav && (
            <Heart size={25} color='lightseagreen' onClick={onFavClick} /> // This instead of ternary op. because of eslint
          )}
        </Stack>
        <Card.Subtitle className='mt-1'>
          <Image className='me-2' src={icon} fluid roundedCircle />
          {category}
        </Card.Subtitle>
        <Card.Text className='mt-4'>{address}</Card.Text>
      </Card.Body>
      <Card.Footer>
        {isDistanceOrder ? distance : `Rating (out of 10): ${rating}`}
      </Card.Footer>
    </Card>
  )
}
