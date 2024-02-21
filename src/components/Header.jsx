import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const onlineStatus = useOnlineStatus();
  const handleClick = () => {
    setIsLogin(!isLogin);
  };
  return (
    <header>
      <img src={LOGO_URL} alt="" className="logo" />
      <nav>
        <ul>
          <li>{onlineStatus ? "online" : "offline"}</li>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/grocery">Grocery</NavLink>
          </li>
          <li>Cart</li>
          <button className="login_btn" onClick={handleClick}>
            {isLogin ? "Login" : "Logout"}
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
