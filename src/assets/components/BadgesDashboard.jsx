import BadgeExample from "../back-end-things/BadgeExample.jsx"
import BadgeNameExample from "../back-end-things/BadgeNameExample.jsx"

const BadgesDashboard = () => {
  return (
    <div className="flex items-center justify-between w-fit h-fit relative z-10 !mt-[200px] !pt-6 !pr-6 max-[692px]:!mt-[160px] max-[692px]:!pr-4">
      <div className="flex items-start justify-end gap-2 flex-wrap max-[692px]:gap-1">
        <BadgeExample icon="src/assets/images/badge-img.png" className="bg-red-500/30 flex items-center justify-center w-fit h-fit border border-white/20 rounded-[10px] backdrop-blur-2xl" />
        <BadgeExample icon="src/assets/images/moon.png" className="bg-yellow-500/30 flex items-center justify-center w-fit h-fit border border-white/20 rounded-[10px] backdrop-blur-2xl" />
        <BadgeNameExample icon="src/assets/images/clock.png" className="bg-orange-500/30 flex items-center justify-center w-fit h-fit border border-white/20 rounded-[10px] backdrop-blur-2xl" badgeName="OG user" />
      </div>
    </div>
  )
}

export default BadgesDashboard;