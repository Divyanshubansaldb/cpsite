import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Multicard from "./components/multiplecards";
import Card from "react-bootstrap/Card";

class App extends Component {
  state = {
    selected: false,
    tags: [],
  };

  addingtag = (tagvalue) => {
    let tags = this.state.tags;
    tags.push(tagvalue.name);
    this.setState({ tags, selected: true });
  };

  removingtag = (tagvalue) => {
    let tags = this.state.tags;
    const index = tags.indexOf(tagvalue.name);
    if (index > -1) {
      tags.splice(index, 1);
    }
    if (tags.length === 0) {
      this.setState({ tags, selected: false });
    } else {
      this.setState({ tags });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <div className="outercontainer">
            <div className="row">
              <div className="col-3">
                <Sidebar onadd={this.addingtag} onremove={this.removingtag} />
              </div>
              <div className="col-9">
                <main>
                  <div className="container" style={{ Width: "70%" }}>
                    <div className="row">
                      {this.state.selected ? (
                        <Multicard tags={this.state.tags} />
                      ) : (
                        <Card body>Please Select Any tag</Card>
                      )}
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
