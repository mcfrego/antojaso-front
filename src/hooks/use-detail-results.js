import { useQuery } from 'react-query'

import { getPlaceDetails } from '../service/apiFSQ'

export function useDetailResults (params) {
  const query = useQuery('detailResults', () => getPlaceDetails(params))

  return query
}
