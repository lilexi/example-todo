import React, { Component } from "react";
import { connect } from "react-redux";
import "../style/auth.css";

class register extends Component {
  state = {
    type: null,
    name: "",
    email: "",
    password: ""
  };

  changeHandler = (event, type) => {
    this.setState({ [type]: event.target.value });
  };

  submit = event => {
    event.preventDefault();
    let userData = [];
    userData.push(this.state.name);
    userData.push(this.state.email);
    userData.push(this.state.password);
    console.log("userdata:", userData);
  };

  render() {
    let form = (
      <form className="auth" onSubmit={this.submit}>
        <p className="a-t">Register: </p>
        <input
          type="text"
          placeholder="name"
          value={this.state.name}
          onChange={event => this.changeHandler(event, "name")}
        />
        <input
          type="email"
          placeholder="email"
          value={this.state.email}
          onChange={event => this.changeHandler(event, "email")}
        />
        <input
          type="password"
          placeholder="password"
          value={this.state.password}
          onChange={event => this.changeHandler(event, "password")}
        />
        <br />
        <input className="btn-reg" type="submit" />
      </form>
    );
    return <div>{form}</div>;
  }
}

const mapStateToProps = state => {
  return {
      user: state.authReducer.user ? state.authReducer.user : null,
      errorMessage: state.authReducer.error ? state.authReducer.error.message : "",
  }
};
const mapDispatchToProps = dispatch => {
  return {
      
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(register);