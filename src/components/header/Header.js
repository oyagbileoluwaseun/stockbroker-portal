import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to='/'>
            <i className="fa-3x fa fa-compass" />
          </Link>
            <a className="navbar-brand" href=" ">Stock Broker</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <a className="nav-link text-primary" aria-current="page" href=" ">Services</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-primary" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" href=" ">
                  Portal
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <Link to='/brokerlogin' className="text-decoration-none">
                    <li className="dropdown-item" >Stock Broker</li>
                  </Link>
                  <Link to='/verifierlogin' className="text-decoration-none">
                    <li className="dropdown-item" >Verifier</li>
                  </Link>
                </ul>
              </li>
                <li className="nav-item">
                 <a className="nav-link text-primary" aria-current="page" href=" ">About Us</a>
                </li>
                <li className="nav-item">
                 <a className="nav-link text-primary" aria-current="page" href=" ">Contact Us</a>
                </li>
            </ul>
            <div className="d-flex">
              <Link to='/livetrade'>
               <button className="btn btn-outline-primary" type="submit">Stock Live Market</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
