import { useNavigate } from "react-router"
import type { TypeProduct } from "../types/productsTypes"

type Props = {
  product: TypeProduct
}

const ProductCard = ({ product }: Props) => {

  const navigate = useNavigate()

  const navigaAlDettaglio = () => {
    navigate("/product/" + product.id)
  }

  return (
    <div>
      <h4>{product.name}</h4>
      <p>Prezzo: {product.prices[0]}</p>
      <p>Rating: {product.rating} ({product.reviews})</p>

      <button onClick={navigaAlDettaglio}>Dettaglio</button>
    </div>
  )
}

export default ProductCard