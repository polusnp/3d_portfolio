import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"

import { Home, About, Works, Contact } from "./pages"
import FixedIconHome from "./components/FixedIconHome"

const App = () => {
  return (
    <main className="bg-[url('./assets/bg-contact.jpg')] bg-cover">
      <Router>
        <Navbar />
        <FixedIconHome />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
