import { useState } from 'react'

import { useCurrentLocation } from '../hooks'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export function FormSearch (props) {
  const { onError = () => {} } = props

  const [location, setLocation] = useState({ type: null, value: '' })

  const [currentLocation, error] = useCurrentLocation()
  if (error) {
    onError(error)
  }

  const currentPositionHandler = () => {
    setLocation(prev => {
      return prev.type !== 'current'
        ? {
            type: 'current',
            value: currentLocation
          }
        : { type: null, value: '' }
    })
  }

  const selectedPositionHandler = event => {
    setLocation({
      type: 'near',
      value: event.target.value
    })
  }

  return (
    <Form>
      <Form.Group className='mb-3' controlId='location'>
        <Form.Label>Location</Form.Label>
        <Form.Control
          placeholder='e.g. Las Palmas'
          aria-labelledby='e.g. Las Palmas'
          disabled={location.type === 'current'}
          onChange={selectedPositionHandler}
          value={
            location.type !== 'current' ? location.value : 'Current location'
          }
        />
      </Form.Group>
      <Form.Check className='checkbox'>
        <Form.Check.Label>Get current location</Form.Check.Label>
        <Form.Check.Input
          disabled={!currentLocation}
          onClick={currentPositionHandler}
        />
      </Form.Check>
      <Button onClick={() => console.log(location)}>OK?</Button>
    </Form>
  )
}
