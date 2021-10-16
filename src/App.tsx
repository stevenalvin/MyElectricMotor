import React from "react";
import "./App.css";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import MotorX from "./pages/MotorX";
import MotorY from "./pages/MotorY";
import MotorZ from "./pages/MotorZ";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/motorX">
          <MotorX />
        </Route>
        <Route path="/motorY">
          <MotorY />
        </Route>
        <Route path="/motorZ">
          <MotorZ />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
