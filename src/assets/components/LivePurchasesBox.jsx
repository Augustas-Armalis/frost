import BigPoppingBubble from "../components/BigPoppingBubble.jsx"

const LivePurchasesBox = ({ref}) => {

  return (

    <div ref={ref} className="glass-box w-full h-[370px] !p-6 !pr-3 !pt-5 max-[402px]:!p-4 max-[402px]:!pt-3 max-[402px]:!pr-[8px] opacity-0">

      <div className="flex gap-5 flex-row !pl-1.5">
        <BigPoppingBubble />
        <p className="text-3xl font-bold max-[402px]:text-2xl">Live Purchases</p>
      </div>

      <div className="activity-container !mt-4 overflow-y-scroll overflow-x-hidden scrollbar-hidden h-[296px] flex flex-col gap-6 !pb-4 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_calc(100%-50px),rgba(0,0,0,0)_100%)]">
        <div></div>
      </div>

    </div>

  )
}

export default LivePurchasesBox;