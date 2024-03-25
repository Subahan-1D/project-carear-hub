import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import ErrorPage from './components/ErrorPage/ErrorPage';
import ApplidJobs from './components/AppliedJobs/ApplidJobs';
import JobDetail from './components/JobDetail/JobDetail';
import Blog from './components/Blog/Blog';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/statistics",
        element:<Statistics></Statistics>
      },
      {
        path:"/blog",
        element:<Blog></Blog>,
      },
      {
        path:"/applied",
        element:<ApplidJobs></ApplidJobs>,
        loader: ()=> fetch('jobs.json')
      },
      {
        path: '/job/:id',
        element:<JobDetail></JobDetail>,
        loader: () => fetch('jobs.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
