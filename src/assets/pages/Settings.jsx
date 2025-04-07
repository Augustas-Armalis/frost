import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

import UserDisplayNameSettings from"../back-end-things/UserDisplayNameSettings.jsx"
import UserNameSettings from"../back-end-things/UserNameSettings.jsx"
import EmailSettings from"../back-end-things/EmailSettings.jsx"
import EnterEmailCode from"../back-end-things/EnterEmailCode.jsx"
import PasswordSettings from"../back-end-things/PasswordSettings.jsx"

import ProfileDashboardSettings from "../components/ProfileDashboardSettings.jsx";
import ProductsDashboardSettings from "../components/ProductsDashboardSettings.jsx";
import ConnectAccSettings from "../components/ConnectAccSettings.jsx";

gsap.registerPlugin(ScrollTrigger);

const Settings = () => {
  const settingsRefs = useRef([]);

  useEffect(() => {
    const elements = settingsRefs.current;
  
    gsap.from(elements, {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.05,
      scrollTrigger: {
        trigger: elements[0],
        start: "top 90%",
        toggleActions: "play none none reset",
      },
    });

    gsap.to(elements, {
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      stagger: 0.05,
      scrollTrigger: {
        trigger: elements[0],
        start: "top 90%",
        toggleActions: "play none none reset",
      },
    });
  }, []);

  useEffect(() => {
    gsap.from(".settings-title", {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.1,
    });
  
    gsap.to(".settings-title", {
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      stagger: 0.1,
    });
  }, []);

  return (
   
    <div className="!pl-[298px] !pt-[106px] !pr-6 !pb-6 relative z-40 h-fit min-h-screen text-left flex items-center justify-top flex-col max-[692px]:!pl-[16px] max-[692px]:!pr-[16px] max-[402px]:!pt-[96px]">
      <div className="flex flex-col gap-2 items-start w-[1150px] max-[1464px]:w-[756px] max-[1078px]:w-full">
        <div className="drop-shadow-[0_4px_7px_rgba(0,0,0,0.07),0_1.5px_0.1px_var(--color-white)]">
          <p className="settings-title !mb-6 opacity-0 text-5xl font-bold bg-gradient-to-b from-white via-[#BEE2FB] to-[#66DCF3] bg-clip-text text-transparent leading-[1.2] max-[692px]:text-4xl max-[692px]:!ml-1 max-[402px]:text-3xl">
            Settings
          </p>
        </div>
      </div>

      <div className="boxes-container flex items-center gap-4 justify-center flex-wrap max-w-[1150px] max-[692px]:!w-full">

      <div className="flex flex-col w-[563px] max-[1464px]:gap-4 max-[1464px]:w-[757px] justify-center max-[1074px]:w-full max-[1464px]:flex-row max-[980px]:flex-col max-[980px]:gap-0">
          <div>
            <UserDisplayNameSettings ref={(el) => el && settingsRefs.current.push(el)}/>
            <UserNameSettings ref={(el) => el && settingsRefs.current.push(el)}/>
          </div>
          <div>
            <EmailSettings ref={(el) => el && settingsRefs.current.push(el)}/>
            <PasswordSettings ref={(el) => el && settingsRefs.current.push(el)}/>
          </div>
        </div>


        <div className="w-[563px] relative max-[1074px]:w-full max-[1464px]:w-[757px]">
          <ProfileDashboardSettings ref={(el) => el && settingsRefs.current.push(el)}/>
        </div>

        <div className="this-cont flex gap-4 h-fit w-fit max-[1464px]:flex-col max-[692px]:w-full">
          <div className="w-[563px] relative max-[1078px]:w-full max-[1464px]:w-[757px]">
            <ConnectAccSettings ref={(el) => el && settingsRefs.current.push(el)}/>
          </div>

          <div className="w-[563px] relative max-[1078px]:w-full max-[1464px]:w-[757px]">
            <ProductsDashboardSettings ref={(el) => el && settingsRefs.current.push(el)}/>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Settings;