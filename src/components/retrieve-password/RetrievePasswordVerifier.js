import React from 'react';
import { Link } from "react-router-dom";
import lock from '../../assets/images/lock.png';
import './RetrievePassword.css';

function RetrievePasswordVerifier() {
  return (
    <div className="retrieve-verifier-background-v contiane-fluid">
      <div className="retrieve-password-padding d-flex container">
        <Link to='/'>
          <i className="fa-3x fa fa-compass" />
        </Link>
        <p className="navbar-brand text-dark m-1">Stock Broker</p>
      </div>
      <div className="container shadow-lg bg-body broker-login col-7 bg-light">
        <div className="text-center"><img className="user-image" src={lock} alt="" /></div>
          <form>
            <div className="col-7 mx-auto mt-2">
              <input type="email" className="form-control shadow bg-body mt-3 login-input" id="exampleFormControlInput1" placeholder="Enter Your Email Address" />   
            </div>
            <div className="col-7 mx-auto mt-4 pb-4 justify-content-between d-flex login-details">
              <Link to='/verifierlogin'>
                <div><button type="button" className="btn btn-primary btn-sm">Retrieve Password</button></div>
              </Link>
            </div>
          </form>
      </div>
    </div>
  );
}

export default RetrievePasswordVerifier;
