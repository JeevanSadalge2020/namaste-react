let root = document.querySelector(".root");

let heading = React.createElement(
  "h1",
  { id: "main-heading", className: "heading" },
  "Hello from react my friend"
);

let Root = ReactDOM.createRoot(root);

Root.render(heading);
