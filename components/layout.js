import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { SocialIcon } from 'react-social-icons';
import Sidebar from './sidebar'

import styles from './layout.module.css'

export default function Layout({ children }) {
  return(
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar bg="primary" variant="dark" expand="md" >
        <Container fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/">Another</Nav.Link>
              <Nav.Link href="/">Thing</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Row noGutters>
        <Col md={1} xs={12} style={{'min-width': '300px'}}>
          <Sidebar/>
        </Col>
        <Col md="auto" xs={12} style={{'flex': '1'}}>
          <main style={{'min-height': 'calc(100vh - 56px - 90px)'}}>
            {children}
          </main>
        </Col>
      </Row>

      <footer>
        <Navbar bg="light" >
          <Container>
            <Col md={12}>
              <Row className="justify-content-center">
                <SocialIcon className={styles.footerSocial} bgColor="#D3D3D3" url="https://github.com/dfbray/" />
                <SocialIcon className={styles.footerSocial} bgColor="#D3D3D3" url="https://www.linkedin.com/in/dfbray/" />
                <SocialIcon className={styles.footerSocial} bgColor="#D3D3D3" url="https://twitter.com/thedylanbray/" />
                <SocialIcon className={styles.footerSocial} bgColor="#D3D3D3" url="mailto://lol@youcantemail.me" />
              </Row >
              <Row className="justify-content-center">
                Created With Next.js and React-Bootstrap
              </Row >
            </Col>
          </Container>
        </Navbar>
      </footer>

    </>
  )
}
