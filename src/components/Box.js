import React, { Component } from "react";

import BoxChild from "./BoxChild";

export class Box extends Component {
  render() {
    console.log("Line 007 - Box - this.props -", this.props);
    return (
      <div>
        {this.props.title}
        {this.props.id}
        <BoxChild key={this.props.id} />
      </div>
    );
  }
}

export default Box;
