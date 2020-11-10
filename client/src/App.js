import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/" component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default App;
