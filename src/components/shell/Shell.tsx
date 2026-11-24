import { Outlet } from "react-router"
import Footer from "./Footer"
import Headbar from "./Headbar"

type Props = {}

const Shell = (props: Props) => {
  return (
   <div>
    <Headbar />
    <Outlet />
    <Footer/>
   </div>
  )
}

export default Shell