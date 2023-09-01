import React from 'react'
import Login from './Login'
import Home from "./Home";
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
  return (
    <div>
  <RouterProvider router={loginRouting}/>
    </div>
  )
}

export default Body