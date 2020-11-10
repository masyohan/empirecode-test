import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Formik } from "formik";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container
        fixed
        style={{
          minWidth: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          background: "url(/images/background.png)",
          backgroundSize: "cover",
        }}
      >
        <Paper elevation={1} className="paper">
          <h2 style={{ margin: "0" }}>EmpireCode Login</h2>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            className="textfield"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Sign In
          </Button>
        </Paper>
      </Container>
    );
  }
}

export default Login;
