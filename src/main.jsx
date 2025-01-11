import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import './index.css'
import Landing from './components/LandingPage/Landing.jsx'
import Login from './components/LoginPage/Login.jsx'
import Blog from './components/BlogPage/Blog.jsx'
import CourseDetail from './components/CourseDetailPage/CourseDetail.jsx'
import Checkout from './components/CheckoutPage/Checkout.jsx'
import BlogDetial from './components/BlogDetailPage/BlogDetail.jsx'
import MemberShip from './components/MembershipPage/MemberShip.jsx'
import Course from './components/CoursePage/Course.jsx'



createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/E-Learning-Website/"> 
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/courses" element={<Course />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/membership" element={<MemberShip />} />
    </Routes>
  </BrowserRouter>
);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Login />,
//   },
//   {
//     path: "landing",
//     element: <Landing />,
//   },
//   {
//     path: "courses", 
//     element: <Course />
//   },
//   {
//     path: "blog", 
//     element: <Blog />
//   },
//   {
//     path: "membership", 
//     element: <MemberShip />
//   },
// ]);


// createRoot(document.getElementById('root')).render(
//   <BrowserRouter basename="/E-Learning-Website/">
//   <RouterProvider router={router} />
//   </BrowserRouter>
// );
