import { Section, ResultListItem } from '.'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export function ResultList ({ results }) {
  const filteredResults = results
    ?.sort((a, b) => a.distance - b.distance)
    .map((result, index) => (
      <Col key={index} lg={6}>
        <ResultListItem result={result} />
      </Col>
    ))

  return (
    <Section>
      <Row>{filteredResults}</Row>
    </Section>
  )
}
