import { Link } from "react-router-dom"
import { FaHome, FaLinkedin, FaGithub } from "react-icons/fa"

function FixedIconHome() {
  return (
    <div className="fixed top-60 left-6 z-50  flex flex-col gap-16">
      <Link to="/" className="text-pink-600 shadow-xl hover:text-pink-300">
        <FaHome size={24} />
      </Link>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-600 shadow-xl hover:text-pink-300"
        to="https://www.linkedin.com/in/pavlo-nahurnyi-705641248?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BuJZgGs3rTROcoXgNJiUyLQ%3D%3D"
      >
        <FaLinkedin size={24} />
      </Link>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-600 shadow-xl hover:text-pink-300"
        to="https://github.com/polusnp"
      >
        <FaGithub size={24} />
      </Link>
    </div>
  )
}

export default FixedIconHome
