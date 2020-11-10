import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Dashboard.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <Navbar />;
  }
}

export default Dashboard;
