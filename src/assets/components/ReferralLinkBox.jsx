import { useState } from "react";
import ReferralLink from "../back-end-things/ReferralLink";

const ReferralLinkBox = ({ ref }) => {
  const [copied, setCopied] = useState(false);
  const referralLink = "https://frostchanger.vercel.app/blahblahblahblahblahblahblahblah";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    
    <div ref={ref} className="glass-box w-[563px] relative !gap-3 flex flex-col !p-5 max-[1078px]:w-full min-w-[370px] max-[402px]:min-w-full max-[402px]:!p-4 max-[402px]:!pt-3 max-[402px]:!pr-[8px] opacity-0 overflow-hidden justify-between max-[1464px]:w-full">

      <div className="flex flex-col gap-5">
        <p className="text-3xl font-bold max-[402px]:text-2xl ">Your Referral Link</p>
        <div className="flex flex-row items-center gap-2">
          <div className="w-full h-[45px] bg-white/10 border border-white/20 rounded-[10px] flex items-center !pt-2 !pb-2 !pl-4 overflow-hidden relative shadow-[inset_0px_4px_10.8px_0px_rgba(255,255,255,0.25)] backdrop-blur-[10px]">
            <div className="relative w-full h-full [mask-image:linear-gradient(to_right,rgba(0,0,0,1)_calc(100%-50px),rgba(0,0,0,0)_97%)]">
              <ReferralLink link={referralLink} />
            </div>
          </div>
          <div onClick={copyToClipboard} className="flex items-center justify-center gap-1 !pl-5 !pt-2 !pb-2 !pr-4 w-fit cursor-pointer transition-all duration-100 ease-linear border border-cyan-400 bg-gradient-to-b from-cyan-400 to-blue-600 shadow-[0px_3px_11.5px_rgba(0,0,0,0.12),0px_1px_12.8px_rgba(255,255,255,0.51)_inset] rounded-[10px] hover:opacity-80">
            <span className="font-medium text-[18px]">{copied ? "Copied!" : "Copy"}</span>
            <img src="src/assets/images/icons/Copy.png" alt="icon" className="w-[20px] h-[20px]" />
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center gap-2 !mt-4">
        <img src="src/assets/images/icons/Info.png" alt="icon" className="w-[20px] h-[20px]" />
        <p className="text-base max-[402px]:text-sm font-medium gray-1">Get up to 10% revenue per sale</p>
      </div>
    </div>

  );
};

export default ReferralLinkBox;
