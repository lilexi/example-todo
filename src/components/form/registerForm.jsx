import React, { Component } from 'react'
import {connect} from 'react-redux';
import { createUser as action } from '../../store/Actions/signup';
import "../../style/style.scss"

class registerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: null,
      name: "",
      email: "",
      password: "",
      submit: false
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
    // console.log("userdata:", userData);
    (userData[0].length > 0 && userData[1].length > 0 && userData[2].length > 0)? this.setState({submit: true}): this.setState({submit: false});
    this.props.createUser(userData);
  }; 
  
    render() {
        return (
            <div>
                <form className="auth" onSubmit={this.submit}>
              {/* <p className="a-t">Register: </p> */}
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
              <input className="btn-reg" type="submit" placeholder="Регистрация" />
            </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  createUser: (userData) => dispatch(action(userData))
})


export default connect(mapStateToProps, mapDispatchToProps)(registerForm);