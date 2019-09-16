import React, { Component } from "react";
import "../style/auth.css";

export default class login extends Component {
  render() {
    return (
      <div className="auth">
        <div className="auth-content">
          <input type="text" />
          <input type="text" />
          <br />
          <button>Login</button>
        </div>
      </div>
    );
  }
}
