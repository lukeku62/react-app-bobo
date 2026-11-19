import { Outlet } from "react-router"

type Props = {}

const ManShell = (props: Props) => {
  return (
    <div>
      <h1>MAN</h1>
      <Outlet />
    </div>
  )
}

export default ManShell