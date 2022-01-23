import { ResultListItem } from '../components'
import { useDetailFavResults } from '../hooks'

export function FavoritesView () {
  const { data, isLoading } = useDetailFavResults()

  return (
    <>
      {isLoading && <p>Loading ...</p>}
      {!isLoading &&
        data &&
        data.map((item, key) => <ResultListItem key={key} result={item} />)}
    </>
  )
}
