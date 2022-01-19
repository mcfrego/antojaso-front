import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'

export function Layout ({ children }) {
  return (
    <Container className='my-4'>
      <header>
        <Stack direction='horizontal' gap='2'>
          <h1 className='me-auto'>El Antojaso</h1>
          <p>fav</p>
        </Stack>
      </header>
      <main>{children}</main>
    </Container>
  )
}
