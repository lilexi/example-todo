import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { authenticate as action } from "../../store/Actions/signin";

export class loginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: null,
      email: "",
      password: "",
      showModal: "none",
      modalMessageTitle: "",
      modalMessageStyle: "modal-message-error",
      redirect: false
    };
  }

  changeHandler = (event, type) => {
    this.setState({ [type]: event.target.value });
  };

  submit = event => {
    event.preventDefault();
    let userData = [0];
    userData.push(this.state.email);
    userData.push(this.state.password);
    this.props.logIN(userData);
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
      this.setState({ email: "", password: "", showModal: "block" });
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
            placeholder="Войти"
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
  logIN: userData => dispatch(action(userData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(loginForm);
