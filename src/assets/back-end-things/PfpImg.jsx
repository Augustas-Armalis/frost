const PfpImg = ({ pfpImage, className }) => {
  return (
    <img src="src/assets/images/pfp.png" alt="pfp" className={className}/>
    // <img src={pfpImage} alt="pfp" className={className}/>
  )
};

export default PfpImg;
