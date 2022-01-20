import Form from 'react-bootstrap/Form'

export function FormSearch ({ search, onChangeSearch, isInputDisabled }) {
  const selectedSearchHandler = event => {
    onChangeSearch(event.target.value)
  }

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
