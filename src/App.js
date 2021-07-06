import React, { Component } from "react";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Favorite from "./Component/Favorite";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/favorite">
              <Favorite />
            </Route>

          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
