import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './index.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import TestPage from './TestPage.jsx';


import Navbar from "./assets/components/navbar"
import Sidebar from "./assets/components/sidebar"

createRoot(document.getElementById('root')).render(
  <>
    <div className="bck-behind-snowflake fixed w-full h-full bg-[radial-gradient(circle_at_50%_100%,rgba(59,131,246,0.854)0%,rgba(59,130,246,0.45)50%,rgba(139,92,246,0)100%)]"></div>



    <div className="bck-snowflake absolute w-full h-auto bg-[url('./assets/images/bck-snowflakes.png')] bg-[length:1920px_1920px] bg-repeat opacity-20 ">
    
      <div className="all-the-items-container h-fit">
      
        <div className="spacer h-[300vh]"></div>

      </div>

    </div>


    <Navbar />
    <Sidebar />


  </>
)
