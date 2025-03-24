const CustomCheckBox = ({ isChecked }) => {
  return (
    
    <div className={`w-[30px] h-[30px] flex-shrink-0 rounded-full flex items-center justify-center transition-all duration-150 border border-white/40 ${isChecked ? "bg-green-500/50" : "bg-white/20"}`} >
      {isChecked && (
        <img src="src/assets/images/icons/ok.webp" alt="icon" className="w-5 h-5" />
      )}
    </div>

  );
};

export default CustomCheckBox;
