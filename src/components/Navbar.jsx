import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="flex text-lg gap-7 font-medium"
        // className="w-16 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="text-sky-800">Home</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-sky-400" : "text-sky-800"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/works"
          className={({ isActive }) =>
            isActive ? "text-sky-400" : "text-sky-800"
          }
        >
          Works
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-sky-400" : "text-sky-800"
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar
