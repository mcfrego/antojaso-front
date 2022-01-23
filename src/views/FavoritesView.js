import { ResultListItem } from '../components'
import { useDetailFavResults } from '../hooks'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { EmojiDizzyFill } from 'react-bootstrap-icons'

export default function FavoritesView () {
  const { data, isLoading } = useDetailFavResults()

  // Use ? operator for undefined handling (until data fetching)
  const resultList = data?.map((result, key) => (
    <Col key={key} lg={6} className='mt-4'>
      <ResultListItem result={result} />
    </Col>
  ))

  return (
    // Use Row and Col to get responsive result styling
    <Row>
      <h2 className='mt-4'>These are your favorites places</h2>
      {isLoading && <p>Loading ...</p>}
      {!isLoading && data && resultList}
      {!isLoading && !data?.length && (
        <div className='block-center text-center mt-4'>
          <EmojiDizzyFill size={96} color='lightgrey' />
          <p className='mt-4'>
            Ops! It seems you do not have any favorite yet.
          </p>
        </div>
      )}
    </Row>
  )
}
