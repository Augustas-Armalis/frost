import { useLocation } from "react-router-dom";
import SidebarUnactiveBtn from "../buttons/SidebarUnactiveBtn";
import SidebarActiveBtn from "../buttons/SidebarActiveBtn";
import { useEffect } from "react";
import { gsap } from "gsap";

const Sidebar = () => {
  const location = useLocation();

  useEffect(() => {
    gsap.from(".sidebar", {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });
  
    gsap.to(".sidebar", {
      opacity: 1,
      duration: 1,
      ease: "power2.out"
    });
  }, []);  

  return (

    <div className="sidebar glass-box fixed flex flex-col justify-between left-6 top-[108px] bottom-6 w-[250px] !p-[24px] z-2008 max-[692px]:hidden opacity-0">
      <div className="flex flex-col w-full gap-2">
        <SidebarButton path="/" icon="src/assets/images/icons/dashboard.png" label="Dashboard" isActive={location.pathname === "/"} />
        <SidebarButton path="/subscriptions" icon="src/assets/images/icons/subscriptions.png" label="Subscriptions" isActive={location.pathname === "/subscriptions"} />
        <SidebarButton path="/affiliate" icon="src/assets/images/icons/affiliate.png" label="Affiliate" isActive={location.pathname === "/affiliate"} />
      </div>

      <SidebarButton path="/settings" icon="src/assets/images/icons/settings.png" label="Settings" isActive={location.pathname === "/settings"} />

    </div>
    
  );
};

const SidebarButton = ({ path, icon, label, isActive }) => {
  return isActive ? (
    <SidebarActiveBtn path={path} icon={icon} label={label} />
  ) : (
    <SidebarUnactiveBtn path={path} icon={icon} label={label} />
  );
};

export default Sidebar;