import { NavLink } from "react-router-dom"
import banner from "../assets/banner.jpg"

function Navbar() {
  return (
    <header className="header">
      {/* <a
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer sm:w-16 w-12"
        href="https://standwithukraine.com.ua/"
      >
        <img className="rounded-md flex" src={banner} alt="image" />
      </a> */}
      <NavLink
        to="/"
        className="flex text-lg sm:text-2xl font-medium transition-transform duration-500 transform hover:-translate-y-1"
        // className="w-16 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text hover:text-white">Home</p>
      </NavLink>
      <nav className="flex text-lg sm:text-2xl sm:gap-7 gap-6 font-medium ">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-white"
              : "blue-gradient_text hover:text-white transition-transform duration-500 transform hover:-translate-y-1"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/works"
          className={({ isActive }) =>
            isActive
              ? "text-white"
              : "blue-gradient_text hover:text-white transition-transform duration-500 transform hover:-translate-y-1"
          }
        >
          Works
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-white"
              : "blue-gradient_text hover:text-white transition-transform duration-500 transform hover:-translate-y-1"
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar
