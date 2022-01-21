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
  const { searchTerm, type, value } = params

  if (searchTerm === '') return null

  let queryParams = '?query=' + searchTerm

  if (type === 'near') queryParams += `&near=${value.replace(' ', '%20')}`
  if (type === 'current') {
    queryParams += `&ll=${value.latitude},${value.longitude}`
  }

  const { data } = await api.get('/search' + queryParams)
  return data.results
}

export async function getPlaceDetails (id) {
  if (id === '') return null

  const { data } = await api.get(`/${id}`)
  return data
}
