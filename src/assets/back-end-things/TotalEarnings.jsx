const TotalEarnings = ({earnings}) => {
  return (
    <p className="text-5xl font-bold bg-gradient-to-b from-white via-[#BEE2FB] to-[#66DCF3] bg-clip-text text-transparent leading-[1.2] max-[692px]:text-4xl max-[692px]:!ml-1 max-[402px]:text-3xl">
    {earnings}
    </p>
  )
}

export default TotalEarnings;