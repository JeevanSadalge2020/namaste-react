import React from "react";
import ReactDOM from "react-dom/client";

let heading = React.createElement(
  "h1",
  { id: "main-heading", className: "heading" },
  "Hello my friend, from react"
);

let root = ReactDOM.createRoot(document.querySelector(".root"));

root.render(heading);
