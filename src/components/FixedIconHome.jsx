import { Link } from "react-router-dom"
import { FaHome } from "react-icons/fa"

function FixedIconHome() {
  return (
    <div className="fixed top-60 left-10 z-50 text-sky-500 hover:text-white">
      <Link to="/">
        <FaHome size={20} />
      </Link>
    </div>
  )
}

export default FixedIconHome
