import React, { Fragment } from "react";

import { Route, Router, Switch } from "react-router-dom";

import { StylesProvider } from "@material-ui/core/styles";

import Signup from "./components/SignUp";
import Signin from "./components/Signin";

export default ({ history }) => {
  return (
    <Fragment>
      <StylesProvider>
        <Router history={history}>
          <Switch>
            <Route path={"/auth/signin"} component={Signin} />
            <Route path={"/auth/signup"} component={Signup} />
          </Switch>
        </Router>
      </StylesProvider>
    </Fragment>
  );
};
