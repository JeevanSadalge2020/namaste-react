import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Main from "./components/Main";

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
