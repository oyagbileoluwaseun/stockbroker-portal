import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from '././components/footer/Footer';
import Getaccount from './components/live-trade/LiveTrade';
import BrokerDashboard from './components/broker-dashboard/BrokerDashboard';
import BrokerLogin from './components/broker-login/BrokerLogin';
import VerifierLogin from './components/verifier-login/VerifierLogin';
import VerifierDashboard from './components/verifier-dashboard/VerifierDashboard';
import './App.css';
import RetrievePaswordBroker from "./components/retrieve-password/RetrievePasswordBroker";
import RetrievePasswordVerifier from "./components/retrieve-password/RetrievePasswordVerifier";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/"> 
            <Header />
            <Main />
            <Footer />
          </Route>
          <Route path="/livetrade">
            <Getaccount/>
          </Route>
          <Route path="/brokerlogin">
            <BrokerLogin />
          </Route>
          <Route path="/brokerdashboard">
            <BrokerDashboard />
          </Route>
          <Route path="/verifierlogin">
            <VerifierLogin />
          </Route>
          <Route path="/verifierdashboard">
            <VerifierDashboard />
          </Route>
          <Route path="/retrievepasswordbroker">
            <RetrievePaswordBroker />
          </Route>
          <Route path="/retrievepasswordverifier">
           <RetrievePasswordVerifier />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
