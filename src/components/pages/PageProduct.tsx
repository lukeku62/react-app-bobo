import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { getProductById } from "../../api/products"
import type { TypeProduct } from "../../types/productsTypes"

type Props = {}

const PageProduct = (props: Props) => {
  const [product, setProduct] = useState<TypeProduct | null>(null)

  const { productId } = useParams()

  const initializeProduct = async () => {
    const data = await getProductById(productId)
    setProduct(data)
  }

  useEffect(() => {
    initializeProduct()
  }, [])

  if (product === null) return <div>Nessun prodotto con questo ID</div>

  return (
    <div>{product.name}</div>
  )
}

export default PageProduct