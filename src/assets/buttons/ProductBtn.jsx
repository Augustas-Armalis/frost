const ProductBtn = () => {
  const handleClick = () => {
    const popup = document.querySelector(".product-popup");
    if (popup) {
      popup.classList.replace("hidden", "flex");
    }
  };

  return (
    <div onClick={handleClick} className="flex items-center justify-center !mt-3 gap-1 w-full !pl-3 !pt-2 !pb-2 !pr-4 cursor-pointer transition-all duration-100 ease-linear border border-cyan-400 bg-gradient-to-b from-cyan-400 to-blue-600 shadow-[0px_3px_11.5px_rgba(0,0,0,0.12),0px_1px_12.8px_rgba(255,255,255,0.51)_inset] rounded-[10px] hover:opacity-80">
      <span className="font-medium text-[18px]">Manage</span>
      <img src="src/assets/images/icons/arrow-right.png" alt="icon" className="w-[20px] h-[20px]" />
    </div>
  );
};

export default ProductBtn;
