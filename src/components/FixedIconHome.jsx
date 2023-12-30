import { Link } from "react-router-dom"
import { FaHome, FaLinkedin, FaGithub } from "react-icons/fa"

function FixedIconHome() {
  return (
    <div className="fixed top-52 left-6 z-50  flex flex-col gap-10">
      <Link to="/" className="text-sky-500 hover:text-white">
        <FaHome size={20} />
      </Link>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        className="text-sky-500 hover:text-white"
        to="https://www.linkedin.com/in/pavlo-nahurnyi-705641248?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BuJZgGs3rTROcoXgNJiUyLQ%3D%3D"
      >
        <FaLinkedin size={20} />
      </Link>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        className="text-sky-500 hover:text-white transition-transform duration-500 transform hover:-translate-y-1"
        to="https://github.com/polusnp"
      >
        <FaGithub size={20} />
      </Link>
    </div>
  )
}

export default FixedIconHome
