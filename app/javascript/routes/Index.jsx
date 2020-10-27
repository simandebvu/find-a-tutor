import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Tutors from "../components/Tutors";
import Favourites from "../components/Favourites";
import Tutor from "../components/Tutor";
import NewTutor from "../components/NewTutor";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/tutors" exact component={Tutors} />
      <Route path="/tutor/:id" exact component={Tutor} />
      <Route path="/new_tutor" exact component={NewTutor} />
      <Route path="/favourites" exact component={Favourites} />
    </Switch>
  </Router>
);