import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { List } from "./list/List";
import { ContactDetails } from "./contact-details/ContactDetails";
import { NotFound } from "./not-found/NotFound";

export const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <List />
      </Route>

      <Route path="/details/:UserId">
        <ContactDetails />
      </Route>

      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </Router>
);
