import { Link } from "react-router"

type Props = {}

const Header = (props: Props) => {
  return (
    <div className="header">
      <Link to="/">ORMA</Link>
    </div>
  )
}

export default Header