import { useContext } from 'react'
import { useQuery } from 'react-query'
import { FavoritePlacesContext } from '../context/favorites-places-context'
import { getPlacesDetails } from '../service/apiFSQ'

export function useDetailFavResults () {
  const { favorites } = useContext(FavoritePlacesContext)

  const query = useQuery('detailFavoriteResults', () =>
    getPlacesDetails({ favorites })
  )

  return query
}
