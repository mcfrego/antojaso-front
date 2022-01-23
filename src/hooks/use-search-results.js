import { useQuery } from 'react-query'
import { useDebounceValue } from '.'
import { searchPlaces } from '../service/apiFSQ'

export function useSearchResults ({ searchTerm, locationTerm }) {
  // Get the value after some delay (inside the hook)
  const debouncedSearchTerm = useDebounceValue(searchTerm)

  const query = useQuery(
    ['searchResults', debouncedSearchTerm, locationTerm], // Trigger the query when these params change
    () =>
      searchPlaces({
        locationTerm,
        searchTerm: debouncedSearchTerm
      })
  )

  return query
}
