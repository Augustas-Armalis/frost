import SmallBtn from "../buttons/SmallBtn.jsx";
import ProductCardDashboardSettings from "./ProductCardDashboardSettings.jsx";

const ProductsDashboardSettings = ({ref}) => {
  return (
    <div ref={ref} className="glass-box w-fill h-full !p-6 !pr-3 !pt-5 max-[1074px]:w-full min-w-[370px] max-[402px]:min-w-full max-[402px]:!p-4 max-[402px]:!pt-3 max-[402px]:!pr-[8px] max-[1074px]:h-[500px] opacity-0">
      
      <div className="flex items-center justify-between !pr-2 max-[402px]:!pr-[8px]">
        <p className="text-3xl font-bold max-[402px]:text-2xl">Gifts History</p>
        <SmallBtn path="/subscriptions" text="Manage All" />
      </div>

      <div className="activity-container !mt-4 overflow-y-scroll overflow-x-hidden scrollbar-hidden h-[280px] max-[1074px]:!h-[426px] flex flex-row flex-wrap gap-3 justify-center items-start !pb-4 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_calc(100%-50px),rgba(0,0,0,0)_100%)] !pr-2">
        {/* About the height of the recent gifts products, it's dependant on how many newsletter boxes are added, so if there is 2 boxes: then the height of this activity container should be 210px, if it's 3 boxes, then it's: 280px. It's basically +- roughly 70px every new newsletter box. So adjust only the h-[..] property on the activity container ONLY, the rest is good.*/}
        {/* I'm sorry about this inconvenience in sizing, it's because of relative newsletter box as well as to have scrollable items inside, tried to go around this, maybe you will be able to figure it out, cuz I'm not an expert in tailwind yet */}
        
        <ProductCardDashboardSettings />
        <ProductCardDashboardSettings />
        <ProductCardDashboardSettings />
        <ProductCardDashboardSettings />
        <ProductCardDashboardSettings />
        <ProductCardDashboardSettings />
        <ProductCardDashboardSettings />
        <ProductCardDashboardSettings />
        <ProductCardDashboardSettings />
        
      </div>
      
    </div>
  );
};

export default ProductsDashboardSettings;