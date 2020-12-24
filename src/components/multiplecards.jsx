import React, { Component } from "react";
import Customcard from "./prolemcard";
import Card from "react-bootstrap/Card";

class multicard extends Component {
  state = {
    data: [],
    loading: true,
  };

  fetchingproblems = () => {
    const url =
      "https://thingproxy.freeboard.io/fetch/https://cpsitebackend.herokuapp.com/problems";
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
        this.setState({ data, loading: false });
      })
      .catch((e) => {
        console.error("this was an error");
        console.log(e);
      });
  };

  componentDidMount() {
    this.fetchingproblems();
  }

  componentDidUpdate() {
    this.fetchingproblems();
  }

  render() {
    return (
      <React.Fragment>
        {this.state.loading ? (
          <Card body>Loading....</Card>
        ) : this.state.data.length ? (
          this.state.data.map((problem) => {
            return (
              <div className="col-4 my-3 " key={problem.code}>
                <Customcard problem={problem} />
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
