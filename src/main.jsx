import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider, Route,} from "react-router-dom"; import React from "react";
import ReactDOM from "react-dom/client";

import './index.css'
import Landing from './components/LandingPage/Landing.jsx'
import Login from './components/LoginPage/Login.jsx'
import Blog from './components/BlogPage/Blog.jsx'
import MemberShip from './components/MembershipPage/MemberShip.jsx'
import Course from './components/CoursePage/Course.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />, // Landing page as the main entry point
  },
  {
    path: "/login",
    element: <Login />, // Login page
  },
  {
    path: "/blog",
    element: <Blog />, // Blog page
  },
  {
    path: "/membership",
    element: <MemberShip />, // Membership page
  },
  {
    path: "/courses",
    element: <Course />, // Course page
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

