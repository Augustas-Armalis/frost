import ProductImage from "../back-end-things/ProductImage";
import ProductName from "../back-end-things/ProductName";
import GameLogo from "../back-end-things/GameLogo";
import ProductPrice from "../back-end-things/ProductPrice";
import XMonth from "../back-end-things/XMonth";
import RenewDate from "../back-end-things/RenewDate";
import PopupBtnMain from "../buttons/PopupBtnMain";
import PopupBtnAlt from "../buttons/PopupBtnAlt";

const ProductPopup = () => {
  return (
    <div className="w-full product-popup hidden h-full bg-black/50 backdrop-blur-[2px] z-4000 fixed top-0 left-0 items-center justify-center">
      
      <button onClick={() => document.querySelector(".product-popup").classList.add("hidden")} className="absolute top-6 right-6 text-white cursor-pointer z-5000">
        ✖
      </button>
        
      <div className="glass-box !bg-[#1b2e50]/80 relative z-3000 w-[700px] h-fit !p-4 !m-4">

        <ProductImage src="src/assets/images/product.png" className="w-full h-[300px] object-cover rounded-xl" />

        <div className="flex items-center justify-between !mt-4">
          <ProductName name="Product Name" className="!text-3xl max-[402px]:!text-2xl" />
          <GameLogo src="src/assets/images/icons/game-icon.svg" className="h-[16px]"/>
        </div>

        <div className="divider !mt-2 !mb-2 w-full h-[1px] bg-white/20"></div>


        <div className="flex items-stretch justify-between w-full max-[488px]:flex-col">
          <div className="flex items-start flex-col w-fit bg-red-500 flex-shrink-0">
            <p className="font-medium text-lg max-[402px]:text-base">Upcomming charge:</p>
            <ProductPrice price="$XX.XX" />
          </div>

          <div>
            <div className="flex items-end flex-col w-fit bg-red-500/20 h-full justify-between">
              <p className="font-medium gray-1 text-lg max-[402px]:text-base text-right"><XMonth month="X"/> Month Subscription</p>
              <p className="font-medium gray-1 text-lg max-[402px]:text-base text-right">Renews automatically on <RenewDate date="XX/XX/XX"/></p>
            </div>
          </div>

        </div>

        <div className="flex items-center justify-between w-full gap-3">
          <PopupBtnMain />
          <PopupBtnAlt />
          </div>

      </div>

      <div className="w-full h-full z-2000 fixed top-0 left-0" onClick={() => document.querySelector(".product-popup").classList.add("hidden")}></div>

    </div>
  )
}

export default ProductPopup;