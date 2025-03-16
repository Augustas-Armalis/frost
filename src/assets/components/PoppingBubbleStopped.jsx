const PoppingBubbleStopped = () => {

  return (
    <div className="relative">
      <div className="popping-bubble absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f83333]/30 w-[16px] h-[16px]"></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#f83333]"></div>
    </div>
  )

}

export default PoppingBubbleStopped;