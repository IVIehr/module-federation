import React from "react";

import { BrowserRouter } from "react-router-dom";

import Header from "./component/Header";
import MarketingApp from "./component/MarketingApp";

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingApp />
      </div>
    </BrowserRouter>
  );
};
