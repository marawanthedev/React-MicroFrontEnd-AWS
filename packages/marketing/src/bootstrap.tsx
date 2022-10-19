import React from "react";
import ReactDom from "react-dom";
import App from "./App";
// mounting function to start micro app

const marketingMount = (el): void => {
  ReactDom.render(<App />, el);
};

if (process.env.NODE_ENV === "development") {
  const isolationElement = document.getElementById("marketing-only-isolated");
  if (isolationElement) marketingMount(isolationElement);
}

export { marketingMount };
