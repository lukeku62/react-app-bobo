import { useEffect, useState } from "react";
import type { TypeProduct } from "../data/products";
import CatalogList from "./CatalogList";
import OrderProducts from "./OrderProducts";
import Searchbar from "./Searchbar";

export type TypeGroupByOpts = "none" | "price-asc" | "price-desc" | "name-asc" | "name-desc"

const PageCatalog = () => {

  const [prodotti, setProdotti] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | undefined>(undefined)

  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/products")
      const data = await response.json()
      if(!response.ok)
        throw new Error("Pippo Error")

      setProdotti(data)
      setIsLoading(false)
    } catch(error: unknown) {
      if(error instanceof Error)
        setError(error.message)
      else
        setError("Errore sconosciuto")
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  // const handleSearch = (input: string) => {
  //   setProdotti([...products].filter(prod => prod.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())))
  // }

  // const handleOrderBy = (opt: TypeGroupByOpts) => {
  //   if (opt === "name-asc") {
  //     const prodNameAsc = [...products].sort((a, b) => a.name.localeCompare(b.name))
  //     console.log("Name Asc: ", prodNameAsc);

  //     setProdotti(prodNameAsc)
  //     console.log(prodotti);
  //   }
  //   if (opt === "name-desc") {
  //     const prodNameDesc = [...products].sort((a, b) => b.name.localeCompare(a.name))
  //     setProdotti(prodNameDesc)
  //     console.log(prodotti);

  //   }
  //   if (opt === "price-asc") {
  //     const prodPriceAsc = [...products].sort((a, b) => a.prices[0] - b.prices[0])
  //     setProdotti(prodPriceAsc)
  //     console.log(prodotti);

  //   }
  //   if (opt === "price-desc") {
  //     const prodPriceDesc = [...products].sort((a, b) => b.prices[0] - a.prices[0])
  //     setProdotti(prodPriceDesc)
  //     console.log(prodotti);

  //   }
  //   // else {
  //   //   setProdotti(products)
  //   //   console.log(prodotti);

  //   // }
  // }


  return (
    // <div>
    <div className="flexsb">
      {/* <h1>Sneakers {products.length} Modelli</h1>
        <OrderProducts handleOrderBy={handleOrderBy} />
      </div>
      <Searchbar handleSearch={handleSearch} /> */}
      {error ? <p>{error}</p> : isLoading ? <p>Sto caricando...</p> : <CatalogList products={prodotti} />}
    </div>
  )
}

export default PageCatalog