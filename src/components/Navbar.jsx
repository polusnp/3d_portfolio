import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="flex text-lg sm:text-2xl font-medium transition-transform duration-500 transform hover:-translate-y-1"
        // className="w-16 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text hover:text-pink-300">HOME</p>
      </NavLink>
      <nav className="flex text-lg sm:text-2xl gap-4 font-medium ">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-pink-300"
              : "blue-gradient_text hover:text-pink-300 transition-transform duration-500 transform hover:-translate-y-1"
          }
        >
          ABOUT
        </NavLink>
        <NavLink
          to="/works"
          className={({ isActive }) =>
            isActive
              ? "text-pink-300"
              : "blue-gradient_text hover:text-pink-300 transition-transform duration-500 transform hover:-translate-y-1"
          }
        >
          WORKS
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-pink-300"
              : "blue-gradient_text hover:text-pink-300 transition-transform duration-500 transform hover:-translate-y-1"
          }
        >
          CONTACT
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar
