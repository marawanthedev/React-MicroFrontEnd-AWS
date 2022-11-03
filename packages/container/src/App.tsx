import React from "react";
import Header from "./components/Header/Header";
import MarketingApp from "./components/Marketing/MarketingApp";
import { BrowserRouter } from "react-router-dom";
import {StylesProvider,createGenerateClassName} from "@material-ui/core/styles"


const generateClassName=createGenerateClassName({productionPrefix:"host"})

export default function App() {
  console.log("host of micro-front-end");

  return (
    <BrowserRouter>
    <StylesProvider generateClassName={generateClassName}>
      <Header signedIn={true} onSignOut={()=>{}}/>
      <MarketingApp />
    </StylesProvider>
    </BrowserRouter>
  );
}
