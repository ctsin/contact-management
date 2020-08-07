import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { List } from "../pages/list/List";
import { ContactDetails } from "../pages/contact-details/ContactDetails";
import { NotFound } from "./not-found/NotFound";

export const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <List />
      </Route>

      <Route path="/details/:UserID">
        <ContactDetails />
      </Route>

      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </Router>
);
