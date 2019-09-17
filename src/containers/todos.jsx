import React, { Component } from "react";
import Todo from "../components/todo";
import "../style/todoContainer.css";

export default class todos extends Component {
  render() {
    return (
      <div className="container">
        <div className="todo">
          <p>TODO:</p>
          <Todo title="empty1" />
          <Todo
            title="test1"
            note="test note #1"
            date="19.04.19"
            tags="#work"
          />
          <Todo
            title="test2"
            note="test note #2"
            date="21.09.19"
            tags="#home"
          />
          <Todo title="empty2" />
        </div>
      </div>
    );
  }
}
