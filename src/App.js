import React from 'react';
import './App.css';
import Login from './pages/login';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Route exact path="/" component={Login} />
    </Router>
  );
}

export default App;
