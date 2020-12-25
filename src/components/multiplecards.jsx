import React, { Component } from "react";
import Customcard from "./prolemcard";
import Card from "react-bootstrap/Card";

class multicard extends Component {
  state = {
    data: [],
    loading: true,
    tags: [],
  };

  fetchingproblems = () => {
    const url =
      "https://cors-anywhere.herokuapp.com/https://cpsitebackend.herokuapp.com/problems";
    // console.log("fetching function called");
    fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      body: JSON.stringify({ taglist: this.props.tags }),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        // "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          data,
          loading: false,
          // tags: this.props.tags,
        });
      })
      .catch((e) => {
        console.error("this was an error");
        console.log(e);
      });
  };

  componentDidMount() {
    this.fetchingproblems();
  }

  // componentDidUpdate(previousProp, previousState) {
  //   // console.log(previousProp.tags + "/n");
  //   // console.log(previousState.tags);
  //   // console.log(this.state.tags);
  //   // console.log(this.props.tags);
  //   // console.log(this);
  //   // console.log("class tags" + this.tags);
  //   // console.log("props.tags" + this.props.tags);
  //   // if (this.tags !== this.props.tags) {
  //   //   this.fetchingproblems();
  //   // }
  // }

  render() {
    console.log("render");
    return (
      <React.Fragment>
        {this.state.loading ? (
          <Card body>Loading....</Card>
        ) : this.state.data.length ? (
          this.state.data.map((problem) => {
            return (
              <div className="col-4 my-3 " key={problem.code}>
                <Customcard problem={problem} key={problem.code} />
              </div>
            );
          })
        ) : (
          <Card body>No problem corresponds to these set of tags</Card>
        )}
      </React.Fragment>
    );
  }
}

export default multicard;
