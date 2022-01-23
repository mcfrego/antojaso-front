import { useParams } from 'react-router-dom'
import { Section, MapImage } from '../components'
import { useDetailResults } from '../hooks'

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
  const address = `${data?.location.address} (${data?.location.locality})`
  const price = data?.price
  const phone = data?.tel
  const social = data?.social_media

  return (
    <Section>
      <MapImage coordinates={coordinates} zoom />
      <h2>{name}</h2>
      <p>{category}</p>
      <img src={icon} />
      <p>{address}</p>
      <p>{price}</p>
      <p>{phone}</p>
    </Section>
  )
}
