import ConnectCheckBoxes from "./ConnectCheckBoxes.jsx";
import CustomCheckBox from "./CustomCheckBox.jsx";


const ConnectAccSettings = ({ref}) => {
  return (
    <div ref={ref} className="glass-box w-fill h-[370px] !p-4 max-[1074px]:w-full min-w-[370px] max-[402px]:min-w-full max-[1074px]:h-fit opacity-0">

      <ConnectCheckBoxes />

      <CustomCheckBox />
     
    </div>
  );
};

export default ConnectAccSettings;