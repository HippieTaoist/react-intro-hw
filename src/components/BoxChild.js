import React, { Component } from "react";

export class BoxChild extends Component {
  render() {
    return <div style={{ color: "black" }}>{this.props.id}</div>;
  }
}

export default BoxChild;
