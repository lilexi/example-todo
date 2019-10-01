import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { createUser as action } from "../../store/Actions/signup";
import { authenticate as autoLogin } from "../../store/Actions/signin";
import "../../style/style.scss";

class registerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: null,
      name: "",
      email: "",
      password: "",
      submit: false,
      modalMessageTitle: "",
      modalMessageStyle: "modal-message-error",
      redirect: false,
      showModal: "none"
    };
  }

  changeHandler = (event, type) => {
    this.setState({ [type]: event.target.value });
  };

  submit = event => {
    event.preventDefault();
    let userData = [];
    userData.push(this.state.name);
    userData.push(this.state.email);
    userData.push(this.state.password);
    userData[0].length > 0 && userData[1].length > 0 && userData[2].length > 0
      ? this.setState({ submit: true })
      : this.setState({ submit: false });
    this.props.createUser(userData);

    setTimeout(() => {
      if (this.props.status === 200) {
        this.props.autoLogin(userData);
      }
    }, 2000);
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/home" />;
    }
  };

  onSubmit = () => {
    setTimeout(() => {
      if (this.props.status === 500) {
        this.setState({
          modalMessageStyle: "modal-message-error",
          modalMessageTitle: "Error: A user with such email already exist!"
        });
      } else if (this.props.status === 200) {
        this.setState({
          modalMessageStyle: "modal-message-success",
          modalMessageTitle: "Success: Welcome!"
        });

        setTimeout(() => {
          this.setState({ redirect: true });
        }, 3000);
      }

      this.setState({ name: "", email: "", password: "", showModal: "block" });
    }, 500);

    setTimeout(() => {
      this.setState({ showModal: "none" });
    }, 5000);
  };

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <form className="auth" onSubmit={this.submit}>
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
          <input
            className="btn-reg"
            type="submit"
            onClick={this.onSubmit}
            placeholder="Регистрация"
          />
        </form>

        <div
          className={this.state.modalMessageStyle}
          style={{ display: `${this.state.showModal}`, position: "absolute" }}
        >
          <p>{this.state.modalMessageTitle}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  status: state.Auth.User.status
});

const mapDispatchToProps = dispatch => ({
  createUser: userData => dispatch(action(userData)),
  autoLogin: userData => dispatch(autoLogin(userData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(registerForm);
