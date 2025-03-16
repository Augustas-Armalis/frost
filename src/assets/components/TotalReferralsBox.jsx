import TotalReferrals from "../back-end-things/TotalReferrals.jsx";

const TotalReferralsBox = ({ref}) => {
  return (
      <div ref={ref} className="glass-box w-[370px] h-fit !gap-3 flex flex-col !p-5 !pb-4 max-[1078px]:w-full min-w-[370px] max-[402px]:min-w-full max-[402px]:!p-4 max-[402px]:!pt-3 max-[402px]:!pr-[8px] opacity-0">

        <div className="flex items-center gap-3">
          <div className="rounded-[10px] border border-white/20 bg-white/15 shadow-[inset_0px_4px_10.8px_0px_rgba(255,255,255,0.25)] backdrop-blur-[10px] !p-1">
            <img src="src/assets/images/icons/Share.png" alt="icon" className="w-[32px] max-[402px]:w-[28px]"/>
          </div>
          <p className="text-3xl font-bold max-[402px]:text-2xl ">Total Referrals</p>
        </div>

        <TotalReferrals referrals="XXX"/>

      </div>
  )
}

export default TotalReferralsBox;