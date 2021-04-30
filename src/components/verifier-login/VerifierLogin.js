import React from 'react';
import { Link } from "react-router-dom";
import user from '../../assets/images/cloud.png';
import "./VerifierLogin.css";

function VerifierLogin() {
  return (
    <div>
      <div className="login-verifier-background contiane-fluid">
        <div className="loging-verifier-padding d-flex container">
          <Link to='/'>
            <i className="fa-3x fa fa-compass" />
          </Link>
          <a className="navbar-brand text-dark m-1" href=" ">Stock Broker</a>
        </div>
        <div className="container shadow-lg bg-body broker-login col-7 bg-light">
          <div className="text-center"><img className="user-image" src={user} alt="" /></div>
            <form >
              <div className="col-7 mx-auto mt-2">
                <input type="" className="form-control shadow bg-body login-input" id="exampleFormControlInput1" placeholder="Enter Username" />
                <input type="" className="form-control shadow bg-body mt-3 login-input" id="exampleFormControlInput1" placeholder="Enter Password" />   
              </div>
              <div className="col-7 mx-auto mt-4 pb-4 justify-content-between d-flex login-details">
                <Link to='/retrievepasswordverifier' className="text-decoration-none">
                  <div><p className="login-text fw-bold text-decoration-none" href=" ">Retrieve Password</p></div>
                </Link>
                <Link to='/verifierdashboard'>
                  <div><button type="button" className="btn btn-primary btn-sm" href=" ">Verifier Login</button></div>
                </Link>
              </div>
            </form>
        </div>
      </div>
    </div>
  );
}

export default VerifierLogin;
