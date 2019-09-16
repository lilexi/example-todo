import React, { Component } from "react";
import { connect } from "react-redux";
import Register from "../components/register";
import Login from "../components/login";
import * as actions from "../store/actions/index";
import "../style/header.css";

export class header extends Component {
  constructor(props) {
    super(props);
    this.state = { type: null, flag: false };
    this.showReg = this.showReg.bind(this);
    this.showLogin = this.showLogin.bind(this);
  }

  componentDidMount() {
    this.setState({ type: this.props });
  }

  showReg() {
    if (this.state.flag === false) {
      this.props.showR();
      this.setState({ flag: true });
    } else {
      this.props.hideR();
      this.setState({ flag: false });
    }
  }

  showLogin() {
    if (this.state.flag === false) {
      this.props.showL();
      this.setState({ flag: true });
    } else {
      this.props.hideL();
      this.setState({ flag: false });
    }
  }

  render() {
    console.log(this.state);
    return (
      <div className="Header">
        <button className="btn" onClick={this.showReg}>
          Register
        </button>
        <button className="btn" onClick={this.showLogin}>
          Login
        </button>
        {this.props.showRegister ? <Register /> : null}
        {this.props.showLogin ? <Login /> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    showRegister: state.hideElements.showRegister,
    showLogin: state.hideElements.showLogin
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showR: () => dispatch(actions.showR()),
    hideR: () => dispatch(actions.hideR()),
    showL: () => dispatch(actions.showL()),
    hideL: () => dispatch(actions.hideL())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(header);
