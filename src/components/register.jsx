import React, { Component } from "react";
import "../style/auth.css";

export default class register extends Component {
  render() {
    return (
      <div className="auth">
        <div className="auth-content">
          Login: <br/>
          <input type="text" /> <br/>
          Email: <br/>
          <input type="text" name="" id="" />
          Passowrd:
          <input type="text" />
          Passowrd:
          <input type="text" />
          <br />
          <button>Register</button>
        </div>
      </div>
    );
  }
}
