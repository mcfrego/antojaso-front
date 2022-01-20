import Form from 'react-bootstrap/Form'

export function FormLocation (props) {
  const { location, currentLocation, onChangeLocation } = props

  const currentPositionHandler = () => {
    onChangeLocation(prev => {
      return prev.type !== 'current'
        ? {
            type: 'current',
            value: currentLocation
          }
        : { type: null, value: '' }
    })
  }

  const selectedPositionHandler = event => {
    onChangeLocation({
      type: 'near',
      value: event.target.value
    })
  }

  const isInputDisabled = location.type === 'current'
  const inputValue =
    location.type !== 'current' ? location.value : 'Current location'

  return (
    <Form className='mb-4'>
      <Form.Group className='mb-2' controlId='location'>
        <Form.Label>Location</Form.Label>
        <Form.Control
          placeholder='e.g. Las Palmas'
          aria-labelledby='e.g. Las Palmas'
          disabled={isInputDisabled}
          onChange={selectedPositionHandler}
          value={inputValue}
        />
      </Form.Group>
      <Form.Check className='checkbox'>
        <Form.Check.Label>Get current location</Form.Check.Label>
        <Form.Check.Input
          disabled={!currentLocation}
          onClick={currentPositionHandler}
        />
      </Form.Check>
    </Form>
  )
}
