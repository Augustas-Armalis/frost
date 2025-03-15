const ProductName = ({name, className}) => {
  return (
    <p className={`text-xl font-bold ${className}`}>{name}</p>
  )
}

export default ProductName;