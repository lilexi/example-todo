import React, { Component } from "react";
import { connect } from "react-redux";
import { authenticate as action } from '../../store/Actions/signin';

export class loginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: null,
      email: "",
      password: ""
    };
  }

  changeHandler = (event, type) => {
    this.setState({ [type]: event.target.value });
  };

  submit = event => {
    event.preventDefault();
    let userData = [];
    userData.push(this.state.email);
    userData.push(this.state.password);
    console.log("userdata:", userData);
    this.props.logIN(userData);
  };

  render() {
    return (
      <div>
        <form className="auth" onSubmit={this.submit}>
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
          <input className="btn-reg" type="submit" placeholder="Войти" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  logIN: (userData) => dispatch(action(userData))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(loginForm);
