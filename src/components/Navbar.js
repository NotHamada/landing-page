import "bootstrap";
import React from "react";
import "./Navbar.css";
import ReactDOM from "react-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-purple bg-soft-lilac">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <h2 class="fw-bold">Hello, I'm Matheus Hamada</h2>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">
                About me
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Experiences
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
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
