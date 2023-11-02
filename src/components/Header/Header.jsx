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
    {
      name: "All Posts",
      slug:"/all-posts",
      active: authStatus
    },
    {
      name:"Add Post",
      slug: "add-post",
      active: authStatus
    }
  ];

  return (
    <div className="bg-blue-900">
      <ul className="flex justify-end items-center h-14">
        <li className="me-auto px-2 text-gray-400 text-3xl">LOGO</li>
        {navItems.map((item) =>
          item.active ? (
            <li key={item.name} className="px-2 ">
              <button onClick={() => navigate(item.slug)} className="text-white uppercase hover:bg-gray-400 hover:text-black p-2 rounded-md">{item.name}</button>
            </li>
          ) : null
        )}
        {authStatus && (
          <li className="ms-auto" ><LogoutBtn /></li>
        )}
      </ul>
    </div>
  );
}

export default Header;
