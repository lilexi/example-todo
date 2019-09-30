import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import RegisterPage from "./containers/authPage";
import HomePage from "./containers/homePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={RegisterPage} />
        <Route path="/home" component={HomePage} />
      </Router>
    </div>
  );
}

export default App;
