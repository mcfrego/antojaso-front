import { useQuery } from 'react-query'

import { getPlaceDetails } from '../service/apiFSQ'

export function useDetailResults (id) {
  const query = useQuery('detailResults', () => getPlaceDetails(id))

  return query
}
