import { NavLink } from "react-router-dom"
import banner from "../assets/banner.png"

function Navbar() {
  return (
    <header className="header">
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer w-16"
        href="https://standwithukraine.com.ua/"
      >
        <img className="rounded-md flex" src={banner} alt="image" />
      </a>
      <NavLink
        to="/"
        className="flex text-3xl gap-7 font-medium"
        // className="w-16 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">Home</p>
      </NavLink>
      <nav className="flex text-3xl gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-slate-600" : "blue-gradient_text"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/works"
          className={({ isActive }) =>
            isActive ? "text-slate-600" : "blue-gradient_text"
          }
        >
          Works
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-slate-600" : "blue-gradient_text"
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar
