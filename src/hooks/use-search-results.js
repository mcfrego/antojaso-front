import { useQuery } from 'react-query'
import { useDebounceValue } from '.'
import { searchPlaces } from '../service/apiFSQ'

export function useSearchResults (searchTerm, location) {
  const debouncedSearchTerm = useDebounceValue(searchTerm)

  const query = useQuery(['searchResults', debouncedSearchTerm], () =>
    searchPlaces({
      ...location,
      searchTerm: debouncedSearchTerm
    })
  )

  return query
}
