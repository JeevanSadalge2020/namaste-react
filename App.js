import React from "react";
import ReactDOM from "react-dom/client";

let heading = <h1 className="heading">Hello React</h1>;

let today_date = new Date().toDateString();

let Content = () => (
  <p>
    Today it's <b>{today_date}</b> and we are learning namaste React.
  </p>
);

let Container = () => {
  return (
    <div>
      {heading}
      <Content></Content>
      <Content />
      {Content()}
    </div>
  );
};

let root = ReactDOM.createRoot(document.querySelector(".root"));

root.render(<Container></Container>);
