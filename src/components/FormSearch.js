import Form from 'react-bootstrap/Form'

export function FormSearch (props) {
  const { location } = props

  const selectedSearchHandler = event => {}

  const isInputDisabled = !location.type

  return (
    <Form className='mb-4'>
      <Form.Group controlId='search'>
        <Form.Label>Search</Form.Label>
        <Form.Control
          placeholder='e.g. Hamburguer'
          aria-labelledby='e.g. Hamburguer'
          disabled={isInputDisabled}
          onChange={selectedSearchHandler}
        />
      </Form.Group>
    </Form>
  )
}
