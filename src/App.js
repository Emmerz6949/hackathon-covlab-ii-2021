import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Choose from './pages/Choose';
import Chem from './pages/Chem';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/hackathon-covlab-ii-2021/" component={Home} />
        <Route exact path="/hackathon-covlab-ii-2021/choose" component={Choose} />
        <Route exact path="/hackathon-covlab-ii-2021/chemistry" component={Chem} />
      </div>
    </Router>
  );
}

export default App;
