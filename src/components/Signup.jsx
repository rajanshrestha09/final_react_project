import React from "react";
import { Input, Button } from "./index";
import { useForm } from "react-hook-form";
import authService from "../appwrite/auth";
import { useSelector, useDispatch } from "react-redux";

function Signup() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  // useSelector();

  const create = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(create)}>
      <Input
        label="Name"
        type="text"
        placeholder="Enter your full name"
        className="m-2 border-2"
        {...register("name", {
          required: true,
        })}
      />
      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        className="m-2 border-2"
        {...register("email", {
          required: true,
        })}
      />
      <Input
        label="Username"
        type="text"
        placeholder="Enter your username"
        className="m-2 border-2"
        {...register("username", {
          required: true,
        })}
      />
      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
        className="m-2 border-2"
        {...register("passwrod", {
          required: true,
        })}
      />
      <Button>Signup</Button>
    </form>
  );
}

export default Signup;
