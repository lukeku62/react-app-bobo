import { Outlet } from "react-router"
import Footer from "./Footer"
import Header from "./Header"

type Props = {}

const Shell = (props: Props) => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Shell