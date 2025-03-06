import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './index.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestPage from './TestPage.jsx';
import Affiliate from "./assets/pages/Affiliate.jsx"
import Dashboard from "./assets/pages/Dashboard.jsx"

import Navbar from "./assets/components/navbar.jsx"
import Sidebar from "./assets/components/sidebar.jsx"

createRoot(document.getElementById('root')).render(
  <>

    <BrowserRouter>

    <div className="bck-behind-snowflake fixed w-full h-full bg-[radial-gradient(circle_at_50%_100%,rgba(59,131,246,0.854)0%,rgba(59,130,246,0.45)50%,rgba(139,92,246,0)100%)]"></div>

    <div className="bck-snowflake absolute w-full h-auto bg-[url('./assets/images/bck-snowflakes.png')] bg-[length:1920px_1920px] bg-repeat">
    
      <div className="all-the-items-container h-fit">

      <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/affiliate" element={<Affiliate />} />
      </Routes>

      </div>

    </div>


    <Navbar />
    <Sidebar />



    </BrowserRouter>
  </>
)
