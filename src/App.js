import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Choose from './pages/Choose';
import Chem from './pages/Chem';
import ResultsChem from './pages/ResultsChem';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/science-rific-labs/" component={Home} />
        <Route exact path="/science-rific-labs/sign-up" component={SignUp} />
        <Route exact path="/science-rific-labs/choose" component={Choose} />
        <Route exact path="/science-rific-labs/chemistry" component={Chem} />
        <Route exact path="/science-rific-labs/chemistry-result" component={ResultsChem} />
      </div>
    </Router>
  );
}

export default App;
