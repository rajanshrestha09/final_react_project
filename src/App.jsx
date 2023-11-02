import React,{ useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import {login, logout} from './store/authSlice'
import "./App.css";
import { Outlet } from "react-router-dom";
import {Header} from './components/index';

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))
  },[])

  return !loading ? (
    <>
      <Header />
      <hr />
      <Outlet />
    </>
  ): null
}

export default App;
