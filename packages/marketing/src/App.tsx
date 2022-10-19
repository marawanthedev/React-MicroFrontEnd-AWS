import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { StylesProvider } from "@material-ui/core";
import Album from "./components/Landing/Landing";
import Pricing from "./components/Pricing/Pricing";

export default function App(): JSX.Element {
  // console.log("Marketing micro-front-end");

  return (
    <>
      <StylesProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route exact path="/" component={Album} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </>
  );
}
