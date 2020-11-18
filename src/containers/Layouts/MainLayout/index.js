import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Footer, NavBar } from 'components'

const MainLayout = ({ children }) => (
  <Container className="main-container d-flex flex-column">
    <Row className="header">
      <Col>
        <NavBar />
      </Col>
    </Row>
    <Row className="main-content flex-grow-1 pb-3">
      <Col>{children}</Col>
    </Row>
    <Row>
      <Col>
        <Footer />
      </Col>
    </Row>
  </Container>
)

export default MainLayout
