import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { AuthContext } from "../../helpers/auth/auth";
import Navbar from "../../components/Navbar/Navbar";
import Home from "./Home/Home";
import "./Dashboard.css";

class Dashboard extends Component {
  static contextType = AuthContext;
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { auth, setAuth } = this.context;

    return (
      <>
        <Navbar />
        <Home user={auth} />
      </>
    );
  }
}

export default withRouter(Dashboard);
