import { useHistory } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'

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
          <p onClick={onFavClick}>fav</p>
        </Stack>
      </header>
      <main>{children}</main>
    </Container>
  )
}
