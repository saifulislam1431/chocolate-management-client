import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home.jsx';
import AddChocolate from './component/addChocolate.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader: ()=> fetch("http://localhost:5000/chocolates")
  },
  {
    path:"/addChocolate",
    element:<AddChocolate></AddChocolate>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
)
