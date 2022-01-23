import { ResultListItem } from '../components'
import { useDetailFavResults } from '../hooks'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export function FavoritesView () {
  const { data, isLoading } = useDetailFavResults()

  return (
    <Row>
      <h2 className='mt-4'>These are your favorites places</h2>
      {isLoading && <p>Loading ...</p>}
      {!isLoading && data && (
        <>
          {data.map((item, key) => (
            <Col key={key} lg={6} className='mt-2'>
              <ResultListItem result={item} />
            </Col>
          ))}
        </>
      )}
      {!isLoading && !data?.length && (
        <p>Ops! It seems you do not have any favorite yet.</p>
      )}
    </Row>
  )
}
