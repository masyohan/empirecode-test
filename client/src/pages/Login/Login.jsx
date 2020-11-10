import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Formik } from "formik";
import Paper from "@material-ui/core/Paper";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Paper elevation={1} className="paper">
        <h1>Login</h1>
      </Paper>
    );
  }
}

export default Login;
