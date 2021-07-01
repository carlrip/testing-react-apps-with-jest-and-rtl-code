import React from "react";
import { Switch, Route } from "react-router-dom";
import { HomePage } from "./HomePage";
import { NewNotePage } from "./NewNotePage";

export function App() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/new">
        <NewNotePage />
      </Route>
    </Switch>
  );
}
