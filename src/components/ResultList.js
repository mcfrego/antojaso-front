import { useState } from 'react'
import { Section, ResultListItem, Feedback, Modal, MapImage } from '.'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'

export function ResultList ({ location, results, isLoading, searchError }) {
  const [isDistanceOrder, setIsDistanceOrder] = useState(true)
  const [isModalShow, setIsModalShow] = useState(false)

  const filteredResults = results
    ?.sort((a, b) => {
      if (isDistanceOrder) return a.distance - b.distance
      return (b.rating || 0) - (a.rating || 0) // In case no rating data
    })
    .map((result, index) => (
      <Col key={index} lg={6}>
        <ResultListItem result={result} />
      </Col>
    ))

  const locationResults = results?.map(
    result =>
      `${result.geocodes.main.latitude},${result.geocodes.main.longitude}`
  )

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

  const onMapButtonClick = () => setIsModalShow(true)

  return (
    <Section>
      {results?.length > 0 && (
        <>
          <Modal
            title='Your map results'
            show={isModalShow}
            onHide={() => setIsModalShow(false)}
          >
            <MapImage coordinates={locationResults} />
          </Modal>
          <Row>
            <h2>Search results</h2>
            <Stack direction='horizontal' className='mt-2 mb-4'>
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
              <Button
                variant='outline-primary'
                className='ms-auto'
                onClick={onMapButtonClick}
              >
                See in map
              </Button>
            </Stack>
            {filteredResults}
          </Row>
        </>
      )}
      {location.currentError && !results && !isLoading && (
        <Feedback type='noLocation' />
      )}
      {!location.currentError && !results && !isLoading && (
        <Feedback type='welcome' />
      )}
      {isLoading && <Feedback type='loading' />}
      {results?.length === 0 && <Feedback type='noResults' />}
    </Section>
  )
}
