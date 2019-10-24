import React, { Component } from "react";
import { connect } from "react-redux";
import Avatar from "avataaars";
import Calendar from "react-calendar";
import { verify as action } from "../store/Actions/checkToken";
import { Redirect } from "react-router-dom";
import Spiner from "../img/kek.gif";
import "../style/style.scss";

export class homePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      tasks: [],
      loading: true,
      redirect: false,
      name: ""
    };
  }

  componentDidMount() {
    setTimeout(() => {
      if (this.props.userdata) {
        this.setState({ loading: false });
      }
    }, 5000);
    this.getName();
    if (localStorage.token) {
      this.setState({ redirect: false });
      this.props.verify();
    } else this.setState({ redirect: true });
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };

  onChange = date => this.setState({ date });

  getName = () => {
    return setTimeout(() => {
      let name =
        this.props.userdata.name.charAt(0).toUpperCase() +
        this.props.userdata.name.slice(1);
      this.setState({ name: name });
    }, 400);
  };

  loading = () => {
    return (
      <div className="loading">
        <div className="title">
          <p>Loading...</p>
        </div>
        <img src={Spiner} alt="" />
      </div>
    );
  };

  main = () => {
    return (
      <div className="homePage-container">
        <div className="header"></div>
        <div className="profile">
          <div className="avatar">
            <Avatar
              style={{ width: "150px", height: "150px" }}
              avatarStyle="Transparent"
              topType="WinterHat1"
              accessoriesType="Kurt"
              hatColor="Red"
              facialHairType="BeardMedium"
              facialHairColor="BrownDark"
              clotheType="ShirtScoopNeck"
              clotheColor="Heather"
              eyeType="EyeRoll"
              eyebrowType="Angry"
              mouthType="Serious"
              skinColor="Tanned"
            />
          </div>
          <div className="user-info">
            <p>{this.state.name}</p>
            <p>Level: {this.props.userdata.level}</p>
            <p>Exp: {this.props.userdata.exp}</p>
          </div>
        </div>
        <div className="todos-container">
          <div className="calendar">
            <Calendar onChange={this.onChange} value={this.state.date} />
            <div className="statistics">
              <p className="title">Statistics: </p>
              <div className="statistics-info">
                <p> All tasks: 120</p>
                <p> Done: 80</p>
              </div>
            </div>
          </div>
          <div className="todo">
            <div className="do">
              <p>TO-DO</p>
              <div className="do-add">
                <input type="text" placeholder="add new task" />
                <div className="add-btn"> Add </div>
              </div>
              <div className="do-todos">
                <div className="kek1"></div>
              </div>
            </div>
            <div className="in-progress">
              <p>In-Progress</p>
            </div>
            <div className="done">
              <p>Done</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.renderRedirect()}
        {!this.state.loading ? this.main() : this.loading()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userdata: state.Auth.User
});

const mapDispatchToProps = dispatch => ({
  verify: () => dispatch(action())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(homePage);
