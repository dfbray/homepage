import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { SocialIcon } from 'react-social-icons';

import styles from './sidebar.module.css'

export default function Sidebar() {
  return (
    <>

      <Nav className={`bg-light ${styles.sidenav}`}>
        <Container>
          <Col>
            <Row className={styles.sidenavItem}>
              <Image fluid src="dylan_bray.jpg" roundedCircle style={{'width': '85%', 'max-width': '150px', 'padding': '15px'}} />
            </Row>
            <Row className={styles.sidenavItem}>
              <Nav.Item style={{'font-size': '24px'}}>Dylan Bray</Nav.Item>
            </Row>
            <Row className={styles.sidenavItem}>
              <Nav.Item style={{'font-size': '14px', 'text-align': 'center'}}>Master's Software Engineering Student at the University of Texas at Austin</Nav.Item>
            </Row>
            <Row className={styles.sidenavItem}>

              <SocialIcon className={styles.sidenavSocial} style={{ height: 30, width: 30}} bgColor="#D3D3D3" url="https://github.com/dfbray/" />
              <SocialIcon className={styles.sidenavSocial} style={{ height: 30, width: 30}} bgColor="#D3D3D3" url="https://www.linkedin.com/in/dfbray/" />
              <SocialIcon className={styles.sidenavSocial} style={{ height: 30, width: 30}} bgColor="#D3D3D3" url="https://twitter.com/thedylanbray/" />
              <SocialIcon className={styles.sidenavSocial} style={{ height: 30, width: 30}} bgColor="#D3D3D3" url="mailto://lol@youcantemail.me" />

            </Row>
            <Row className={styles.sidenavItem}>
              <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Row>
            <Row className={styles.sidenavItem}>
              <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Row>
            <Row className={styles.sidenavItem}>
              <Nav.Link eventKey="disabled" disabled>
                Disabled
              </Nav.Link>
            </Row>
          </Col>
        </Container>
      </Nav>
    </>
  )
}
