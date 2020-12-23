import React, { Component } from "react";

class navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand">{<h1>CPSITE</h1>}</a>
        <button className="btn btn-secondary btn-sm">Login</button>
      </nav>
    );
  }
}

export default navbar;
