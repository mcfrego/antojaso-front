import { useQuery } from 'react-query'
import { useDebounceValue } from '.'
import { getAutocompletePlaces } from '../service/apiFSQ'

export function useTypingLocation ({ searchTerm, locationTerm }) {
  const debouncedSearchTerm = useDebounceValue(searchTerm)

  const query = useQuery(['typingLocationResults', debouncedSearchTerm], () =>
    getAutocompletePlaces({ locationTerm, searchTerm: debouncedSearchTerm })
  )

  return query
}
