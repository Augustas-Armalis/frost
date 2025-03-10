const BadgeExample = ({icon, className}) => {
  return (
    <div className={className}>
      <img src={icon} alt="badge-icon" className="w-[30px] h-[30px]" />
    </div>

  )
}

export default BadgeExample;