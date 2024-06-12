import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App/App";
// import 'bootstrap/dist/css/bootstrap.min.css'
// import './../scss/style.scss'

//Here we render our REACT application
//Here we mount our APP COMPONENT to the DOOM element with the id "root"
function init() {
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <App />
  );
  window.console.log("App init in main...");
}

init();
