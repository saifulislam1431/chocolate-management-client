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
import UpdateChocolate from './component/UpdateChocolate.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader: ()=> fetch("https://chocolate-management-server-lovat.vercel.app/chocolates")
  },
  {
    path:"/addChocolate",
    element:<AddChocolate></AddChocolate>
  },
  {
    path: "/updateChocolate/:id",
    element:<UpdateChocolate></UpdateChocolate>,
    loader: ({params}) => fetch(`https://chocolate-management-server-lovat.vercel.app/chocolates/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
)
