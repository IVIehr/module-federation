import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./component/Header";
import AuthApp from "./component/AuthApp";
import MarketingApp from "./component/MarketingApp";

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path={"/auth"} component={AuthApp} />
          <Route path={"/"} component={MarketingApp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
