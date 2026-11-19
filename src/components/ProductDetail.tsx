import { useEffect, useState } from "react"
import { Link, NavLink, useNavigate, useParams } from "react-router"
import type { TypeProduct } from "../data/products"
import Card from "./Card"

const ProductDetail = () => {
  const [product, setProduct] = useState<TypeProduct | null>(null)
  const { id } = useParams()

  const navigate = useNavigate()

  const getProduct = async () => {
    const response = await fetch(`http://localhost:3001/api/products/${id}`)
    const data = await response.json()

    setProduct(data)
  }

  useEffect(() => {
    getProduct()
  }, [])


  return (
    <>
    <NavLink style={({isActive}) => {return {color: isActive ? "red" : "blue"}}} to="/"><h1>Home</h1></NavLink>
    <NavLink style={({isActive}) => {return {color: isActive ? "red" : "blue"}}} to="/man/product-detail/aria-runner" ><h1>Current Page</h1></NavLink> 

      {product ? <Card product={product} /> : <p>Prodotto non disponibile</p>}

      <button onClick={() => navigate("/")}>Vai alla Home</button>
    </>
  )
}

export default ProductDetail