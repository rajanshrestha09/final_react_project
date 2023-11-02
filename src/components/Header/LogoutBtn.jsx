import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return <button onClick={logoutHandler} className="bg-sky-700 text-white uppercase px-4 py-2 rounded-md">Logout</button>;
}

export default LogoutBtn;
