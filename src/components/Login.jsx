import React, {useState } from "react";
import { Button, Input } from "./index";
import {login as authLogin} from '../store/authSlice'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import {useForm} from 'react-hook-form'

function Login() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {register, handleSubmit} = useForm()
  const [error, setError] = useState('')

  const login = async (data) =>{
    try {
     const session = await authService.login(data)
     console.log(session);
     if(session){
      const userData = await authService.getCurrentUser()
      if(userData) dispatch(authLogin(userData))
      navigate('/')
     }
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className="">
      <form onSubmit={handleSubmit(login)}>
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
      label="Password"
      type="password"
      placeholder="Enter your password"
      className="m-2 border-2"
      {...register("password", {
        required: true,
      })}
    />
    <Button type="submit">Login</Button>
  </form>
    </div>
    
  );
}

export default Login;
