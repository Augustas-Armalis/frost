import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Affiliate from "./assets/pages/Affiliate.jsx"
import Dashboard from "./assets/pages/Dashboard.jsx"
import Subscriptions from "./assets/pages/Subscriptions.jsx"
import Settings from "./assets/pages/Settings.jsx"
import Activity from "./assets/pages/Activity.jsx"
import Products from "./assets/pages/Products.jsx"
import Navbar from "./assets/components/navbar.jsx"
import Sidebar from "./assets/components/sidebar.jsx"

createRoot(document.getElementById('root')).render(
  <>

    <BrowserRouter>

    <div className="bck-behind-snowflake fixed w-full h-full bg-[radial-gradient(circle_at_50%_100%,rgba(59,131,246,0.6)0%,rgba(59,130,246,0.35)40%,rgba(139,92,246,0)85%)]"></div>

    <div className="bck-snowflake absolute w-full h-auto bg-[url('./assets/images/bck-snowflakes.png')] bg-[length:1920px_1920px] bg-repeat">
    
      <div className="all-the-items-container h-fit">

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/affiliate" element={<Affiliate />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/products" element={<Products />} />
      </Routes>

      </div>

    </div>


    <Navbar />
    <Sidebar />



    </BrowserRouter>
  </>
)
