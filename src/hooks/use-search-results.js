import { useQuery } from 'react-query'
import { useDebounceValue } from '.'
import { searchPlaces } from '../service/apiFSQ'

export function useSearchResults ({ searchTerm, locationTerm }) {
  const debouncedSearchTerm = useDebounceValue(searchTerm)

  const query = useQuery(
    ['searchResults', debouncedSearchTerm, locationTerm],
    () =>
      searchPlaces({
        locationTerm,
        searchTerm: debouncedSearchTerm
      })
  )

  return query
}
