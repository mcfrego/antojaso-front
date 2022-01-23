import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY
const BASE_URL = process.env.REACT_APP_API_URL_3

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: API_KEY
  }
})

export async function searchPlaces (params) {
  const { searchTerm, locationTerm } = params

  if (searchTerm === '' || !locationTerm) return null

  const querySearch = 'query=' + searchTerm
  const queryLocation = `ll=${locationTerm}&radius=100000`
  const queryFields = 'fields=fsq_id,rating,categories,name,distance,location'

  const { data } = await api.get(
    `places/search?${querySearch}&${queryLocation}&${queryFields}`
  )
  return data.results
}

export async function getAutocompletePlaces (params) {
  const { searchTerm, locationTerm } = params

  if (searchTerm === '') return null

  const querySearch = 'query=' + searchTerm
  const queryLocation = `ll=${locationTerm || '52.52437,13.41053'}`
  const queryType = 'types=geo'

  const { data } = await api.get(
    `/autocomplete?${querySearch}&${queryLocation}&${queryType}`
  )
  return data.results
}

export async function getPlaceDetails (params) {
  const { placeId } = params

  const queryFields =
    'fields=fsq_id,rating,categories,name,distance,location,description,tel,website,social_media,price,menu,geocodes'

  const { data } = await api.get(`/places/${placeId}?${queryFields}`)
  return data
}

export async function getPlacesDetails (params) {
  const { favorites } = params

  const queryFields = 'fields=fsq_id,rating,categories,name,distance,location'

  const results = []

  for (let i = 0; i < favorites.length; i++) {
    const placeId = favorites[i]
    const { data } = await api.get(`/places/${placeId}?${queryFields}`)
    results.push(data)
  }

  return results
}
