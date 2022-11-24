import "./navbar.css";
import React from "react";

function Navbar() {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              COOPERATIVA
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Acerca
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contactanos">
                    Contactanos
                  </a>
                </li>
                <li
                  className="nav-item"
                  style={{
                    backgroundColor: "#56c569",
                    borderRadius: "10px",
                  }}
                >
                  <a
                    className="nav-link"
                    href="/register"
                    style={{
                      color: "white",
                    }}
                  >
                    Registrate
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
