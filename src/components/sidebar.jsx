import React, { Component } from "react";
import Tags from "./tags";
// import style from "./../styles/sidebar.css";

class sidebar extends Component {
  state = {
    tagName: ["Difficulty", "Concepts", "Author"],
    loading: true,
    options: {},
  };

  componentDidMount() {
    const url = "https://cpsitebackend.herokuapp.com/tags";
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.settingthedata(data))
      .catch((e) => console.log(e));
  }

  settingthedata(data) {
    const options = {
      Difficulty: [],
      Concepts: [],
      Author: [],
    };
    data.Author.forEach((entry) => options.Author.push({ name: entry }));
    data.Difficulty.forEach((entry) =>
      options.Difficulty.push({ name: entry })
    );
    data.Concepts.forEach((entry) => options.Concepts.push({ name: entry }));
    this.setState({ options, loading: false });
  }

  matchingnames(str) {
    if (str === "Difficulty") return this.state.options.Difficulty;
    else if (str === "Concepts") return this.state.options.Concepts;
    else return this.state.options.Author;
  }

  render() {
    return (
      <div className="fform-control">
        {this.state.tagName.map((tag) => {
          return (
            <Tags
              key={tag}
              placeholder={tag}
              addingtag={this.props.onadd}
              removingtag={this.props.onremove}
              title={
                this.state.loading
                  ? [{ name: "loading...." }]
                  : this.matchingnames(tag)
              }
            />
          );
        })}
      </div>
    );
  }
}

export default sidebar;
