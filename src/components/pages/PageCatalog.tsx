import { useEffect, useState } from "react"
import ProductCard from "../ProductCard"
import type { TypeProduct } from "../../types/productsTypes"
import { getProducts } from "../../api/products"

type Props = {}

const PageCatalog = (props: Props) => {

  const [products, setProducts] = useState<TypeProduct[]>([])

  const initializeCatalog = async () => {
    const data = await getProducts()
    setProducts(data)
  }

  useEffect(() => {
    initializeCatalog()
  }, [])

  return (
    <div>{products.map((product) => (
      <ProductCard product={product} key={product.id} />
    ))}</div>
  )
}

export default PageCatalog