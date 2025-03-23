
const ActiveConnectBtn = () => {
  return (


    <div className="flex flex-row items-center justify-between gap-3 !pt-2 !pl-4 !pr-4 !pb-2 transition-all duration-100 ease-linear border border-cyan-400 bg-gradient-to-b from-cyan-400 to-blue-600 shadow-[0px_3px_11.5px_rgba(0,0,0,0.12),0px_1px_12.8px_rgba(255,255,255,0.51)_inset] rounded-[14px] w-full hover:opacity-80 cursor-pointer">
      <div className="flex flex-col gap-1">
        <div className="flex gap-2 items-center">
          <img src="src/assets/images/icons/discord.png" alt="icon" className="w-[24px] h-[24px]" />
          <p className="font-medium text-xl w-[402px]:text-lg">Discord</p>
        </div>
        <p className="font-medium text-base w-[402px]:text-sm gray-1 leading-5">Connected!</p>
      </div>
      <img src="src/assets/images/icons/ok.webp" alt="icon" className="w-[30px] h-[30px]" />
    </div>


  )
}

export default ActiveConnectBtn;