import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PrivateRoute from "./helpers/auth/PrivateRoute";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import { AuthProvider } from "./helpers/auth/auth";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <Redirect to="/login" />
          </Switch>
        </Router>
      </AuthProvider>
    );
  }
}

export default App;
