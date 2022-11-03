import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import {StylesProvider,createGenerateClassName} from "@material-ui/core/styles"
import Album from "./components/Landing/Landing";
import Pricing from "./components/Pricing/Pricing";

// adding different prefix so that each project has a different prefix and avoid colliding with other projects
const generateClassName=createGenerateClassName({
  productionPrefix:"marketing"
})

export default function App(): JSX.Element {
  console.log("Marketing micro-front-end");

  return (
    <StylesProvider  generateClassName={generateClassName}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route exact path="/" component={Album} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>

  );
}
