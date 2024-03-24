import React, { useState } from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Header from "./component/Header";
import AuthApp from "./component/AuthApp";
import MarketingApp from "./component/MarketingApp";
import DashboardApp from "./component/DashboardApp";

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <BrowserRouter>
      <div>
        {isSignedIn && <Redirect to={"/dashboard"} />}
        <Header
          isSignedIn={isSignedIn}
          onSignOut={() => setIsSignedIn(false)}
        />
        <Switch>
          <Route path={"/auth"}>
            <AuthApp onSignIn={() => setIsSignedIn(true)} />
          </Route>
          <Route path={"/dashboard"}>
            {!isSignedIn && <Redirect to={"/"} />}
            <DashboardApp />
          </Route>
          <Route path={"/"} component={MarketingApp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
