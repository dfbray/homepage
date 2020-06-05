import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { SocialIcon } from 'react-social-icons';

export default function Layout({ children }) {
  return(
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Link</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/">Another</Nav.Link>
            <Nav.Link href="/">Thing</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main style={{'min-height': 'calc(100vh - 56px - 66px)'}}>
        {children}
      </main>

      <footer>
        <Navbar className="justify-content-center" bg="dark" >
          <Nav>
            <Container>
              <SocialIcon bgColor="#D3D3D3" url="https://github.com/dfbray/" />
            </Container>
            <Container>
              <SocialIcon bgColor="#D3D3D3" url="https://www.linkedin.com/in/dfbray/" />
            </Container>
            <Container>
              <SocialIcon bgColor="#D3D3D3" url="https://twitter.com/thedylanbray/" />
            </Container>
            <Container>
              <SocialIcon bgColor="#D3D3D3" url="mailto://lol@youcantemail.me" />
            </Container>
            </Nav>
        </Navbar>
      </footer>

    </>
  )
}
