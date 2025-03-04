import SidebarUnactiveBtn from "/src/assets/buttons/sidebar-unactive-btn"
import SidebarActiveBtn from "/src/assets/buttons/sidebar-active-btn"

const Sidebar = () => {

  return (
    <div className="sidebar glass-box fixed flex flex-col justify-between left-6 top-[108px] bottom-6 w-[250px] !p-[24px]">

      {/* I'm not the best with react to be honest, esp with linking pages (that's why I asked how in the beggining, because I usually code in JS) but since you're a pro at this, I'll leave it for you, I'm sorry for the inconvenience and Thankyou a lot! */}

      <div className="flex flex-col w-full gap-2">
        <SidebarActiveBtn path="/" icon="src/assets/images/icons/dashboard.png" label="Dashboard"/>
        <SidebarUnactiveBtn path="/" icon="src/assets/images/icons/subscriptions.png" label="Subscriptions"/>
        <SidebarUnactiveBtn path="/" icon="src/assets/images/icons/affiliate.png" label="Affiliate"/>
      </div>

        <SidebarUnactiveBtn path="/" icon="src/assets/images/icons/settings.png" label="Settings"/>

    </div>
  )

}

export default Sidebar;