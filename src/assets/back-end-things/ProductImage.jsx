const ProductImage = ({className, src}) => {
  return (
    <img src={src} alt="product" className={className}/>
  )
}

export default ProductImage;