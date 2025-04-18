import React, { useState } from "react";

const SaveButton = React.forwardRef(({ settingsRefs }, ref) => {
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    const inputRefs = settingsRefs.current.slice(0, 4);
    const formData = inputRefs.map((input) => input.querySelector('input').value);
    const hasChanges = formData.some((value) => value.trim() !== '');

    if (hasChanges) {
      console.log('Form Data:', formData);
      setIsSaved(true);
      setTimeout(() => {
        setIsSaved(false);
      }, 3000);
    } else {
      console.log('No changes detected');
    }
  };

  return (
    <div
      className="flex !mt-3 !mb-3 items-center justify-center gap-2 w-fit !pl-4 !pt-2 !pb-2 !pr-4 h-fit cursor-pointer transition-all duration-100 ease-linear border border-cyan-400 bg-gradient-to-b from-cyan-400 to-blue-600 shadow-[0px_3px_11.5px_rgba(0,0,0,0.12),0px_1px_12.8px_rgba(255,255,255,0.51)_inset] rounded-[10px] hover:opacity-80"
      onClick={handleSave}
      ref={ref}
    >
      <img
        src={isSaved ? 'src/assets/images/icons/ok.webp' : 'src/assets/images/icons/save.png'}
        alt="icon"
        className="w-[20px] h-[20px]"
      />
      <span className="font-medium text-[18px]">
        {isSaved ? 'Updated!' : 'Update profile'}
      </span>
    </div>
  );
});

export default SaveButton;
