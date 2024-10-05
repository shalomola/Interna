import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Portfolio from './pages/Portfolio.tsx';
// import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";
// import ProjectDetails from './pages/ProjectDetails.tsx';

import './index.css'
import { motion } from 'framer-motion';


const router = createBrowserRouter([
{
  path: '/',
  element: <Home />,
  errorElement: <NotFound />
},
{
  path: '/about',
  element: <About />
},
{
  path: '/portfolio',
  element: <Portfolio />,
},

])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <motion.div 
      className="fixed text-[100px] -bottom-5 right-0 lg:text-[300px] lg:-bottom-16 lg:-right-10 font-bold text-gray-300 z-[-1] leading-none"
      initial={{ opacity: 0, translateX: "50%" }}
      whileInView={{ opacity: 1, translateX: 0 }}
      transition={{ ease: "backOut", duration: 2, delay: 1 }}
      viewport={{ once: true }}
    >
    Interna
    </motion.div>
  </StrictMode>,
)
