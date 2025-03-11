import PoppingBubble from "./PoppingBubble.jsx";
import ProductStatus from "../back-end-things/ProductStatus.jsx";
import ProductExpiry from "../back-end-things/ProductExpiry.jsx";
import ProductName from "../back-end-things/ProductName.jsx";
import ProductImage from "../back-end-things/ProductImage.jsx";

const ProductCardDashboard = () => {
  return (
    <div className="w-[226px] h-fit !pb-4 bg-[#436AAE] relative overflow-hidden rounded-2xl border border-white/20 max-[828px]:w-[300px] max-[692px]:w-[220px] max-[538px]:w-[300px]">
      
      <img src="src/assets/images/product.png" alt="product" />

      <ProductImage className="w-full h-auto object-cover relative z-2" />

      <div className="w-full h-full bg-[#436AAE]"></div>
      
      <div className="absolute w-full h-fit bottom-0 bg-[#14306d64] backdrop-blur-md z-20 border-t border-white/20 !p-4 !pb-3">
        
        <img src="src/assets/images/icons/game-icon.svg" alt="game logo" className="h-3 object-cover relative z-2 !mb-1" />
        <ProductName name="Product Name" />

        <div className="flex justify-between items-center flex-wrap w-full !mt-1.5">
          <div className="flex items-center gap-2 !pl-1">
            <PoppingBubble />
            <ProductStatus status="Working" />
          </div>

          <ProductExpiry date="25/06/14" />
        </div>
        
      </div>
    </div>
  );
};

export default ProductCardDashboard;