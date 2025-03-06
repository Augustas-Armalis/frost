import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import PfpBtn from "../buttons/pfp-btn";
import NavBtn from "../buttons/nav-btn";
import UserDisplayName from "../back-end-things/UserDisplayName.jsx"
import UserName from "../back-end-things/UserName.jsx"

const Navbar = () => {
  // Step 1: Create a state variable to manage the visibility of the pfp-menu
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuRef = useRef(null); // Create a ref for the menu

  // Step 2: Create a function to toggle the menu visibility
  const toggleMenu = () => {
    if (!isMenuVisible) {
      // Show the menu with animation
      setIsMenuVisible(true);
      gsap.fromTo(menuRef.current, 
        { opacity: 0, scale: 0.95 }, // Start invisible and slightly down
        { opacity: 1, scale: 1, duration: 0.15, ease: "ease-out" } // Fade in and move up
      );
    } else {
      // Hide the menu with animation
      gsap.to(menuRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.15, // Duration for fade out
        ease: "ease-out",
        onComplete: () => {
          setIsMenuVisible(false); // Hide the menu after animation
        }
      });
    }
  };

  return (
  <div className="top-navigation-bar glass-box fixed flex justify-between items-center top-6 inset-x-6 h-[58px] !rounded-3xl">

    <div className="nav-buttons absolute flex flex-row gap-2 justify-center items-center h-full transform -translate-x-1/2 left-1/2">

      <div className="flex w-fit gap-2">
        <NavBtn path="/" icon="src/assets/images/icons/browse games.png" label="Browse Games" />
        <NavBtn path="/" icon="src/assets/images/icons/store.png" label="Store"/>
        <NavBtn path="/" icon="src/assets/images/icons/faq.png" label="FAQ"/>
      </div>

    </div>


    <a href="/" className="hover:opacity-80 transition-all duration-100 ease-linear !ml-9">
      <img src="src/assets/images/icons/frostchanger.svg" alt="logo" className=" h-[23px]" />
    </a>


    <div>
      <div 
        className="pfp-nav cursor-pointer hover:opacity-80 transition-all duration-100 ease-linear !mr-[7px] z-10 relative"
        onClick={toggleMenu}
      >
        <img src="src/assets/images/pfp.png" alt="pfp" className="w-[45px] h-[45px] rounded-full" />
      </div>

      {/* Render the pfp-menu based on isMenuVisible */}
      <div 
        ref={menuRef} // Attach the ref to the menu
        className={`pfp-menu absolute flex flex-col right-[-1px] top-[-1px] !pt-[7px] !rounded-3xl overflow-hidden bg-[#2a446f] shadow-[0px_0px_20px_0px_rgba(0,140,255,0.15),0px_0px_60px_-12px_rgba(255,255,255,0.14)_inset] backdrop-blur-[10px] z-9 border border-[rgba(255,255,255,0.3)] ${isMenuVisible ? 'block' : 'hidden'}`}
        style={{ display: isMenuVisible ? 'block' : 'none' }}
      >
        <div className="nav-name !mr-[80px] !mb-2 !ml-4">
        <UserDisplayName className="text-white text-2xl font-bold"/>
        <UserName className="text-gray-400 text-sm font-medium"/>
        </div>

        <div className="divider w-full h-[1px] bg-white/10 relative"></div>

        <PfpBtn path="/" icon="src/assets/images/icons/profile.png" label="Profile"/>
        <PfpBtn path="/" icon="src/assets/images/icons/settings.png" label="Settings"/>
        
        <div className="divider w-full h-[1px] bg-white/10 relative"></div>

        <PfpBtn path="/" icon="src/assets/images/icons/log out.png" label="Log-out"/>
      </div>
    </div>

  </div>
  )

}

export default Navbar;