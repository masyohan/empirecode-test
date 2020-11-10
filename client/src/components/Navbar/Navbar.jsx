import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className="menuButton"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className="title">
            EmpireCode
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Navbar;
