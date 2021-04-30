import React from 'react';
import { Link } from "react-router-dom";
import image from '../../assets/images/image1.png';
import './Main.css';

function Main() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="zoom-right col-xl-6 col-lg-6 col-md-5 col-sm-11 col-xs-11">
          <p className="end-to-end-text">
            End-to-end StockBroker <br/>
            Processes Management.</p>
          <p className="fs-4 stockbroker-text">Click on the StockBroker or Verifier button to
            access the the portal</p>
          <div className="container-fluid d-flex">
            <Link to='/brokerlogin'>
              <button type="button" className="btn btn-outline-primary stock-btn">Stock Broker</button>
            </Link>
            <Link to='/verifierlogin'>
              <button type="button" className="btn btn-outline-primary verifier-btn">Verifier Portal</button>
            </Link>
          </div>
        </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-10 col-xs-11">
            <img className="stock-image text-center mb-1" src={image} alt=" " />
          </div>
      </div>
    </div>
  );
}

export default Main;
