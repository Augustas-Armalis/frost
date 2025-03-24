import PoppingBubble from "./PoppingBubble.jsx";
import ProductStatus from "../back-end-things/ProductStatus.jsx";
import ProductExpiry from "../back-end-things/ProductExpiry.jsx";
import ProductName from "../back-end-things/ProductName.jsx";
import ProductImage from "../back-end-things/ProductImage.jsx";
import ProductBtn from "../buttons/ProductBtn.jsx";
// import PoppingBubblePaused from "./PoppingBubblePaused.jsx";
// import PoppingBubbleStopped from "./PoppingBubbleStopped.jsx";

const ProductBox = ({ref}) => {
  return (
    <>
    
      <div ref={ref} className=" w-[370px] h-fit opacity-0 max-[812px]:w-full min-w-[370px] max-[692px]:w-[370px] max-[600px]:w-full max-[402px]:min-w-full">
        <div className=" !pb-20 bg-[#436AAE] relative overflow-hidden rounded-2xl border border-white/20">

          <ProductImage src="src/assets/images/product.png" className="w-full h-auto object-cover relative z-2" />

          <div className="w-full h-full bg-[#436AAE]"></div>
          
          <div className="absolute w-full h-fit bottom-0 bg-[#14306d64] backdrop-blur-md z-20 border-t border-white/20 !p-4 !pb-4">
            
            <img src="src/assets/images/icons/game-icon.svg" alt="game logo" className="h-3 object-cover relative z-2 !mb-1" />
            <ProductName name="Product Name" />

            <div className="flex justify-between items-center flex-wrap w-full !mt-1.5">
              <div className="flex items-center gap-2 !pl-1">
                <PoppingBubble />
                {/* <PoppingBubblePaused />  */} {/* I don't know how you do it with backend, but at least here are the status bubbles */}
                {/* <PoppingBubbleStopped /> */}
                <ProductStatus status="Working" />
              </div>

              <ProductExpiry date="25/06/14" />
            </div>

            <ProductBtn />
            
          </div>
        </div>
      </div>

    </>
  )
}

export default ProductBox