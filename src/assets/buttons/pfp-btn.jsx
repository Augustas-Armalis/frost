import { Link } from "react-router-dom";

const PfpBtn = ({ icon, label, path }) => {
  return (
    <Link to={path} className="sidebar-btn flex items-center gap-3 w-full !pl-3 !pt-2 !pb-2 !pr-4 cursor-pointer transition-all duration-100 ease-linear hover:bg-white/10">
      <img src={icon} alt="icon" className="w-[20px] h-[20px]" />
      <span className="font-medium text-[18px] whitespace-nowrap">{label}</span>
    </Link>
  );
};

export default PfpBtn;