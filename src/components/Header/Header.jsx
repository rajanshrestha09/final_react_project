import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  console.log(authStatus);
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: true,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: true,
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
      </ul>
    </div>
  );
}

export default Header;