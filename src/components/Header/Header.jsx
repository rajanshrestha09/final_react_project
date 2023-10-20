import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoutBtn from "./LogoutBtn";

function Header() {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  // console.log(authStatus);
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
  ];

  return (
    <div>
      <ul>
        {navItems.map((item) =>
          item.active ? (
            <li key={item.name}>
              <button onClick={() => navigate(item.slug)}>{item.name}</button>
            </li>
          ) : null
        )}
        {authStatus && (
          <li><LogoutBtn /></li>
        )}
      </ul>
    </div>
  );
}

export default Header;
