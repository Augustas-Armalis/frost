import ActiveConnectBtn from "../buttons/ActiveConnectBtn.jsx";


const ConnectCheckBoxes = () => {
  return (
    <div className="flex w-full gap-4 flex-clip max-[878px]:flex-col">

      <ActiveConnectBtn />
      <InactiveConnectBtn />

        {/* Inactive Button */}
        <div className="flex flex-row items-center justify-between gap-3 !pt-2 !pl-4 !pr-4 !pb-2 transition-all duration-100 ease-linear border border-white/20 bg-white/10 rounded-[14px] w-full hover:opacity-80 cursor-pointer">
          <div className="flex flex-col gap-1">
            <div className="flex gap-2 items-center">
              <img src="src/assets/images/icons/google.png" alt="icon" className="w-[24px] h-[24px]" />
              <p className="font-medium text-xl w-[402px]:text-lg">Email</p>
            </div>
            <p className="font-medium text-base w-[402px]:text-sm gray-1 leading-5">Click to onnect</p>
          </div>
          <img src="src/assets/images/icons/plus.png" alt="icon" className="w-[30px] h-[30px]" />
        </div>

      </div>
  )
}

export default ConnectCheckBoxes;