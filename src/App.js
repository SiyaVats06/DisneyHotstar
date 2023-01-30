import React from 'react';
import Header from './componenets/Header';
import Home from './componenets/Home';
import Detail from './componenets/Detail'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './componenets/Login';







const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/detail",
    element: <Detail  />,
  },
  {
    path: "/login",
    element: <Login  />,
  },
])

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
