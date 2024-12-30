import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Landing from './components/LandingPage/Landing.jsx'
import Login from './components/LoginPage/Login.jsx'
import Blog from './components/blog/Blog.jsx'
import CourseDetail from './components/CourseDetailPage/CourseDetail.jsx'
import Checkout from './components/CheckoutPage/Checkout.jsx'
import BlogDetial from './components/BlogDetail/BlogDetail.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Landing />
  </StrictMode>,
)
