import { useParams } from 'react-router-dom'

import { Section } from '../components'

import { useDetailResults } from '../hooks/use-detail-results'

import Image from 'react-bootstrap/Image'

const MAPS_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
const MAPS_URL =
  'https://maps.googleapis.com/maps/api/staticmap?key=' + MAPS_KEY

export function DetailView () {
  const { placeId } = useParams()
  const { data, error } = useDetailResults(placeId)

  const address = data.location.address

  const mapUrl = `${MAPS_URL}&size=600x300&markers=color:red%7C${data?.geocodes.main.latitude},${data?.geocodes.main.longitude}`

  console.log(data)
  return (
    <Section>
      <Image src={mapUrl} fluid rounded className='mb-4' />
      <h2>{data?.name}</h2>
    </Section>
  )
}
