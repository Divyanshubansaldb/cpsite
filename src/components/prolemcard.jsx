import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class singlecard extends Component {
  state = {};

  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Problem Code: {this.props.problem.code}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <h6>Author: {this.props.problem.author}</h6>
            <h6>Solved: {this.props.problem.solved}</h6>
            <h6>Attempted: {this.props.problem.attempted}</h6>
            <h6>PartiallySolved: {this.props.problem.partiallySolved}</h6>
          </Card.Subtitle>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default singlecard;
