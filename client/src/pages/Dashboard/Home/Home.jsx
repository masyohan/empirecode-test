import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <h1>Welcome back, {this.props.user.fullname}</h1>
      </>
    );
  }
}

export default Home;
