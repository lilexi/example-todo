/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from "react";
import "../style/todoComponent.css";
export default class todo extends Component {
  constructor(props) {
    super(props);
    this.state = { uID: null, display: "none" };
    this.onDisplay = this.onDisplay.bind(this);
  }

  onDisplay() {
    if (this.state.display === "none") {
      this.setState({ display: "grid" });
    } else {
      this.setState({ display: "none" });
    }
  }

  render() {
    return (
      <div className="oneTodo" onClick={this.onDisplay}>
        <div className="todoComponent">
          <div className="title-container">
            <div className="title">{this.props.title}</div>
            <div className="btn-done"> ✅ </div>
            <div className="btn-delete"> ❎ </div>
          </div>
        </div>
        <div className="subInfo" style={{ display: `${this.state.display}` }}>
          <div className="note"> {this.props.note} </div>
          <div className="date"> {this.props.date} </div>
          <div className="tags"> {this.props.tags} </div>
        </div>
      </div>
    );
  }
}
