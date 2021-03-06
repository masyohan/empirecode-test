import React, { Component } from "react";
import { AuthContext } from "../../helpers/auth/auth";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { logout } from "../../helpers/auth/auth";
import "./Navbar.css";

class Navbar extends Component {
  static contextType = AuthContext;
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleLogout = () => {
    const { auth, setAuth } = this.context;
    logout(() => {
      setAuth({ isAuthenticated: false });
    });
  };
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className="title">
            EmpireCode
          </Typography>
          <Button color="inherit" onClick={() => this.handleLogout()}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Navbar;
