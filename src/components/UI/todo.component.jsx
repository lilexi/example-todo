import React, { Component } from "react";

export default class todo extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <p>{this.props.title}</p>
      </div>
    );
  }
}
