import { Link } from "react-router-dom"

function CTA() {
  return (
    <section className="cta">
      <p className="cta-text">
        Do you have interesting ideas? <br className="sm:block hidden" /> let's
        implement them together!
      </p>
      <Link to="/contact" className="btn">
        Contact
      </Link>
    </section>
  )
}

export default CTA
