import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopBar from "./view/TopBar";
import Home from "./view/Home";
import Favorites from "./view/Favorites";


function App() {
  return (
      <Router>
        <TopBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/favorites" component={Favorites} />
        </Switch>
      </Router>
  );
}

export default App;
