import { useState } from 'react'
import { Section, ResultListItem } from '.'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'

export function ResultList ({ location, results, isLoading, searchError }) {
  const [isDistanceOrder, setIsDistanceOrder] = useState(true)

  const filteredResults = results
    ?.sort((a, b) => {
      if (isDistanceOrder) return a.distance - b.distance
      return b.rating - a.rating
    })
    .map((result, index) => (
      <Col key={index} lg={6}>
        <ResultListItem result={result} />
      </Col>
    ))

  const isDistanceButtonActive = isDistanceOrder ? 'primary' : 'outline-primary'
  const isPopularityButtonActive = !isDistanceOrder
    ? 'primary'
    : 'outline-primary'

  const onDistanceButtonClick = () => {
    if (!isDistanceOrder) setIsDistanceOrder(true)
  }

  const onPopularityButtonClick = () => {
    if (isDistanceOrder) setIsDistanceOrder(false)
  }

  return (
    <Section>
      {results?.length > 0 && (
        <Row>
          <h2>Search results</h2>
          <Stack direction='horizontal' className='mb-4'>
            Sort by:
            <Button
              variant={isDistanceButtonActive}
              onClick={onDistanceButtonClick}
              className='ms-2'
            >
              Distance
            </Button>
            <span className='vr ms-2' />
            <Button
              variant={isPopularityButtonActive}
              onClick={onPopularityButtonClick}
              className='ms-2'
            >
              Popularity
            </Button>
            <Button variant='outline-primary' className='ms-auto'>
              See in map
            </Button>
          </Stack>
          {filteredResults}
        </Row>
      )}
      {location.currentError && !results && !isLoading && (
        <>
          <p>Image PLACEHOLDER</p>
          <p>Geoposition not available. Try typing a location</p>
        </>
      )}
      {!location.currentError && !results && !isLoading && (
        <>
          <p>Welcome image PLACEHOLDER</p>
          <p>Set your position and try some search</p>
        </>
      )}
      {isLoading && (
        <>
          <p>loading image PLACEHOLDER</p>
          <p>Loading ...</p>
        </>
      )}
      {results?.length === 0 && (
        <>
          <p>No results PLACEHOLDER</p>
          <p>No results! Try other search ...</p>
        </>
      )}
    </Section>
  )
}
