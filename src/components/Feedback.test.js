import { render, screen } from '@testing-library/react'
import { Feedback } from '.'

const values = [
  { type: 'noLocation', text: 'Geoposition not available' },
  { type: 'welcome', text: 'try some search' },
  { type: 'loading', text: 'Loading' },
  { type: 'noResults', text: 'No results' },
  { type: 'noFavs', text: 'any favorite yet' }
]

describe('Feedback component', () => {
  test('correctly shows selected feedback type 01', () => {
    render(<Feedback type={values[0].type} />)

    const text = screen.queryByText(values[0].text, {
      exact: false
    })
    expect(text).toBeInTheDocument()
  })

  test('correctly shows selected feedback type 02', () => {
    render(<Feedback type={values[1].type} />)

    const text = screen.queryByText(values[1].text, {
      exact: false
    })
    expect(text).toBeInTheDocument()
  })

  test('correctly shows selected feedback type 03', () => {
    render(<Feedback type={values[2].type} />)

    const text = screen.queryByText(values[2].text, {
      exact: false
    })
    expect(text).toBeInTheDocument()
  })

  test('correctly shows selected feedback type 04', () => {
    render(<Feedback type={values[3].type} />)

    const text = screen.queryByText(values[3].text, {
      exact: false
    })
    expect(text).toBeInTheDocument()
  })

  test('correctly shows selected feedback type 05', () => {
    render(<Feedback type={values[4].type} />)

    const text = screen.queryByText(values[4].text, {
      exact: false
    })
    expect(text).toBeInTheDocument()
  })
})
