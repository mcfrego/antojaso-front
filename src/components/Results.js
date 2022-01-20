import { Section } from '.'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

export function Results ({ results, isLoading, locationError, searchError }) {
  console.log(results)

  return (
    <Section>
      <Row>
        {results?.map((result, index) => (
          <Col key={index} lg={6}>
            <Card className='mb-3'>
              <Card.Body>
                <Card.Title>{result.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Section>
  )
}
