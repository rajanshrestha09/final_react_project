import React, { useState } from "react";
import { Input, Button, Container } from "./index";
import { useForm } from "react-hook-form";
import authService from "../appwrite/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";

function Signup() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  // const create = (data) => console.log(data);
  const create = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      console.log(userData);
      if (userData) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Container>
      <div className="bg-slate-600 rounded-md h-96 w-auto  hover:shadow-2xl flex flex-col justify-center items-center">
        <h1 className="uppercase text-2xl text-white p-2 m-2">
          Register
        </h1>
        <form
          onSubmit={handleSubmit(create)}
          className=" flex flex-col items-end px-8 py-6"
        >
          <Input
            label="Name"
            type="text"
            placeholder="Enter your full name"
            className="m-2 border-2 h-8 p-2"
            {...register("name", {
              required: true,
            })}
          />
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
          <Button type="submit">Signup</Button>
        </form>
      </div>
    </Container>
  );
}

export default Signup;
