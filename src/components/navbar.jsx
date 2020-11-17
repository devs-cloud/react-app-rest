import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../pages/Login'

function NavBar() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link to="/" className="navbar-brand" href="#">
          <img src={process.env.PUBLIC_URL + '/logo.svg'} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarLinks"
          aria-controls="navbarLinks"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarLinks">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link to="/listing" className="nav-link" href="#">
                Listings
              </Link>
            </li>
          </ul>
          <Login />
        </div>
      </nav>
    </React.Fragment>
  )
}

export default NavBar
