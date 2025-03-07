const Dashboard = () => {
  return (
    <div className="!pl-[298px] !pt-[106px] !pr-6 !pb-6 relative z-40 h-fit min-h-screen text-left flex items-center justify-top flex-col max-[692px]:!pl-[16px] max-[692px]:!pr-[16px] max-[402px]:!pt-[96px]">
      <div className="flex flex-col gap-2 items-start w-[1150px] max-[1464px]:w-[756px] max-[1078px]:w-[370px] max-[402px]:!w-full">
        <div className="drop-shadow-[0_4px_7px_rgba(0,0,0,0.07),0_1px_0.3px_var(--color-white)]">
      <p className="text-5xl font-bold bg-gradient-to-b from-white via-[#BEE2FB] to-[#66DCF3] bg-clip-text text-transparent leading-[1.2]">Good morning John!</p>
      </div>


        <p className="gray-1 text-1xl font-medium left-0">Explore mods, analytics & many more</p>
      </div>
      
      <div className="boxes-container flex items-center gap-4 justify-center flex-wrap max-w-[1150px] max-[402px]:!w-full">
        <div className="glass-box w-[756px] h-[370px] max-[1078px]:w-[370px]"></div>
        <div className="glass-box w-[370px] h-[370px]"></div>
        <div className="glass-box w-[370px] h-[370px]"></div>
        <div className="glass-box w-[756px] h-[370px] max-[1078px]:w-[370px]"></div>
      </div>
    </div>
  )
}

export default Dashboard;