import BannerImage from "../back-end-things/BannerImage.jsx"
import PfpImg from "../back-end-things/PfpImg.jsx"
import UserDisplayName from "../back-end-things/UserDisplayName.jsx"
import UserName from "../back-end-things/UserName.jsx"
import BadgesDashboard from "../components/BadgesDashboard.jsx"
import MemberSinceDashboard from "../back-end-things/MemberSinceDashboard.jsx"

import { useRef } from 'react';

const ProfileDashboardSettings = ({ ref }) => {
  const pfpFileInput = useRef(null);
  const bannerFileInput = useRef(null);

  const handlePfpClick = () => {
    pfpFileInput.current.click();
  };

  const handleBannerClick = () => {
    bannerFileInput.current.click();
  };

  return (
    
    <div ref={ref} className="glass-box w-fill h-[370px] max-[1074px]:w-full min-w-[370px] max-[402px]:min-w-full overflow-hidden max-[692px]:h-[300px] opacity-0">
      <div className="flex justify-between w-full h-full">
        <div className="flex align-center justify-between w-fit flex-col h-full !pb-6 flex-shrink-0 max-[692px]:!pb-4">
          <div
            className="relative z-20 !mt-24 !ml-6 flex items-center bg-white/20 backdrop-blur-2xl w-fit rounded-[34px] border border-white/20 flex-shrink-0 max-[692px]:!mt-16 max-[692px]:!ml-4 cursor-pointer"
            onClick={handlePfpClick} >
            <PfpImg pfpImage="src/assets/images/pfp.png" className="w-[150px] h-[150px] !m-2 rounded-3xl flex-shrink-0 max-[692px]:w-[120px] max-[692px]:h-[120px]" />
            <div className="change-pfp fixed z-90 left-2 top-2 w-[150px] h-[150px] max-[692px]:w-[120px] rounded-3xl max-[692px]:h-[120px] flex justify-center items-center !bg-black/40 hover:!bg-black/50 hover:backdrop-blur-[2px] transition-all duration-150 max-[692px]:backdrop-blur-[2px]">
              <img src="src/assets/images/icons/edit.png" alt="edit" className="w-[40px] h-[40px]" />
            </div>
            <input ref={pfpFileInput} type="file" className="hidden" />
          </div>

          <div>
            <UserDisplayName name="John Doe" className="font-bold text-white text-3xl relative z-10 !ml-6 max-[402px]:text-2xl max-[692px]:!ml-4" />
            <UserName username="john_doe123" className="gray-2 text-lg font-medium relative z-10 !ml-6 max-[402px]:text-base max-[692px]:!ml-4" />
          </div>
        </div>
        <BadgesDashboard />
      </div>

      <MemberSinceDashboard memberSince="2024" />

      <div className="h-fit cursor-pointer" onClick={handleBannerClick}>
        <BannerImage image="src/assets/images/banner.png" className="w-full h-[200px] object-cover absolute top-0 left-0 max-[692px]:h-[170px]" />
        <div className="change-banner fixed gap-2 z-10 left-0 top-0 w-full h-[200px] max-[692px]:h-[170px] flex justify-center !pl-20 items-center !bg-black/40 max-[1464px]:!pl-0 max-[905px]:!pl-20 max-[823px]:!pl-40 hover:!bg-black/50 transition-all duration-150 hover:backdrop-blur-[2px] max-[692px]:backdrop-blur-[2px]">
          <img src="src/assets/images/icons/edit.png" alt="edit" className="w-[30px] h-[30px]" />
          <p className="font-medium text-xl block max-[402px]:hidden">Change Banner</p>
        </div>
        <input ref={bannerFileInput} type="file" className="hidden" />
      </div>
    </div>

  );
};

export default ProfileDashboardSettings;
