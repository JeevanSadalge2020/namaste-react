import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header.js";
import Main from "./components/Main.js";

const App = () => {
  return (
    <div id="app-container">
      <Header></Header>
      <Main></Main>
    </div>
  );
};

let root = ReactDOM.createRoot(document.querySelector(".root"));

root.render(<App></App>);
