import React from "react";
import Header from "./components/Header/Header";
import MarketingApp from "./components/Marketing/MarketingApp";
import { BrowserRouter } from "react-router-dom";
export default function App() {
  console.log("host of micro-front-end");

  return (
    <BrowserRouter>
    <>
      <Header signedIn={true} onSignOut={()=>{}}/>
      <MarketingApp />
    </>
    </BrowserRouter>
  );
}
