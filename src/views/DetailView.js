import { useParams } from 'react-router-dom'
import { Section, MapImage } from '../components'
import { useDetailResults } from '../hooks'
import Card from 'react-bootstrap/Card'
import Stack from 'react-bootstrap/Stack'
import Image from 'react-bootstrap/Image'

export default function DetailView () {
  const { placeId } = useParams()
  const { data } = useDetailResults({ placeId })
  console.log(data)

  if (!data) return <p>Loading ...</p>

  const coordinates = [
    `${data?.geocodes.main.latitude},${data?.geocodes.main.longitude}`
  ]
  const name = data?.name
  const category = data?.categories[0].name
  const icon =
    data?.categories[0].icon.prefix + 'bg_32' + data?.categories[0].icon.suffix
  const address = data?.location.address
  const locality = data?.location.locality
  const rating = data?.rating
  const price = data?.price
  const phone = data?.tel
  const website = data?.website
  const hours = data?.hours.display
  const isOpen = data?.hours.open_now

  return (
    <Section>
      <MapImage coordinates={coordinates} zoom />
      <Card className='mt-4 text-center'>
        <Card.Header>
          <h2>{name}</h2>
        </Card.Header>
      </Card>
      <Card.Body>
        <Stack direction='horizontal' className='mb-4'>
          <Image className='me-2' src={icon} fluid roundedCircle />
          <Card.Subtitle>{category}</Card.Subtitle>
        </Stack>
        <Card.Text>
          Is it open?: <b>{isOpen ? 'YES' : 'NO'}</b>
        </Card.Text>
        <Card.Text>Address: {address}</Card.Text>
        <Card.Text>Locality: {locality}</Card.Text>
        <Card.Text>Price (out of 4): {price}</Card.Text>
        <Card.Text>Rating (out of 10): {rating}</Card.Text>
        <Card.Text>
          Phone: <a href={`tel:${phone.replace(' ', '')}`}>{phone}</a>
        </Card.Text>
        <Card.Text>
          Website:{' '}
          <a href={website} target='_blank' rel='noreferrer'>
            {website}
          </a>
        </Card.Text>
        <Card.Text>Open hours: {hours}</Card.Text>
      </Card.Body>
    </Section>
  )
}
