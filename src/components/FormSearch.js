import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'

export function FormSearch ({ search, onChangeSearch, isInputDisabled }) {
  const selectedSearchHandler = event => {
    onChangeSearch(event.target.value)
  }

  const clearSearchHandler = () => {
    onChangeSearch('')
  }

  return (
    <Form className='mb-4'>
      <Form.Group controlId='search'>
        <Form.Label>What do you want to eat?</Form.Label>
        <InputGroup>
          <Form.Control
            placeholder='e.g. Pizza'
            aria-labelledby='e.g. Pizza'
            value={search}
            disabled={isInputDisabled}
            onChange={selectedSearchHandler}
          />
          <Button onClick={clearSearchHandler}>Clear</Button>
        </InputGroup>
      </Form.Group>
    </Form>
  )
}
