import SidebarUnactiveBtn from "/src/assets/buttons/sidebar-unactive-btn"
import SidebarActiveBtn from "/src/assets/buttons/sidebar-active-btn"

const Sidebar = () => {

  return (
    <div className="sidebar glass-box fixed flex flex-col justify-between left-6 top-[108px] bottom-6 w-[250px] !p-[24px] z-999999 max-[692px]:hidden">

      <div className="flex flex-col w-full gap-2">
        <SidebarActiveBtn path="/" icon="src/assets/images/icons/dashboard.png" label="Dashboard"/>
        <SidebarUnactiveBtn path="/subscriptions" icon="src/assets/images/icons/subscriptions.png" label="Subscriptions"/>
        <SidebarUnactiveBtn path="/affiliate" icon="src/assets/images/icons/affiliate.png" label="Affiliate"/>
      </div>

        <SidebarUnactiveBtn path="/settings" icon="src/assets/images/icons/settings.png" label="Settings"/>

    </div>
  )

}

export default Sidebar;