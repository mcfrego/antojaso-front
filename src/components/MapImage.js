import Image from 'react-bootstrap/Image'

const MAPS_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

const formatMapUrl = (coordinates, zoom) => {
  const urlBase = 'https://maps.googleapis.com/maps/api/staticmap'
  const urlKey = `key=${MAPS_KEY}`
  const urlSize = 'size=600x300'
  const urlZoom = zoom ? 'zoom=16' : ''
  const urlMarkerStyle = 'markers=color:red'
  const urlMarkerValues = coordinates?.map(result => '%7C' + result).join('')

  return `${urlBase}?${urlKey}&${urlSize}&${urlZoom}&${urlMarkerStyle}${urlMarkerValues}`
}

export function MapImage (props) {
  const { coordinates = [], zoom = false } = props

  const imageSrc = formatMapUrl(coordinates, zoom)

  return <Image src={imageSrc} fluid rounded />
}
