import React, { useState } from "react";
import { Button, Input, Container } from "./index";
import { login as authLogin } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";
// import Container from "./container/Container";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    try {
      const session = await authService.login(data);
      console.log(session);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Container>
      <div className="bg-slate-600 rounded-md h-96 w-auto  hover:shadow-2xl flex flex-col justify-center items-center">
        <h1 className="uppercase text-2xl text-white p-2 m-2 ">Log In</h1>

        <form
          onSubmit={handleSubmit(login)}
          className="flex flex-col items-end px-8 py-6"
        >
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            className="m-2 border-2 h-8 p-2"
            {...register("email", {
              required: true,
            })}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            className="m-2 border-2 h-8 p-2"
            {...register("password", {
              required: true,
            })}
          />
          <Button type="submit">Login</Button>
        </form>
      </div>
    </Container>
  );
}

export default Login;
