import { useState, useEffect, useRef } from "react";
import SidebarActiveBtn from "../buttons/SidebarActiveBtn.jsx";
import SidebarUnactiveBtn from "../buttons/SidebarUnactiveBtn.jsx";
import BurgerMenu from "../buttons/BurgerMenu.jsx";
import gsap from "gsap";

import PfpBtn from "../buttons/PfpBtn.jsx";
import UserDisplayName from "../back-end-things/UserDisplayName.jsx.jsx";
import UserName from "../back-end-things/UserName.jsx";
import PfpImg from "../back-end-things/PfpImg.jsx";

const MobileNavBar = () => {
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
  const [isOpen, setIsOpen] = useState(false);
  const navContainer = useRef(null);

  const disableScroll = () => {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden';
  };

  const enableScroll = () => {
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden';
  };

  useEffect(() => {
    if (isOpen) {
      disableScroll();
      gsap.to(navContainer.current, {
        x: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      enableScroll();
      gsap.to(navContainer.current, {
        x: "100%",
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [isOpen]);

  return (
    <div>
      <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />

      <div
        ref={navContainer}
        className="nav-container fixed top-0 right-0 w-full h-full bg-black/60 z-2009 backdrop-blur-[15px] max-[870px]:block"
        style={{ transform: "translateX(100%)" }}
      >

        {/* Not finished yet */}

        <div className="w-fit h-fit bg-red-500">
          <div ref={menuToggleRef} className="pfp-nav cursor-pointer hover:opacity-80 transition-all duration-100 ease-linear z-10 relative" onClick={toggleMenu}>
            <PfpImg pfpImage="src/assets/images/pfp.png" className="w-[45px] h-[45px] rounded-full" />
          </div>

          <div ref={menuRef} className={`pfp-menu absolute flex flex-col left-[-1px] top-[-1px] !pt-[7px] !rounded-3xl min-w-[190px] overflow-hidden bg-[#2a446f] shadow-[0px_0px_20px_0px_rgba(0,140,255,0.15),0px_0px_60px_-12px_rgba(255,255,255,0.14)_inset] backdrop-blur-[10px] z-9 border border-[rgba(255,255,255,0.3)] ${isMenuVisible ? 'block' : 'hidden'}`}>
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


        <div className="flex flex-col justify-center items-center h-full">
          <div className="flex flex-col justify-center items-center gap-2 w-fit">
            <SidebarButton
              path="/browse-games"
              icon="src/assets/images/icons/browse games.png"
              label="Browse Games"
              isActive={location.pathname === "/browse-games"}
              setIsOpen={setIsOpen}
              handleClick={() => setIsOpen(false)}
            />
            <SidebarButton
              path="/store"
              icon="src/assets/images/icons/store.png"
              label="Store"
              isActive={location.pathname === "/store"}
              setIsOpen={setIsOpen}
              handleClick={() => setIsOpen(false)}
            />
            <SidebarButton
              path="/faq"
              icon="src/assets/images/icons/faq.png"
              label="FAQ"
              isActive={location.pathname === "/faq"}
              setIsOpen={setIsOpen}
              handleClick={() => setIsOpen(false)}
            />
          </div>

          <div className="divider w-full max-w-[calc(100%-92px)] h-[1px] bg-white/20 mx-auto !mt-6 !mb-6"></div>

          <div className="flex flex-col justify-center items-center gap-2 w-fit">
            <SidebarButton
              path="/"
              icon="src/assets/images/icons/dashboard.png"
              label="Dashboard"
              isActive={location.pathname === "/"}
              setIsOpen={setIsOpen}
              handleClick={() => setIsOpen(false)}
            />
            <SidebarButton
              path="/subscriptions"
              icon="src/assets/images/icons/subscriptions.png"
              label="Subscriptions"
              isActive={location.pathname === "/subscriptions"}
              setIsOpen={setIsOpen}
              handleClick={() => setIsOpen(false)}
            />
            <SidebarButton
              path="/affiliate"
              icon="src/assets/images/icons/affiliate.png"
              label="Affiliate"
              isActive={location.pathname === "/affiliate"}
              setIsOpen={setIsOpen}
              handleClick={() => setIsOpen(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const SidebarButton = ({ path, icon, label, isActive, setIsOpen, handleClick }) => {
  return isActive ? (
    <SidebarActiveBtn
      className="justify-center !w-fit"
      path={path}
      icon={icon}
      label={label}
      onClick={handleClick}
    />
  ) : (
    <SidebarUnactiveBtn
      className="justify-center !w-fit"
      path={path}
      icon={icon}
      label={label}
      onClick={handleClick}
    />
  );
};

export default MobileNavBar;
