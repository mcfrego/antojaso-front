import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY
const BASE_URL = process.env.REACT_APP_API_URL_3

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: API_KEY
  }
})

const formatQueryLocationParams = (type, value) =>
  type === 'near'
    ? `&near=${value.replace(' ', '%20')}`
    : `&ll=${value.latitude},${value.longitude}&radius=100000`

export async function searchPlaces (params) {
  const { searchTerm, type, value } = params

  if (searchTerm === '') return null

  const querySearch = 'query=' + searchTerm
  const queryLocation = formatQueryLocationParams(type, value)
  const queryFields = 'fields=fsq_id,rating,categories,name,distance,location'

  const { data } = await api.get(
    `/search?${querySearch}&${queryLocation}&${queryFields}`
  )
  return data.results
}

export async function getPlaceDetails (params) {
  const { placeId, type, value } = params

  // const queryLocation = formatQueryLocationParams(type, value)
  const queryFields =
    'fields=fsq_id,rating,categories,name,distance,location,description,tel,website,social_media,price,menu,geocodes'

  const { data } = await api.get(`/${placeId}?${queryFields}`)
  return data
}
