import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <header className="header">
      <NavLink
        target="_blanc"
        className="cursor-pointer w-16"
        to="https://standwithukraine.com.ua/"
      >
        <img
          className="rounded-md flex"
          src="https://www.eib.org/photos/rs/bb858d9b-de8f-4f4d-a4b5-1302cc8dfbd4/largeprvw/image.jpg"
        />
      </NavLink>
      <NavLink
        to="/"
        className="flex text-2xl gap-7 font-medium"
        // className="w-16 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="text-slate-400">Home</p>
      </NavLink>
      <nav className="flex text-2xl gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-slate-600" : "text-slate-400"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/works"
          className={({ isActive }) =>
            isActive ? "text-slate-600" : "text-slate-400"
          }
        >
          Works
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-slate-600" : "text-slate-400"
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar
