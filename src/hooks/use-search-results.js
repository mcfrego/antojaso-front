import { useQuery } from 'react-query'
import { useDebounceValue } from '.'
import { searchPlaces } from '../service/apiFSQ'

export function useSearchResults (searchTerm, location) {
  const debouncedSearchTerm = useDebounceValue(searchTerm)
  const debouncedLocationTerm = useDebounceValue(location.value)

  const query = useQuery(
    ['searchResults', debouncedSearchTerm, debouncedLocationTerm],
    () => {
      const locationToSearch = location
      if (location.type === 'near') {
        locationToSearch.value = debouncedLocationTerm
      }

      return searchPlaces({
        ...locationToSearch,
        searchTerm: debouncedSearchTerm
      })
    }
  )

  return query
}
