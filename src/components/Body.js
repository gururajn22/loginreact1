import React, { useEffect } from 'react'
import Login from './Login'
import Home from "./Home";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../utils/firebase";
import {RouterProvider, createBrowserRouter} from "react-router-dom"
const Body = () => {

    const loginRouting=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/Home",
            element:<Home/>
        }
    ])

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
  if (user) {
    const {uid} = user;
  
  } else {
 
    console.log("user sign out");
  }
});
    },[]);
  return (
    <div>
  <RouterProvider router={loginRouting}/>
    </div>
  )
}

export default Body