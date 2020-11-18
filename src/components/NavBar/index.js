import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Navbar,
  NavItem,
  NavbarToggler,
  Collapse,
  Nav,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
} from 'reactstrap'
// import Login from 'components/Forms/LoginForm'

const NavBar = () => {
  const [isOpen, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!isOpen)
  }

  return (
    <>
      <Navbar expand="xs" style={{ padding: '1.5rem 0' }}>
        <Link to="/" className="navbar-brand">
          <img src={process.env.PUBLIC_URL + '/logo.svg'} alt="logo" />
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="mt-0">
          <Nav className="ml-auto" navbar>
            <NavItem className="text-uppercase c-pointer">
              <Link to="/listing">Listing</Link>
            </NavItem>
            <NavItem className="text-uppercase c-pointer ml-3">
              <Link to="/login">Log In</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  )
}

export default NavBar
