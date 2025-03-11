import { useEffect, useRef } from "react";
import gsap from "gsap";

const PoppingBubble = () => {
  const bubbleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      bubbleRef.current,
      { width: "4px", height: "4px", opacity: 1 },
      {
        width: "18px",
        height: "18px",
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        repeat: -1,
      }
    );
  }, []);

  return (
    <div className="relative">
      <div
        ref={bubbleRef}
        className="popping-bubble absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#33f87b]"
      ></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#33f87b]"></div>
    </div>
  );
};

export default PoppingBubble;
