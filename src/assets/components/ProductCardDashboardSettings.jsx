import PoppingBubble from "./PoppingBubble.jsx";
// import PoppingBubblePaused from "./PoppingBubblePaused.jsx";
// import PoppingBubbleStopped from "./PoppingBubbleStopped.jsx";

import ProductStatus from "../back-end-things/ProductStatus.jsx";
import ProductGifted from "../back-end-things/ProductGifted.jsx";
import ProductName from "../back-end-things/ProductName.jsx";
import ProductImage from "../back-end-things/ProductImage.jsx";
import GameLogo from "../back-end-things/GameLogo.jsx";


const ProductCardDashboardSettings = () => {
  return (
    <div className="w-[248px] h-fit !pb-12 bg-[#436AAE] relative overflow-hidden rounded-2xl border border-white/20 max-[828px]:w-[300px] max-[692px]:w-[220px] max-[538px]:w-[300px]">

      <ProductImage src="src/assets/images/product.png" className="w-full h-auto object-cover relative z-2" />

      <div className="w-full h-full bg-[#436AAE]"></div>
      
      <div className="absolute w-full h-fit bottom-0 bg-[#14306d64] backdrop-blur-md z-20 border-t border-white/20 !p-4 !pb-3">
        
        <GameLogo src="src/assets/images/icons/game-icon.svg" alt="game logo" className="h-3 object-cover relative z-2 !mb-1" />

        <ProductName name="Product Name" />

        <div className="flex justify-between items-center flex-wrap w-full !mt-1.5">
          <div className="flex items-center gap-2 !pl-1">
            <PoppingBubble />
            {/* <PoppingBubblePaused />  */} {/* I don't know how you do it with backend, but at least here are the status bubbles */}
            {/* <PoppingBubbleStopped /> */}
            <ProductStatus status="Working" />
          </div>

          <ProductGifted date="XX/XX/XX" />
        </div>
        
      </div>
    </div>
  );
};

export default ProductCardDashboardSettings;