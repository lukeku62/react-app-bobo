import { NavLink } from "react-router"
import PageCatalog from "./components/PageCatalog"


const App = () => {
  return (
    <>
    <NavLink style={({isActive}) => {return {color: isActive ? "red" : "blue"}}} to="/"><h1>Home</h1></NavLink>
    <NavLink style={({isActive}) => {return {color: isActive ? "red" : "blue"}}} to="/man/product-detail/aria-runner" ><h1>Current Page</h1></NavLink> 
      <h1>Hello Pippo</h1>
    </>
  )
}

export default App