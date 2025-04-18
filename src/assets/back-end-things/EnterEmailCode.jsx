import { useState } from "react";

const EnterEmailCode = ({ ref, onConfirm }) => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [code, setCode] = useState("");

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  const handleConfirm = () => {
    if (code) {
      setIsConfirmed(true);
      onConfirm(code);
    }
  };

  return (
    <div className="!mb-2 w-full flex flex-col gap-1.5 flex-grow" ref={ref}>
      <label htmlFor="code" className="text-2xl font-bold max-[402px]:text-xl">
        Enter confirmation code
      </label>

      <div className="flex gap-2 justify-between">
        <input type="text" id="code" className="mt-2 w-full custom-input p-2 !pl-4 bg-white/10 border border-white/20 rounded-[10px] flex items-center !pt-2 !pb-2 overflow-hidden relative shadow-[inset_0px_0px_10.8px_0px_rgba(255,255,255,0.25)] backdrop-blur-[10px] font-medium text-xl max-[402px]:text-lg" placeholder="123456..." value={code} onChange={handleChange} disabled={isConfirmed} required />

        <div className="flex items-center justify-center gap-1 !w-[115px] !pl-5 !pt-2 !pb-2 !pr-4 h-fit cursor-pointer transition-all duration-100 ease-linear border border-cyan-400 bg-gradient-to-b from-cyan-400 to-blue-600 shadow-[0px_3px_11.5px_rgba(0,0,0,0.12),0px_1px_12.8px_rgba(255,255,255,0.51)_inset] rounded-[10px] hover:opacity-80" onClick={handleConfirm} disabled={isConfirmed || !code}>
          <img
            src={
              isConfirmed
                ? "src/assets/images/icons/ok.webp"
                : "src/assets/images/icons/save.png"
            }
            alt="icon" className="w-[20px] h-[20px]"
          />
          <span className="font-medium text-[18px]">
            {isConfirmed ? "Success" : "Enter"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EnterEmailCode;