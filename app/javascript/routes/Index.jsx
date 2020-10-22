import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Tutors from "../components/Tutors";
import Tutor from "../components/Tutor";
import NewTutor from "../components/NewTutor";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/tutors" exact component={Tutors} />
      <Route path="/tutor/:id" exact component={Tutor} />
      <Route path="/tutor" exact component={NewTutor} />
    </Switch>
  </Router>
);