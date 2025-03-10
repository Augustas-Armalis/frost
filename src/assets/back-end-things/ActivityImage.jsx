const ActivityImage = ({ icon }) => {
  return (
    <div className=" w-[45px] h-[45px] flex-shrink-0 !p-1.5 rounded-[9999px] bg-[#436AAE] border border-white/20 backdrop-blur-lg">
      <img src={icon} alt="activity" className="w-full h-full object-cover" />
    </div>

  )
}

export default ActivityImage;