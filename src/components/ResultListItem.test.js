import { render, screen } from '@testing-library/react'
import { ResultListItem } from './ResultListItem'
import userEvent from '@testing-library/user-event'

const resultMockup = {
  fsq_id: 'test_id',
  name: 'test',
  categories: [],
  location: {}
}

describe('ResultListItem component', () => {
  test('saves fav result in localStorage', () => {
    render(<ResultListItem result={resultMockup} />)

    // const favButton = screen.queryByTestId('fav')
    // userEvent.click(favButton)

    // const favs = JSON.parse(localStorage.getItem('favoritePlaces'))
    // console.log(localStorage)
    // expect([resultMockup.fsq_id]).toEqual(expect.arrayContaining(favs))
  })
})
