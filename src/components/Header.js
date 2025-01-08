import appLogo from "../assets/logo2.jpeg";

export default Header = () => {
  return (
    <header>
      <div className="app-logo">
        <img alt="Logo" src={appLogo} />
      </div>
      <ul>
        <li>About</li>
        <li>Sign in</li>
        <li>Cart</li>
      </ul>
    </header>
  );
};
