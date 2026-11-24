export const getProducts = async () => {
  const response = await fetch("http://localhost:3001/api/products")
  const data = await response.json()

  return data
}

export const getProductById = async (id: string | undefined) => {

  if(id === undefined) throw new Error

  const response = await fetch(`http://localhost:3001/api/products/${id}`)
  const data = await response.json()

  return data
}