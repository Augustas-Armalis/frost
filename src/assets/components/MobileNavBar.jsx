import { useState, useEffect, useRef } from "react";
import SidebarActiveBtn from "../buttons/SidebarActiveBtn.jsx";
import SidebarUnactiveBtn from "../buttons/SidebarUnactiveBtn.jsx";
import BurgerMenu from "../buttons/BurgerMenu.jsx";
import gsap from "gsap";

const MobileNavBar = () => {
  const [isOpen, setIsOpen] = useState(false); // Controls nav and burger menu state
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
      {/* Pass both isOpen and setIsOpen to BurgerMenu */}
      <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />

      <div
        ref={navContainer}
        className="nav-container fixed top-0 right-0 w-full h-full bg-black/60 z-2009 backdrop-blur-[15px] max-[870px]:block"
        style={{ transform: "translateX(100%)" }}
      >
        <div className="flex flex-col justify-center items-center h-full">
          <div className="flex flex-col justify-center items-center gap-2 w-fit">
            <SidebarButton
              path="/browse-games"
              icon="src/assets/images/icons/browse games.png"
              label="Browse Games"
              isActive={location.pathname === "/browse-games"}
              setIsOpen={setIsOpen} // Pass setIsOpen here
              handleClick={() => setIsOpen(false)} // Close the nav when clicked
            />
            <SidebarButton
              path="/store"
              icon="src/assets/images/icons/store.png"
              label="Store"
              isActive={location.pathname === "/store"}
              setIsOpen={setIsOpen} // Pass setIsOpen here
              handleClick={() => setIsOpen(false)} // Close the nav when clicked
            />
            <SidebarButton
              path="/faq"
              icon="src/assets/images/icons/faq.png"
              label="FAQ"
              isActive={location.pathname === "/faq"}
              setIsOpen={setIsOpen} // Pass setIsOpen here
              handleClick={() => setIsOpen(false)} // Close the nav when clicked
            />
          </div>

          <div className="divider w-full max-w-[calc(100%-92px)] h-[1px] bg-white/20 mx-auto !mt-6 !mb-6"></div>

          <div className="flex flex-col justify-center items-center gap-2 w-fit">
            <SidebarButton
              path="/"
              icon="src/assets/images/icons/dashboard.png"
              label="Dashboard"
              isActive={location.pathname === "/"}
              setIsOpen={setIsOpen} // Pass setIsOpen here
              handleClick={() => setIsOpen(false)} // Close the nav when clicked
            />
            <SidebarButton
              path="/subscriptions"
              icon="src/assets/images/icons/subscriptions.png"
              label="Subscriptions"
              isActive={location.pathname === "/subscriptions"}
              setIsOpen={setIsOpen} // Pass setIsOpen here
              handleClick={() => setIsOpen(false)} // Close the nav when clicked
            />
            <SidebarButton
              path="/affiliate"
              icon="src/assets/images/icons/affiliate.png"
              label="Affiliate"
              isActive={location.pathname === "/affiliate"}
              setIsOpen={setIsOpen} // Pass setIsOpen here
              handleClick={() => setIsOpen(false)} // Close the nav when clicked
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// SidebarButton Component
const SidebarButton = ({ path, icon, label, isActive, setIsOpen, handleClick }) => {
  return isActive ? (
    <SidebarActiveBtn
      className="justify-center !w-fit"
      path={path}
      icon={icon}
      label={label}
      onClick={handleClick} // Pass onClick here
    />
  ) : (
    <SidebarUnactiveBtn
      className="justify-center !w-fit"
      path={path}
      icon={icon}
      label={label}
      onClick={handleClick} // Pass onClick here
    />
  );
};

export default MobileNavBar;
