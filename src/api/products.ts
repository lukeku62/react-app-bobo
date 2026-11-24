import type { TypeProduct } from "../types/productsTypes"

export const getProducts = async (productId: string | undefined): Promise<TypeProduct> => {
    if(!productId) throw new Error("Id prodotto non valido")

    const response = await fetch(`http://localhost:3001/api/products/${productId}`)
    const data = await response.json()

    return data
  }