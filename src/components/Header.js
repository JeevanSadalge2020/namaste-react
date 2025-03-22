import appLogo from "../assets/logo.jpeg";
import { useState } from "react";

export default Header = () => {
  let [login, setLogin] = useState("Login");
  function toggleLogin() {
    login === "Login" ? setLogin("Logout") : setLogin("Login");
  }
  return (
    <header>
      <div className="app-logo">
        <img alt="Logo" src={appLogo} />
      </div>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
        <li className="login" onClick={toggleLogin}>
          {login}
        </li>
      </ul>
    </header>
  );
};
