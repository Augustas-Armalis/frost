import { useState, useEffect } from "react";
import ProductImage from "../back-end-things/ProductImage";
import ProductName from "../back-end-things/ProductName";
import GameLogo from "../back-end-things/GameLogo";
import ProductPrice from "../back-end-things/ProductPrice";
import XMonth from "../back-end-things/XMonth";
import RenewDate from "../back-end-things/RenewDate";
import PopupBtnMain from "../buttons/PopupBtnMain";
import PopupBtnAlt from "../buttons/PopupBtnAlt";
import PopupBtnMainLeave from "../buttons/PopupBtnMainLeave";
import PopupBtnAltLeave from "../buttons/PopupBtnAltLeave";

const ProductPopup = () => {
  const [isLeavePopupVisible, setLeavePopupVisible] = useState(false);

  const disableScroll = () => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflowX = "hidden";
    document.documentElement.style.overflowX = "hidden";
  };

  const enableScroll = () => {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
    document.body.style.overflowX = "hidden";
    document.documentElement.style.overflowX = "hidden";
  };

  useEffect(() => {
    const popup = document.querySelector(".product-popup");
    const observer = new MutationObserver(() => {
      const isVisible = !popup.classList.contains("hidden");
      if (isVisible) {
        disableScroll();
      } else {
        enableScroll();
      }
    });

    observer.observe(popup, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      observer.disconnect();
      enableScroll();
    };
  }, []);

  const handleClosePopup = () => {
    document.querySelector(".product-popup").classList.add("hidden");
  };

  return (
    <div className="w-full product-popup hidden h-full bg-black/50 backdrop-blur-[2px] z-4000 fixed top-0 left-0 items-center justify-center">
      <button
        onClick={handleClosePopup} className="absolute top-6 right-6 cursor-pointer z-5000 !bg-[#1b2e50] border border-white/20 !rounded-[10px] !p-3 hover:opacity-80">
        <img src="src/assets/images/icons/close.svg" alt="close" className="w-[28px]" />
      </button>

      <div className="glass-box !bg-[#1b2e50] relative z-3000 w-[700px] h-fit !p-4 !m-4">
        <p className="absolute bottom-[-30px] w-full left-0 text-center font-medium gray-2 text-base z-200 pointer-events-none">
          Click anywhere to close
        </p>

        <div className="product-popup-main">
          <ProductImage src="src/assets/images/product.png" className="w-full h-[300px] object-cover rounded-xl max-[488px]:h-[200px]" />
          <div className="flex items-center justify-between !mt-4">
            <ProductName name="Product Name" className="!text-3xl max-[402px]:!text-2xl" />
            <GameLogo src="src/assets/images/icons/game-icon.svg" className="h-[16px] max-[402px]:h-[12px]" />
          </div>
          <div className="divider !mt-2 !mb-2 w-full h-[1px] bg-white/20"></div>

          <div className="flex items-stretch justify-between w-full max-[488px]:flex-col gap-2">
            <div className="flex items-start flex-col w-fit flex-shrink-0 max-[488px]:flex-row max-[488px]:justify-between max-[488px]:items-center max-[488px]:w-full max-[488px]:flex-wrap">
              <p className="font-medium text-lg max-[402px]:text-base">Upcoming charge:</p>
              <ProductPrice price="$XX.XX" />
            </div>
            <div>
              <div className="flex items-end flex-col w-fit h-full justify-between">
                <p className="font-medium gray-1 text-lg max-[402px]:text-base text-right max-[488px]:!text-start w-full">
                  <XMonth month="X" /> Month Subscription
                </p>
                <p className="font-medium gray-1 text-lg max-[402px]:text-base text-right max-[488px]:!text-start w-full">
                  Renews automatically on <RenewDate date="XX/XX/XX" />
                </p>
              </div>
            </div>
          </div>
          <div className="divider !mt-3 !mb-4 w-full h-[1px] bg-white/20"></div>
          <div className="flex items-center justify-between w-full gap-3 max-[516px]:flex-col max-[516px]:!gap-3">
            <PopupBtnMain name="Upgrade" />
            <PopupBtnAlt name="Cancel Subscription" onClick={() => setLeavePopupVisible(true)} />
          </div>
        </div>

        <div
          className={`leave-popup absolute w-full h-full ${isLeavePopupVisible ? "flex" : "hidden"} items-center justify-center z-5000 top-0 left-0 !bg-[#1b2e50]/80 backdrop-blur-xl rounded-3xl`}>
          <p className="font-bold text-3xl max-[402px]:text-2xl text-center !mr-4 !ml-4">
            Are you sure you want to cancel?
          </p>
          <div className="absolute bottom-4 inset-x-4 flex items-center justify-between gap-3 max-[516px]:flex-col max-[516px]:!gap-3">
            <PopupBtnMainLeave name="No, I want to stay :D" onClick={() => setLeavePopupVisible(false)} />
            <PopupBtnAltLeave name="Yes, I'm sure :(" />
          </div>
        </div>
      </div>

      <div className="w-full h-full z-2000 fixed top-0 left-0" onClick={handleClosePopup}></div>
    </div>
  );
};

export default ProductPopup;