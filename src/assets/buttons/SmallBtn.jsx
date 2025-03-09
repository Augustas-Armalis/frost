import { Link } from "react-router-dom";

const SmallBtn = ({ text, path }) => {
  return (
    <div className="rounded-[10px] border border-white/20 bg-white/15 shadow-[inset_0px_4px_10.8px_0px_rgba(255,255,255,0.25)] backdrop-blur-[10px] !pt-[2px] !pb-[2px] !pl-[9px] !pr-[9px] cursor-pointer hover:opacity-80 transition-all duration-100 ease-linear">
      <Link to={path} className="text-lg font-medium whitespace-nowrap">{text}</Link>
    </div>
  )
};

export default SmallBtn;