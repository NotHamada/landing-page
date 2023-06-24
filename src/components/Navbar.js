import "bootstrap";
import React from "react";
import "./Navbar.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-purple bg-soft-lilac">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <h2 className="fw-bold">Hello!</h2>
        </a>
        <button
        className="btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <span className="navbar-toggler-icon"></span> */}
          <FontAwesomeIcon icon={faBars} />        
          </button>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                About me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Experiences
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
