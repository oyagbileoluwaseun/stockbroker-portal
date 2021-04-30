import React from 'react';
import { Link } from "react-router-dom";
import user from '../../assets/images/user.jpg';
import './BrokerLogin.css';

function BrokerLogin() {
  return (
    <div className="login-background contiane-fluid">
      <div className="loging-padding d-flex container">
        <Link to='/'>
        <i className="fa-3x fa fa-compass" />
        </Link>
        <p className="navbar-brand text-dark m-1">Stock Broker</p>
      </div>
      <div className="container shadow-lg bg-body broker-login col-7 bg-light">
        <div className="text-center"><img className="user-image" src={user} alt="" /></div>
        <form>
          <div className="col-7 mx-auto mt-2">
            <input type="" className="form-control shadow bg-body login-input" id="exampleFormControlInput1" placeholder="Enter Username" />
            <input type="" className="form-control shadow bg-body mt-3 login-input" id="exampleFormControlInput1" placeholder="Enter Password" />   
          </div>
          <div className="col-7 mx-auto mt-4 pb-4 justify-content-between d-flex login-details">
            <Link to='/retrievepasswordbroker' className="text-decoration-none">
              <div><p className="login-text fw-bold text-decoration-none" >Retrieve Password</p></div>
            </Link>
            <Link to='/brokerdashboard'>
              <div><button type="button" className="btn btn-primary btn-sm">Broker Login</button></div>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BrokerLogin;
