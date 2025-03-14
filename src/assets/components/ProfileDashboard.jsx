import BannerImage from "../back-end-things/BannerImage.jsx"
import PfpImg from "../back-end-things/PfpImg.jsx"
import UserDisplayName from "../back-end-things/UserDisplayName.jsx"
import UserName from "../back-end-things/UserName.jsx"
import BadgesDashboard from "../components/BadgesDashboard.jsx"
import MemberSinceDashboard from "../back-end-things/MemberSinceDashboard.jsx"

const ProfileDashboard = ({ref}) => {
  return (
    <div ref={ref} className="glass-box w-[756px] h-[370px] max-[1078px]:w-full min-w-[370px] max-[402px]:min-w-full overflow-hidden max-[692px]:h-[300px] opacity-0">

    <div className="flex justify-between w-full h-full">

      <div className="flex align-center justify-between w-fit flex-col h-full !pb-6 flex-shrink-0 max-[692px]:!pb-4">
        <div className="relative z-10 !mt-24 !ml-6 flex items-center bg-white/20 backdrop-blur-2xl w-fit rounded-[34px] border border-white/20 flex-shrink-0 max-[692px]:!mt-16 max-[692px]:!ml-4">
          <PfpImg pfpImage="src/assets/images/pfp.png" className="w-[150px] h-[150px] !m-2 rounded-3xl flex-shrink-0 max-[692px]:w-[120px] max-[692px]:h-[120px]"/>
        </div>

        <div>
          <UserDisplayName name="John Doe" className="font-bold text-white text-3xl relative z-10 !ml-6  max-[402px]:text-2xl max-[692px]:!ml-4" />
          <UserName username="john_doe123" className="gray-2 text-lg font-medium relative z-10 !ml-6 max-[402px]:text-base max-[692px]:!ml-4" />
        </div>
      </div>

      <BadgesDashboard />
    </div>
    
    <MemberSinceDashboard memberSince="2024" />

    <BannerImage image="src/assets/images/banner.png" className="w-full h-[200px] object-cover absolute top-0 left-0 max-[692px]:h-[170px]"/>

  </div>
  )
}

export default ProfileDashboard;