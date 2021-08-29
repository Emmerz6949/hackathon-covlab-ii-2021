import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/hackathon-covlab-ii-2021/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
