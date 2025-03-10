const BadgeExample = ({icon, badgeName, className}) => {
  return (
    <div className={className}>
      <img src={icon} alt="badge-icon" className="w-[30px] h-[30px" />
      <p className=" text-base font-medium !mr-2 text-red-100">{badgeName}</p>
    </div>

  )
}

export default BadgeExample;