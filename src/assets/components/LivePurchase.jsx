import ProductImage from "../back-end-things/ProductImage.jsx"
import ProductName from "../back-end-things/ProductName.jsx"
import BuyersName from "../back-end-things/BuyersName.jsx"
import PurchaseDate from "../back-end-things/PurchaseDate.jsx"
import PurchasePrice from "../back-end-things/PurchasePrice.jsx"


const LivePurchase = () => {
  return (
    <div className="w-[357px] h-[165px] max-w-[380px] relative overflow-hidden rounded-3xl border border-white/20 bg-[#436AAE] max-[1464px]:w-[345px] max-[1078px]:w-[320px] max-[1028px]:w-[380px] max-[730px]:w-[325px] max-[692px]:w-[370px]">

    <ProductImage src="src/assets/images/product.png" className="object-cover h-full w-auto relative z-2"/>
    <div className="bg-[#14306d64] backdrop-blur-xl h-full w-fit absolute top-0 right-0 !border-t-[0px] z-4 !p-4 border-l-[1px] border-l-white/20 flex justify-between flex-col">

      <div>
        <div>
          <ProductName name="Product Name" className="text-xl font-bold"/>
          <BuyersName name="Buyer's Name" />
        </div>
        <PurchasePrice price="$XX.XX"/>
      </div>

      <PurchaseDate date="XX/XX/XX"/>

    </div>

  </div>
  )
}

export default LivePurchase;