import React from 'react';
import Request from '../request/Request';
import BoardAppBar from '../boardappbar/BoardAppBar';
import profile from '../../assets/images/profile.gif';
import wallet from '../../assets/images/wallet.gif';
import app from '../../assets/images/app.gif';
import settings from '../../assets/images/settings.gif';
import support from '../../assets/images/support.gif';
import category from '../../assets/images/10.gif';
import "./BrokerDashboard.css";

function BrokerDashboard() {
  return (
    <div>
      <BoardAppBar />
      <div>
      <div className="container">
        <div className="row">
          <div className="navbar-expand-sm navbar-light pb-4 pt-4 col-xl-3 col-lg-4 col-md-4 col-sm-10 col-xs-4">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
          <div className="nav flex-column nav-pills" id="navbarNav" role="tablist" aria-orientation="vertical">
            <button className="nav-link active" id="v-pills-request-tab" data-bs-toggle="pill" data-bs-target="#v-pills-request" type="button" role="tab" aria-controls="v-pills-request" aria-selected="true">Log Request</button>
            <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Request Messages</button>
            <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">User Profile</button>
            <button className="nav-link" id="v-pills-wallet-tab" data-bs-toggle="pill" data-bs-target="#v-pills-wallet" type="button" role="tab" aria-controls="v-pills-wallet" aria-selected="false">Wallet</button>
            <button className="nav-link" id="v-pills-app-tab" data-bs-toggle="pill" data-bs-target="#v-pills-app" type="button" role="tab" aria-controls="v-pills-app" aria-selected="false">App Setup</button>
            <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>
            <button className="nav-link" id="v-pills-support-tab" data-bs-toggle="pill" data-bs-target="#v-pills-support" type="button" role="tab" aria-controls="v-pills-support" aria-selected="false">Contact Support</button>
            <button className="nav-link categories fs-6 fw-bold" id="v-pills-categories-tab" data-bs-toggle="pill" data-bs-target="#v-pills-categories" type="button" role="tab" aria-controls="v-pills-categories" aria-selected="false">View all categories  <i class="fa fa-chevron-right"/></button>
          </div>
          </div>  
          <div className="tab-content border-start col-xl-9 col-lg-8 col-md-8 col-sm-11 col-xs-7" id="v-pills-tabContent">
            <div className="tab-pane fade show active act" id="v-pills-request" role="tabpanel" aria-labelledby="v-pills-request-tab">
              <Request />
              </div>
              <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                <div class="table-responsive mt-2">
                  <table class="table caption-top">
                    <caption>Requests History</caption>
                    <thead>
                      <tr>
                        <th scope="col-2">S/N</th>
                        <th scope="col-7">Request Type</th>
                        <th scope="col-3">Progress</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Request for outstanding dividend</td>
                        <td className="text-warning fw-bold">Captured</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Change of Name/Address</td>
                        <td className="text-success fw-bold">Approved</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                <p className="pt-3">User Profile Coming soon...</p>
                <img className="images" src={profile} alt="profile" />
              </div>
              <div className="tab-pane fade" id="v-pills-wallet" role="tabpanel" aria-labelledby="v-pills-wallet-tab">
                <p className="pt-3">Stock Broker Wallet Coming soon...</p>
                <img className="images" src={wallet} alt="wallet" />
              </div>
              <div className="tab-pane fade" id="v-pills-app" role="tabpanel" aria-labelledby="v-pills-app-tab">
                <img className="images" src={app} alt="app" />
              </div>
              <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                <img className="images" src={settings} alt="settings" />
              </div>
              <div className="tab-pane fade" id="v-pills-support" role="tabpanel" aria-labelledby="v-pills-support-tab">
                <img className="images" src={support} alt="support" />
              </div>
              <div className="tab-pane fade" id="v-pills-categories" role="tabpanel" aria-labelledby="v-pills-categories-tab">
                <img className="images" src={category} alt="category" />
              </div>
            </div>
          </div>
      </div>
     </div>
    </div>
  );
}

export default BrokerDashboard;
