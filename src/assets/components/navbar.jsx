import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

import PfpBtn from "../buttons/PfpBtn.jsx";
import NavBtn from "../buttons/NavBtn.jsx";
import UserDisplayName from "../back-end-things/UserDisplayName.jsx.jsx";
import UserName from "../back-end-things/UserName.jsx";
import PfpImg from "../back-end-things/PfpImg.jsx";
import MobileNavBar from "./MobileNavBar.jsx";
import { useLocation } from "react-router-dom";


const Navbar = () => {
  const location = useLocation()
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuRef = useRef(null);
  const menuToggleRef = useRef(null);

  const toggleMenu = () => {
    if (!isMenuVisible) {
      setIsMenuVisible(true);
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.15, ease: "ease-out" }
      );
    } else {
      gsap.to(menuRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.15,
        ease: "ease-out",
        onComplete: () => {
          setIsMenuVisible(false);
        },
      });
    }
  };

  const closeMenu = () => {
    gsap.to(menuRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.15,
      ease: "ease-out",
      onComplete: () => {
        setIsMenuVisible(false);
      },
    });
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !menuToggleRef.current.contains(e.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    gsap.from(".top-navigation-bar", {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });
  
    gsap.to(".top-navigation-bar", {
      opacity: 1,
      duration: 1,
      ease: "power2.out"
    });
  }, []);


  return (
    <>
      <div className="top-navigation-bar glass-box fixed flex justify-between items-center top-6 inset-x-6 h-[58px] !rounded-3xl z-2008 max-[692px]:!inset-x-4 max-[402px]:!h-[48px] opacity-0">

        <a href="/" className="hover:opacity-80 transition-all duration-100 ease-linear !ml-9 max-[692px]:!ml-4">
          <img src="src/assets/images/icons/frostchanger.svg" alt="logo" className="h-[23px] max-[402px]:!h-[18px]" />
        </a>

        <div className="nav-buttons relative flex flex-row gap-2 justify-center items-center h-full transform  max-[870px]:hidden">
          <div className="flex w-fit gap-2">
            <NavBtn path="/" icon="src/assets/images/icons/browse games.png" label="Browse Games" />
            <NavBtn path="/" icon="src/assets/images/icons/store.png" label="Store" />
            <NavBtn path="/" icon="src/assets/images/icons/faq.png" label="FAQ" />
          </div>
        </div>

        <div className="max-[870px]:hidden">
          <div ref={menuToggleRef} className="pfp-nav cursor-pointer hover:opacity-80 transition-all duration-100 ease-linear !mr-[7px] z-10 relative" onClick={toggleMenu}>
            <PfpImg pfpImage="src/assets/images/pfp.png" className="w-[45px] h-[45px] rounded-full" />
          </div>

          <div ref={menuRef} className={`pfp-menu absolute flex flex-col right-[-1px] top-[-1px] !pt-[7px] !rounded-3xl min-w-[190px] overflow-hidden bg-[#2a446f] shadow-[0px_0px_20px_0px_rgba(0,140,255,0.15),0px_0px_60px_-12px_rgba(255,255,255,0.14)_inset] backdrop-blur-[10px] z-9 border border-[rgba(255,255,255,0.3)] ${isMenuVisible ? 'block' : 'hidden'}`}>
            <div className="nav-name !mr-[80px] !mb-2 !ml-4">
              <UserDisplayName name="John Doe" className="text-white text-2xl font-bold" />
              <UserName username="john_doe123" className="text-gray-400 text-sm font-medium" />
            </div>

            <div className="divider w-full h-[1px] bg-white/10 relative"></div>

            <PfpBtn path="/" icon="src/assets/images/icons/profile.png" label="Profile" onClick={closeMenu} />
            <PfpBtn path="/settings" icon="src/assets/images/icons/settings.png" label="Settings" onClick={closeMenu} />
            
            <div className="divider w-full h-[1px] bg-white/10 relative"></div>

            <PfpBtn path="/" icon="src/assets/images/icons/log out.png" label="Log-out" onClick={closeMenu} />
          </div>
        </div>

        </div>

        <MobileNavBar />

    </>
  );
};



export default Navbar;