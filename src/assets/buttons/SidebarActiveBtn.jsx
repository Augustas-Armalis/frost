import { Link } from "react-router-dom";

const SidebarActiveBtn = ({ icon, label, path, className, onClick }) => {
  return (
    <Link to={path} onClick={onClick} className={`${className} sidebar-btn flex items-center gap-3 w-full !pl-3 !pt-2 !pb-2 !pr-4 cursor-pointer transition-all duration-100 ease-linear border border-cyan-400 bg-gradient-to-b from-cyan-400 to-blue-600 shadow-[0px_3px_11.5px_rgba(0,0,0,0.12),0px_1px_12.8px_rgba(255,255,255,0.51)_inset] rounded-[10px]`} >
      <img src={icon} alt="icon" className="w-[20px] h-[20px]" />
      <span className="font-medium text-[18px]">{label}</span>
    </Link>
  );
};

export default SidebarActiveBtn;


