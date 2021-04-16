import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NewPersonPage } from "./NewPersonPage";
import { HomePage } from "./HomePage";

export function App() {
  return (
    <Switch>
      <Route path="/newperson">
        <NewPersonPage />
      </Route>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="*">
        <p>Oops, page not found!</p>
      </Route>
    </Switch>
  );
}
