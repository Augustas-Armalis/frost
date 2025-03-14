import SmallBtn from "../buttons/SmallBtn.jsx"
import ActivityImage from "../back-end-things/ActivityImage.jsx"
import ActivityTitle from "../back-end-things/ActivityTitle.jsx"
import ActivityTime from "../back-end-things/ActivityTime.jsx"

const RecentActivityBox = ({ref}) => {
  return (
    <div ref={ref} className="glass-box w-[370px] h-[370px] !p-6 !pr-3 !pt-5 max-[1078px]:w-full min-w-[370px] max-[402px]:min-w-full max-[402px]:!p-4 max-[402px]:!pt-3 max-[402px]:!pr-[8px] opacity-0">

          <div className="flex items-center justify-between !pr-1.5">
            <p className="text-3xl font-bold max-[402px]:text-2xl ">Recent Activity</p>
            <SmallBtn path="/activity" text="View All"/>
          </div>

          <div className="activity-container !mt-4 overflow-y-scroll overflow-x-hidden scrollbar-hidden h-[296px] flex flex-col gap-6 !pb-4 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_calc(100%-50px),rgba(0,0,0,0)_100%)]">

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
  )
}

export default RecentActivityBox;