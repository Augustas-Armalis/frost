import CustomCheckBox from "./CustomCheckBox.jsx";

const NewsBox = ({ index, title, description, isChecked, onClick}) => {
  return (
    <div
      className="news-box flex gap-4 items-center w-full bg-white/10 border border-white/20 hover:opacity-80 cursor-pointer transition-all duration-150 rounded-[14px] !pl-4 !pr-4 !pt-2 !pb-2 overflow-hidden"
      onClick={() => onClick(index)}
    >
      <CustomCheckBox isChecked={isChecked} />
      <div className="[mask-image:linear-gradient(to_right,rgba(0,0,0,1)_calc(100%-50px),rgba(0,0,0,0)_97%)] w-full">
        <p className="font-medium text-xl">{title}</p>
        <p className="font-medium text-base text-gray-400 leading-5">{description}</p>
      </div>
    </div>
  );
};

export default NewsBox;
