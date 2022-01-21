import Form from 'react-bootstrap/Form'

export function FormLocation ({ location, currentLocation, onChangeLocation }) {
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
  const checkLabel = `Get current location ${
    !currentLocation ? '(not available)' : ''
  }`

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
        <Form.Check.Label>{checkLabel}</Form.Check.Label>
        <Form.Check.Input
          disabled={!currentLocation}
          onClick={currentPositionHandler}
        />
      </Form.Check>
    </Form>
  )
}
