import React, { Component } from "react";
import { connect } from "react-redux";
import RegisterForm from "../components/form/registerForm";
import "../style/style.scss";
import LoginForm from "../components/form/loginForm";

export class authPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideBtn: "",
      title: "Hello, it`s a todo app 🤫",
      showRegistrationForm: "none",
      showLoginForm: "none",
      showBackBtn: "none"
    };
    this.onRegister = this.onRegister.bind(this);
    this.onBack = this.onBack.bind(this);
  }

  onRegister = () => {
    this.setState({
      hideBtn: "none",
      title: "SING UP",
      showRegistrationForm: "block",
      showBackBtn: "block"
    });
  };

  onLogin = () => {
    this.setState({
      hideBtn: "none",
      title: "SIGN IN",
      showLoginForm: "block",
      showBackBtn: "block"
    });
  };

  onBack = () => {
    this.setState({
      hideBtn: "",
      title: "Hello, it`s a todo app 🤫",
      showRegistrationForm: "none",
      showLoginForm: "none",
      showBackBtn: "none"
    });
  };

  render() {
    return (
      <div className="registerPage-container">
        <div className="content">
          <div className="reg-text">{this.state.title}</div>

          {/* Форма регистрации */}
          <div
            className="register-form"
            style={{ display: `${this.state.showRegistrationForm}` }}
          >
            <RegisterForm />
          </div>
          {/* end */}

          {/* Форма логина */}
          <div
            className="register-form"
            style={{ display: `${this.state.showLoginForm}` }}
          >
            <LoginForm />
          </div>
          {/* end */}

          {/* Кнопки регистрации / логина / вернуться назад */}
          <div className="btn">
            <div
              className="register"
              onClick={this.onRegister}
              style={{ display: `${this.state.hideBtn}` }}
            >
              <p>SIGN UP</p>
            </div>

            <div
              className="login"
              onClick={this.onLogin}
              style={{ display: `${this.state.hideBtn}` }}
            >
              <p>SIGN IN</p>
            </div>

            <div
              className="btn-back"
              onClick={this.onBack}
              style={{ display: `${this.state.showBackBtn}` }}
            >
              <div className="top-line" />
              <div className="bot-line" />
            </div>
          </div>
          {/* end */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(authPage);
