import { render, screen } from '@testing-library/react'
import { MapImage } from '.'

const desiredUrl01 =
  'https://maps.googleapis.com/maps/api/staticmap?key=keytesting&size=600x300&zoom=16&markers=color:red%7C10,10'

const desiredUrl02 =
  'https://maps.googleapis.com/maps/api/staticmap?key=keytesting&size=600x300&zoom=16&markers=color:red%7C10,10%7C20,20'

describe('MapImage component', () => {
  test('renders with correct url map for one location', () => {
    render(<MapImage coordinates={['10,10']} zoom />)

    const image = screen.getByRole('img')

    expect(image).toHaveAttribute('src', desiredUrl01)
  })

  test('renders with correct url map for several locations', () => {
    render(<MapImage coordinates={['10,10', '20,20']} zoom />)

    const image = screen.getByRole('img')

    expect(image).toHaveAttribute('src', desiredUrl02)
  })
})
