const PopupBtnMainLeave = ({name}) => {
  return (
    <div className="flex items-center justify-center gap-1 w-full !pl-3 !pt-2 !pb-2 !pr-4 cursor-pointer transition-all duration-100 ease-linear border border-white/20 bg-white/10 rounded-[10px] hover:opacity-80">
      <span className="font-medium text-[18px] gray-2">{name}</span>
    </div>
  )
}

export default PopupBtnMainLeave;