import React, { Component } from "react";
import { connect } from "react-redux";
import Avatar from "avataaars";
import Calendar from "react-calendar";
import { Redirect } from "react-router-dom";

//Components
import Todo from "../components/UI/todo.component";

//redux
import { verify as action } from "../store/Actions/checkToken";
import { addTodo as todoAction } from "../store/Actions/addTodo";
import { getAllTodo as getTodo } from "../store/Actions/getAllTodo";

// Style & IMG
import "../style/style.scss";
import Spiner from "../img/kek.gif";

export class homePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      date: new Date(),
      title: "",
      tasks: { title: "", type: "todo", priority: 0 },
      loading: true,
      redirect: false,
      todo: []
    };
  }

  componentDidMount() {
    setTimeout(() => {
      if (this.props.userdata) {
        this.setState({ loading: false });
      } else this.setState({ redirect: true });
    }, 2000);
    setInterval(() => {
      this.props.getAllTodo();
      this.setState({ todo: this.props.todo });
    }, 1000);
    this.getName();
    this.props.getAllTodo();
    if (localStorage.token) {
      this.setState({ redirect: false });
      this.props.verify();
    } else this.setState({ redirect: true });
  }

  changeHandler = (event, type) => {
    this.setState({ [type]: event.target.value });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };

  onChange = date => this.setState({ date });

  submit = () => {
    let data = this.state.tasks;
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.tasks.title = this.state.title;
    this.props.addTodo(data);
  };

  getName = () => {
    return setTimeout(() => {
      if (this.props.userdata.name) {
        let name =
          this.props.userdata.name.charAt(0).toUpperCase() +
          this.props.userdata.name.slice(1);
        this.setState({ name: name });
      }
    }, 1000);
  };

  getDo = () => {
    if (this.state.todo) {
      return this.state.todo.map((item) => {
        if (item.type === "todo") {
          return <Todo className="todo-comp" title={item.title} />;
        }
      });
    }
  };

  getInprogress = () => {
    if (this.state.todo) {
      return this.state.todo.map(item => {
        if (item.type === "in") {
          return <Todo className="in-comp" title={item.title} />;
        }
      });
    }
  };

  getDone = () => {
    if (this.state.todo) {
      return this.state.todo.map(item => {
        if (item.type === "done") {
          return <Todo className="done-comp" title={item.title} />;
        }
      });
    }
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
                <input
                  value={this.state.title}
                  onChange={event => {
                    this.changeHandler(event, "title");
                  }}
                  type="text"
                  placeholder="add new task"
                />

                <div className="add-btn" type="submit" onClick={this.submit}>
                  {" "}
                  <p>+</p>{" "}
                </div>
              </div>
              <div className="do-todos">{this.getDo()}</div>
            </div>
            <div className="in-progress">
              <p>In-Progress</p>
              {this.getInprogress()}
            </div>
            <div className="done">
              <p>Done</p>
              {this.getDone()}
            </div>
          </div>
        </div>
      </div>
    );
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
  userdata: state.Auth.User,
  todo: state.Todo.TODO
});

const mapDispatchToProps = dispatch => ({
  verify: () => dispatch(action()),
  addTodo: data => dispatch(todoAction(data)),
  getAllTodo: () => dispatch(getTodo())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(homePage);
