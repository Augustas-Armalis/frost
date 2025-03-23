import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import TotalEarningsBox from "../components/TotalEarningsBox.jsx"
import TotalReferralsBox from "../components/TotalReferralsBox.jsx"
import UsableBalanceBox from "../components/UsableBalanceBox.jsx"
import ReferralLinkBox from "../components/ReferralLinkBox.jsx"
import RequestPayoutBox from "../components/RequestPayoutBox.jsx"
import LivePurchasesBox from "../components/LivePurchasesBox.jsx"


gsap.registerPlugin(ScrollTrigger);

const Affiliate = () => {
  const affiliateRefs = useRef([]);

  useEffect(() => {
    const elements = affiliateRefs.current;
  
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
    gsap.from(".affiliate-title", {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.1,
    });
  
    gsap.to(".affiliate-title", {
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      stagger: 0.1,
    });
  }, []);
  

  return (
   
    <div className="!pl-[298px] !pt-[106px] !pr-6 !pb-6 z-40 h-fit min-h-screen text-left flex items-center justify-top flex-col max-[692px]:!pl-[16px] max-[692px]:!pr-[16px] max-[402px]:!pt-[96px]">
      <div className="flex flex-col gap-2 items-start w-[1150px] max-[1464px]:w-[756px] max-[1078px]:w-full">
        <div className="drop-shadow-[0_4px_7px_rgba(0,0,0,0.07),0_1.5px_0.1px_var(--color-white)]">
          <p className="affiliate-title opacity-0 text-5xl font-bold bg-gradient-to-b from-white via-[#BEE2FB] to-[#66DCF3] bg-clip-text text-transparent leading-[1.2] max-[692px]:text-4xl max-[692px]:!ml-1 max-[402px]:text-3xl">
            Affiliate
          </p>
        </div>
          <p className="affiliate-title opacity-0 gray-1 text-lg font-medium left-0 !mb-6 !ml-1 max-[402px]:text-base max-[692px]:!ml-1.5">
            Earn $ by referring FrostChanger to others
          </p>
      </div>

      <div className="boxes-container flex items-center gap-4 justify-center h-fit flex-wrap max-[1464px]:max-w-[757px] max-w-[1150px] max-[692px]:!w-full">

        <TotalEarningsBox ref={(el) => el && affiliateRefs.current.push(el)}/>
        <TotalReferralsBox ref={(el) => el && affiliateRefs.current.push(el)}/>
        <UsableBalanceBox ref={(el) => el && affiliateRefs.current.push(el)}/>
        <div className="flex flex-row gap-4 flex-wrap w-full justify-center">
          <ReferralLinkBox ref={(el) => el && affiliateRefs.current.push(el)}/>
          <RequestPayoutBox ref={(el) => el && affiliateRefs.current.push(el)}/>
        </div>

        <LivePurchasesBox ref={(el) => el && affiliateRefs.current.push(el)}/>



      </div>
    </div>
    

  )
}

export default Affiliate;