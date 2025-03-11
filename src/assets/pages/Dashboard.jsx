import DashboardGreeting from "../components/DashboardGreeting.jsx"
import RecentActivityBox from "../components/RecentActivityBox.jsx"
import ProfileDashboard from "../components/ProfileDashboard.jsx"
import UsageChart from "../back-end-things/UsageChart.jsx"

const Dashboard = () => {
  return (
    <div className="!pl-[298px] !pt-[106px] !pr-6 !pb-6 relative z-40 h-fit min-h-screen text-left flex items-center justify-top flex-col max-[692px]:!pl-[16px] max-[692px]:!pr-[16px] max-[402px]:!pt-[96px] ">
      <div className="flex flex-col gap-2 items-start w-[1150px] max-[1464px]:w-[756px] max-[1078px]:w-full">


        <div className="drop-shadow-[0_4px_7px_rgba(0,0,0,0.07),0_1.5px_0.1px_var(--color-white)]">
          <p className="text-5xl font-bold bg-gradient-to-b from-white via-[#BEE2FB] to-[#66DCF3] bg-clip-text text-transparent leading-[1.2] max-[692px]:text-4xl max-[692px]:!ml-1 max-[402px]:text-3xl"><DashboardGreeting/></p>
        </div>

        <p className="gray-1 text-lg font-medium left-0 !mb-6 !ml-1 max-[402px]:text-base max-[692px]:!ml-1.5">Explore mods, analytics & many more</p>
      </div>
      
      <div className="boxes-container flex items-center gap-4 justify-center flex-wrap max-w-[1150px] max-[692px]:!w-full">

        <ProfileDashboard />
        <RecentActivityBox />
        


        <div className="glass-box w-[370px] h-[370px] p-6 max-[1078px]:w-full min-w-[370px] max-[402px]:min-w-full max-[402px]:!p-4">

        <UsageChart />

        </div>





        <div className="glass-box w-[756px] h-[370px] p-6 max-[1078px]:w-full min-w-[370px] max-[402px]:min-w-full max-[402px]:!p-4">





        </div>



      </div>

    </div>
  )
}

export default Dashboard;