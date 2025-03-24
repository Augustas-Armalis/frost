import { useState } from "react";
import ConnectCheckBoxes from "./ConnectCheckBoxes.jsx";
import NewsBox from "./NewsBox.jsx";

const ConnectAccSettings = ({ ref }) => {
  const [checkedBoxes, setCheckedBoxes] = useState({});

  const toggleCheckbox = (index) => {
    setCheckedBoxes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      <div className="flex gap-4 flex-col">
        <div ref={ref} className="glass-box w-full !p-4 opacity-0 gap-4 flex flex-col max-[878px]:h-fit">
          <ConnectCheckBoxes />
        
        </div>
        <div ref={ref} className=" glass-box flex flex-col justify-center gap-4 !p-4" >
          <NewsBox index={0} title="Newsletter title" description="What will you get by joining, discounts, ect." isChecked={checkedBoxes[0]} onClick={toggleCheckbox} />
          <NewsBox index={1} title="Newsletter title" description="What will you get by joining, discounts, ect." isChecked={checkedBoxes[1]} onClick={toggleCheckbox} />
          <NewsBox index={2} title="Newsletter title" description="What will you get by joining, discounts, ect." isChecked={checkedBoxes[2]} onClick={toggleCheckbox} />
        </div>
      </div>
    </>
  );
};

export default ConnectAccSettings;
