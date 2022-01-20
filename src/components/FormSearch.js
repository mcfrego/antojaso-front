import Form from 'react-bootstrap/Form'
import { Button } from 'bootstrap'
import { searchPlaces } from '../service/apiFSQ'

export function FormSearch (props) {
  const { location } = props

  const selectedSearchHandler = event => {
    searchPlaces({
      searchTerm: event.target.value,
      ...location
    })
  }

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
