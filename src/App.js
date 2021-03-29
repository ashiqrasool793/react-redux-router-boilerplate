import React from "react";
import "./App.css";
import Login from "./pages/login";
import UserLoginForm from "./pages/userLoginForm";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { UserDetails } from "./pages/UserDetails";
import { Expenses } from "./pages/Expenses";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={UserLoginForm} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/expenses" component={Expenses} />
    </Router>
  );
}

export default App;
