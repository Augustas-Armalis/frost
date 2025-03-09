import DashboardGreeting from "../components/DashboardGreeting.jsx"
import SmallBtn from "../buttons/SmallBtn.jsx"
import ActivityImage from "../back-end-things/ActivityImage.jsx"
import ActivityTitle from "../back-end-things/ActivityTitle.jsx"
import ActivityTime from "../back-end-things/ActivityTime.jsx"

const Dashboard = () => {
  return (
    <div className="!pl-[298px] !pt-[106px] !pr-6 !pb-6 relative z-40 h-fit min-h-screen text-left flex items-center justify-top flex-col max-[692px]:!pl-[16px] max-[692px]:!pr-[16px] max-[402px]:!pt-[96px] ">
      <div className="flex flex-col gap-2 items-start w-[1150px] max-[1464px]:w-[756px] max-[1078px]:w-full">


        <div className="drop-shadow-[0_4px_7px_rgba(0,0,0,0.07),0_1.5px_0.1px_var(--color-white)]">
          <p className="text-5xl font-bold bg-gradient-to-b from-white via-[#BEE2FB] to-[#66DCF3] bg-clip-text text-transparent leading-[1.2] max-[692px]:text-4xl max-[402px]:text-3xl"><DashboardGreeting/></p>
        </div>

        <p className="gray-1 text-lg font-medium left-0 !mb-6 !ml-1 max-[402px]:text-base">Explore mods, analytics & many more</p>
      </div>
      
      <div className="boxes-container flex items-center gap-4 justify-center flex-wrap max-w-[1150px] max-[692px]:!w-full">
        <div className="glass-box w-[756px] h-[370px] p-6 max-[1078px]:w-full min-w-[370px] max-[402px]:min-w-full"></div>
        <div className="glass-box w-[370px] h-[370px] !p-6 !pr-3 !pt-5 max-[1078px]:w-full min-w-[370px] max-[402px]:min-w-full max-[402px]:!p-4 max-[402px]:!pt-3 max-[402px]:!pr-[8px]">

          <div className="flex items-center justify-between !pr-4 max-[402px]:!pr-[8px]">
            <p className="text-3xl font-bold max-[402px]:text-2xl ">Recent Activity</p>
            <SmallBtn path="/activity" text="View All"/>
          </div>

          <div className="activity-container !mt-4 overflow-y-scroll overflow-x-hidden scrollbar-hidden h-[296px] flex flex-col gap-6 !pb-4 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_calc(100%-50px),rgba(0,0,0,0)_100%)]">

          <div className="custom-scrollbar-thumb absolute top-0 right-[-20px] w-3 bg-gradient-to-b from-[#4f46e5] to-[#9333ea] rounded" style={{ height: '50px' }}></div>

          <div className="absolute top-[72px] bottom-0 left-[46px] w-[2px] bg-white/20 z-2 max-[402px]:left-[38px]"></div>

            <div className="flex items-center gap-4 relative z-20 w-full [mask-image:linear-gradient(to_right,rgba(0,0,0,1)_calc(100%-50px),rgba(0,0,0,0)_97%)]">
            <ActivityImage icon="src/assets/images/icons/Rocket.webp" />
              <div>
                <div className="absolute top-0 left-[61px] w-full h-full flex flex-col">
                  <ActivityTitle activityTitle="Launched Lunar" />
                  <ActivityTime time="10 min ago" /></div>
              </div>
            </div>

            <div className="flex items-center gap-4 relative z-20 w-full [mask-image:linear-gradient(to_right,rgba(0,0,0,1)_calc(100%-50px),rgba(0,0,0,0)_97%)]">
              <ActivityImage icon="src/assets/images/icons/Download.webp" />
              <div>
                <div className="absolute top-0 left-[61px] w-full h-full flex flex-col">
                  <ActivityTitle activityTitle="Downloaded FrostChanger Loader (Windows)" />
                  <ActivityTime time="4h ago" /></div>
              </div>
            </div>

            <div className="flex items-center gap-4 relative z-20 w-full [mask-image:linear-gradient(to_right,rgba(0,0,0,1)_calc(100%-50px),rgba(0,0,0,0)_97%)]">
              <ActivityImage icon="src/assets/images/icons/Sign in.webp" />
              <div>
                <div className="absolute top-0 left-[61px] w-full h-full flex flex-col">
                  <ActivityTitle activityTitle="Signed In using Discord OAuth" />
                  <ActivityTime time="Yesterday 15:32" /></div>
              </div>
            </div>

            <div className="flex items-center gap-4 relative z-20 w-full [mask-image:linear-gradient(to_right,rgba(0,0,0,1)_calc(100%-50px),rgba(0,0,0,0)_97%)]">
              <ActivityImage icon="src/assets/images/icons/Ok.webp" />
              <div>
                <div className="absolute top-0 left-[61px] w-full h-full flex flex-col">
                  <ActivityTitle activityTitle="Successful Injection" />
                  <ActivityTime time="5d ago 13:46" /></div>
              </div>
            </div>

            <div className="flex items-center gap-4 relative z-20 w-full [mask-image:linear-gradient(to_right,rgba(0,0,0,1)_calc(100%-50px),rgba(0,0,0,0)_97%)]">
              <ActivityImage icon="src/assets/images/icons/Ok.webp" />
              <div>
                <div className="absolute top-0 left-[61px] w-full h-full flex flex-col">
                  <ActivityTitle activityTitle="Lorem Ipsum" />
                  <ActivityTime time="lorem XX:XX" /></div>
              </div>
            </div>


            <div className="flex items-center gap-4 relative z-20 w-full [mask-image:linear-gradient(to_right,rgba(0,0,0,1)_calc(100%-50px),rgba(0,0,0,0)_97%)]">
              <ActivityImage icon="src/assets/images/icons/Ok.webp" />
              <div>
                <div className="absolute top-0 left-[61px] w-full h-full flex flex-col">
                  <ActivityTitle activityTitle="Lorem Ipsum" />
                  <ActivityTime time="lorem XX:XX" /></div>
              </div>
            </div>



          </div>

        </div>
        <div className="glass-box w-[370px] h-[370px] p-6 max-[1078px]:w-full min-w-[370px] max-[402px]:min-w-full max-[402px]:!p-4"></div>
        <div className="glass-box w-[756px] h-[370px] p-6 max-[1078px]:w-full min-w-[370px] max-[402px]:min-w-full max-[402px]:!p-4"></div>
      </div>

    </div>
  )
}

export default Dashboard;