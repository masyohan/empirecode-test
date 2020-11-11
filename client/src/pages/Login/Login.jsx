import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { authenticate, AuthContext } from "../../helpers/auth/auth";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./Login.css";

class Login extends Component {
  static contextType = AuthContext;
  constructor(props) {
    super(props);
    this.state = {
      error: {},
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: Yup.object().shape({
        email: Yup.string()
          .email("Email is invalid")
          .required("Email is required"),
        password: Yup.string().required("Password is required"),
      }),
    };
  }
  handleSubmit = (values, { setSubmitting }) => {
    const { auth, setAuth } = this.context;
    authenticate(values, (error, result) => {
      if (error) {
        this.setState({ error: error.response.data });
      } else {
        console.log(result);
        setAuth({ isAuthenticated: true });
      }
    });
    setSubmitting(false);
  };

  render() {
    const { auth, setAuth } = this.context;
    if (auth.isAuthenticated) {
      return <Redirect to="dashboard" />;
    }
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
          <Formik
            initialValues={this.state.initialValues}
            validationSchema={this.state.validationSchema}
            onSubmit={this.handleSubmit}
          >
            {({
              values,
              touched,
              errors,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <p className="invalid-feedback">{this.state.error.message}</p>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  className="textfield"
                  label="Email Address"
                  name="email"
                  onChange={handleChange}
                  value={values.name}
                  onBlur={handleBlur}
                  autoComplete="email"
                  autoFocus
                />
                <ErrorMessage
                  component="div"
                  name="email"
                  className="invalid-feedback"
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
                  onChange={handleChange}
                  value={values.name}
                  onBlur={handleBlur}
                  autoComplete="current-password"
                />
                <ErrorMessage
                  component="div"
                  name="password"
                  className="invalid-feedback"
                />

                <Button
                  type="submit"
                  style={{ width: "60%", margin: "20px auto 0 auto" }}
                  fullWidth
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                >
                  Sign In
                </Button>
              </form>
            )}
          </Formik>
        </Paper>
      </Container>
    );
  }
}

export default withRouter(Login);
