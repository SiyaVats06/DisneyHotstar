import React,{useState} from 'react';
import Header from './componenets/Header';
import Home from './componenets/Home';
import Detail from './componenets/Detail'
import { user } from "./Contexthook"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './componenets/Login';
import {UseUserContextProvider} from "./Contexthook"
import Signup from './componenets/Signup';







const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/detail",
    element: <Detail />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
])

function App() {
 
  return (
    <UseUserContextProvider>
      <div className="App">
        <Header />
        <RouterProvider router={router} />
      </div>
    
    </UseUserContextProvider>
  );
  
}

export default App;
