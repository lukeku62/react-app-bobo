import { useEffect, useState } from "react"
import type { TypeProduct } from "../../types/productsTypes"
import { useParams } from "react-router"
import { getProducts } from "../../api/products"
import Bottonex from "./Bottonex"

type Props = {}

const PageProductDetail = (props: Props) => {

  const [product, setProduct] = useState<TypeProduct | null>(null)

  const [bobo, setBobo] = useState(false)

  const handleBobo = () => {
    setBobo(!bobo)
  }

  const { productId } = useParams()

  const iniazializeProduct = async () => {
    const data = await getProducts(productId)
    setProduct(data)
  }


  useEffect(() => {
    iniazializeProduct()
  }, [])


  if (!product) return <div>Prodotto non trovato...</div>
  return (
    <div>
      <div>{product.name}</div>
      <Bottonex bobo={bobo} handleBobo={handleBobo} />
    </div>
  )
}

export default PageProductDetail