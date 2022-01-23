import { useHistory } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import { BookmarkHeartFill } from 'react-bootstrap-icons'

export function Layout ({ children }) {
  const history = useHistory()

  const onFavClick = () => {
    history.push('/favorites')
  }

  const onHomeClick = () => {
    history.push('/search')
  }

  return (
    <Container className='my-4'>
      <header>
        <Stack direction='horizontal' gap='2'>
          <h1 onClick={onHomeClick} className='me-auto'>
            El Antojaso
          </h1>
          <BookmarkHeartFill
            onClick={onFavClick}
            size={40}
            color='lightseagreen'
          />
        </Stack>
      </header>
      <main>{children}</main>
    </Container>
  )
}
