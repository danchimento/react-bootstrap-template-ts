import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter
} from "react-router-dom";
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <div className="App container-fluid">
          <Route path="/" exact component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;
