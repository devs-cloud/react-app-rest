import React, { useState } from 'react'
import { Modal, Button } from 'reactstrap'

const Login = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const handleLogin = () => {
    // fetch(`http://localhost:8080/agents/2/listings`)
    //   .then((res) => res.json())
    //   .then((allListings) => {
    //     console.log(allListings)
    //   })
    console.log('login')
    setShow(false)
  }

  return (
    <>
      <a className="nav-link text-muted my-2 my-lg-0">
        <div onClick={handleShow}>Login</div>
      </a>

      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login to your account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>
            Username:
            <input type="text" name="username" />
          </label>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleLogin}>
            Login
          </Button>
        </Modal.Footer>
      </Modal> */}
    </>
  )
}

export default Login
