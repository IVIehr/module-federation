import React, { Fragment } from "react";

import { Route, Router, Switch } from "react-router-dom";

import { StylesProvider } from "@material-ui/core/styles";

import Signup from "./components/SignUp";
import Signin from "./components/Signin";

export default ({ history, onSignIn }) => {
  return (
    <Fragment>
      <StylesProvider>
        <Router history={history}>
          <Switch>
            <Route path={"/auth/signin"}>
              <Signin onSignIn={onSignIn} />
            </Route>
            <Route path={"/auth/signup"}>
              <Signup onSignIn={onSignIn} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </Fragment>
  );
};
