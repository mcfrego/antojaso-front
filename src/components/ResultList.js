import { Section, ResultListItem } from '.'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export function ResultList ({
  results,
  isLoading,
  locationError,
  searchError
}) {
  const filteredResults = results
    ?.sort((a, b) => a.distance - b.distance)
    .map((result, index) => (
      <Col key={index} lg={6}>
        <ResultListItem result={result} />
      </Col>
    ))

  return (
    <Section>
      {locationError && !results && !isLoading && (
        <>
          <p>Image PLACEHOLDER</p>
          <p>Geoposition not available. Try typing a location</p>
        </>
      )}
      {!locationError && !results && !isLoading && (
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
      {results?.length > 0 && (
        <Row>
          <h2>Search results</h2>
          {filteredResults}
        </Row>
      )}
    </Section>
  )
}
