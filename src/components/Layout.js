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
          <h1 className='me-auto'>El Antojaso</h1>
          <p onClick={onHomeClick} className='h4 text-primary font-weight-bold'>
            <u>Home</u>
          </p>
          <span className='vr ms-2' />
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
