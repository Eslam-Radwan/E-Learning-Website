import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";


import './index.css'
import Landing from './components/LandingPage/Landing.jsx'
import Login from './components/LoginPage/Login.jsx'
import Blog from './components/BlogPage/Blog.jsx'
import MemberShip from './components/MembershipPage/MemberShip.jsx'
import Course from './components/CoursePage/Course.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "landing",
    element: <Landing />,
  },
  {
    path: "courses",
    element: <Course />
  },
  {
    path: "blog",
    element: <Blog />
  },
  {
    path: "membership",
    element: <MemberShip />
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/E-Learning-Website/'>
    <RouterProvider router={router} />
    </BrowserRouter>
  </StrictMode>,
)