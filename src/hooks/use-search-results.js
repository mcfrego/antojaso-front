import { useQuery } from 'react-query'

import { searchPlaces } from '../service/apiFSQ'
import { useDebounceValue } from '.'

export function useSearchResults (params) {
  const debouncedSearchTerm = useDebounceValue(params.searchTerm)

  const query = useQuery(['searchResults', debouncedSearchTerm], () =>
    searchPlaces({
      ...params,
      searchTerm: debouncedSearchTerm
    })
  )

  return query
}
