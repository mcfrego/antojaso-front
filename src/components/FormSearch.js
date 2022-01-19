import { useState } from 'react'

import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'

export function FormSearch () {
  const [location, setLocation] = useState('')

  const currentPositionHandler = () => {}

  return (
    <Form>
      <Form.Group className='mb-3' controlId='location'>
        <Form.Label>Location</Form.Label>
        <InputGroup>
          <Form.Control
            placeholder='e.g. Las Palmas'
            aria-labelledby='e.g. Las Palmas'
          ></Form.Control>
          <Button onClick={currentPositionHandler}>Current position</Button>
        </InputGroup>
      </Form.Group>
    </Form>
  )
}
