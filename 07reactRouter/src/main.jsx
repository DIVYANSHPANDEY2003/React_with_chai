import { StrictMode } from 'react'
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'

const router =createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {

      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouteProvider router={router}/>
  </StrictMode>,
)
