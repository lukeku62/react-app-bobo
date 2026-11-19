import { useEffect, useState } from "react";
import type { TypeProduct } from "../data/products";
import CatalogList from "./CatalogList";
import OrderProducts from "./OrderProducts";
import Searchbar from "./Searchbar";

export type TypeGroupByOpts = "none" | "price-asc" | "price-desc" | "name-asc" | "name-desc"

const PageCatalog = () => {

  const [prodotti, setProdotti] = useState<TypeProduct[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/productso")
      if(!response.ok) throw new Error("Errore: risorsa non esistente👻")
      const data = await response.json()
      setProdotti(data)
    } catch (error: unknown) {
      console.log(error)
      setError(error instanceof Error ? error.message : "Si è verificato un errore sconosciuto🧐")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  // const handleOrderBy = (opt: TypeGroupByOpts) => {
  //   if (opt === "price-asc") {
  //     setProdotti([...products].sort((a, b) => a.prices[0] - b.prices[0]))
  //   }
  //   if (opt === "price-desc") {
  //     setProdotti([...products].sort((a, b) => b.prices[0] - a.prices[0]))
  //   }
  //   if (opt === "name-asc") {
  //     setProdotti([...products].sort((a, b) => a.name.localeCompare(b.name)))
  //   }
  //   if (opt === "name-desc") {
  //     setProdotti([...products].sort((a, b) => b.name.localeCompare(a.name)))
  //   }
  // }

  // const handleSearch = (input: string) => {
  //   setProdotti([...products].filter(product => {
  //     return product.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())
  //   }))
  // }

  if(isLoading)
    return <p>Sto caricando...</p>

  if (error) {
    return <p>Si è verificato un errore 🤯: <br/> {error}</p>
  }

  return (
    <div>
      {/* <Searchbar handleSearch={handleSearch} />
      <div className="flexsb">
        <h1>Sneakers {products.length} Modelli</h1>
        <OrderProducts handleOrderBy={handleOrderBy} />
      </div> */}
      <CatalogList products={prodotti} />
    </div>
  )
}

export default PageCatalog