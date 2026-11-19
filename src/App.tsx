import { useEffect, useState } from "react"
import Bobo from "./components/Bobo";
import Orologio from "./components/Orologio";

type TypeProduct = {
  title: string;
}


const App = () => {

  // const [products, setProducts] = useState<TypeProduct[]>([])

  // // const getProducts = async () => {
  // //   const response = await fetch("https://fakestoreapi.com/products")
  // //   const data = await response.json()
  // //   setProducts(data)
  // // }
  // // getProducts()

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const response = await fetch("https://fakestoreapi.com/products")
  //     const data = await response.json()
  //     setProducts(data)
  //   }

  //   getProducts()
  // }, [])

  // return (
  //   <>
  //     {/* <Counter /> */}
  //     {/* <PageCatalog /> */}
  //     {products.map((prod, index) => (
  //       <Bobo key={index} label={prod.title} />
  //     ))}
  //   </>
  // )
  return (
    <Orologio />
  )
}

export default App