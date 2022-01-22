import { useParams } from 'react-router-dom'
import { Section } from '../components'
import { useDetailResults } from '../hooks/use-detail-results'
import Image from 'react-bootstrap/Image'

const MAPS_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

const formatMapUrl = ({ latitude, longitude }) => {
  const urlBase = 'https://maps.googleapis.com/maps/api/staticmap'
  const urlKey = `key=${MAPS_KEY}`
  const urlSize = 'size=600x300'
  const urlZoom = 'zoom=16'
  const urlMarker = `markers=color:red%7C${latitude},${longitude}`

  return `${urlBase}?${urlKey}&${urlSize}&${urlZoom}&${urlMarker}`
}

export function DetailView () {
  const { placeId } = useParams()
  const { data } = useDetailResults({ placeId })
  console.log(data)

  if (!data) return <p>Loading ...</p>

  const mapUrl = data && formatMapUrl(data?.geocodes.main)
  const name = data?.name
  const category = data?.categories[0].name
  const icon =
    data?.categories[0].icon.prefix + 'bg_32' + data?.categories[0].icon.suffix
  const address = `${data?.location.address} (${data?.location.locality})`
  const price = data?.price
  const phone = data?.tel
  const social = data?.social_media

  console.log(social)
  return (
    <Section>
      <Image src={mapUrl} fluid rounded className='mb-4' />
      <h2>{name}</h2>
      <p>{category}</p>
      <img src={icon} />
      <p>{address}</p>
      <p>{price}</p>
      <p>{phone}</p>
    </Section>
  )
}
