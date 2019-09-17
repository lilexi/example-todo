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
          <input type="text" name="" id="" /> <br/>
          Passowrd: <br/>
          <input type="text" /> <br/>
          Passowrd: <br/>
          <input type="text" /> <br/>
          <br />
          <button>Register</button>
        </div>
      </div>
    );
  }
}
