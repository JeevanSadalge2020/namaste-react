import React from "react";
import ReactDOM from "react-dom/client";

let Heading = () => <h1 className="heading">Hello React</h1>;

let Content = () => <p>We are learning namaste React.</p>;

let Container = () => {
  return (
    <div>
      <Heading></Heading>
      <Content></Content>
    </div>
  );
};

let root = ReactDOM.createRoot(document.querySelector(".root"));

root.render(<Container></Container>);
