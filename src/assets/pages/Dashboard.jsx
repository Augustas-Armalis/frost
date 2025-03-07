const Dashboard = () => {
  return (
    <div className="!pl-[298px] !pt-[106px] !pr-6 !pb-6 relative z-40 h-fit min-h-screen text-left flex items-center justify-top flex-col max-[692px]:!pl-[16px] max-[692px]:!pr-[16px] max-[402px]:!pt-[96px]">
      <div className="flex flex-col gap-2 items-start bg-red-500 w-[1150px] max-[1464px]:w-[756px] max-[1078px]:w-[370px] max-[402px]:!w-full">
        <p className="text-white text-2xl font-bold left-0">Good morning John!</p>
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