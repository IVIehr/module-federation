import React, { useState } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./component/Header";
import AuthApp from "./component/AuthApp";
import MarketingApp from "./component/MarketingApp";

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <BrowserRouter>
      <div>
        <Header
          isSignedIn={isSignedIn}
          onSignOut={() => setIsSignedIn(false)}
        />
        <Switch>
          <Route path={"/auth"}>
            <AuthApp onSignIn={() => setIsSignedIn(true)} />
          </Route>
          <Route path={"/"} component={MarketingApp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
