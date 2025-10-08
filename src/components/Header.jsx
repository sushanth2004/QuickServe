import { useState } from "react";
import Logo from "../utils/Logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [auth, setAuth] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const handleAuth = () =>
    auth === "Login" ? setAuth("Logout") : setAuth("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={Logo} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>{onlineStatus ? "online 🟢" : "offline 🔴"}</li>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              About us
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact">
              Contact us
            </Link>
          </li>
          <li>Cart</li>
          <button className="login-btn" onClick={handleAuth}>
            {auth}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
