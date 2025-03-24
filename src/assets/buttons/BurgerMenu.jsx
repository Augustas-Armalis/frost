import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function BurgerMenu({ setIsOpen, isOpen }) {
  const topLine = useRef(null);
  const bottomLine = useRef(null);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) {
      gsap.to(topLine.current, { rotate: 45, y: 6, duration: 0.3, ease: "power2.out" });
      gsap.to(bottomLine.current, { rotate: -45, y: -6, duration: 0.3, ease: "power2.out" });
    } else {
      gsap.to(topLine.current, { rotate: 0, y: 0, duration: 0.3, ease: "power2.out" });
      gsap.to(bottomLine.current, { rotate: 0, y: 0, duration: 0.3, ease: "power2.out" });
    }
  }, [isOpen]);

  useEffect(() => {
    gsap.from(".burger-menu-button", {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });
  }, []);

  return (
    <div
      className="burger-menu-button fixed right-[36px] top-[36px] burger-menu hidden max-[870px]:block cursor-pointer w-[45px] h-[36px] !pt-[10px] !pb-[10px] !pr-[6px] !pl-[6px] z-3000 max-[402px]:!top-[31px] max-[402px]:!right-[30px]" onClick={handleClick}>
      <div ref={topLine} className="w-[33px] h-[3px] bg-white rounded-full !mb-[9px]"></div>
      <div ref={bottomLine} className="w-[33px] h-[3px] bg-white rounded-full"></div>
    </div>
  );
}
