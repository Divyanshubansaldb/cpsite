import React, { Component } from "react";
import Tags from "./tags";
import style from "./../styles/sidebar.css";

class sidebar extends Component {
  state = {};
  render() {
    return (
      <div class="fform-control" style={style}>
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          style={{ "margin-right": 0 }}
          type="submit"
        >
          Search
        </button>
        <Tags />
      </div>
    );
  }
}

export default sidebar;
