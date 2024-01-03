import { useEffect } from "react"
import { Link } from "react-router-dom"
import arrow from "../assets/arrow.png"

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-lg text-center text-sm font-poppins">
      {text}
    </p>
    <Link
      to={link}
      className="neo-brutalism-white neo-btn font-medium sm:text-base text-center text-xs font-poppins"
    >
      {btnText}
      <img src={arrow} className="w-6 h-6 object-contain" />
    </Link>
  </div>
)

const renderContent = {
  1: (
    <h1 className="sm:text-lg sm:leading-snug text-center neo-brutalism-blue sm:px-8 px-2 text-white sm:mx-5 mx-14 font-poppins text-sm">
      Hi! I'm Pavlo - a JavaScript developer from Ukraine.
      <br />
      <br />
      Support Ukraine against Russian Aggression. You can help Ukrainian
      volunteers.
      <br />
      Click{" "}
      <a
        href="https://standwithukraine.com.ua/"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer text-red-500 font-bold"
      >
        #Stand with Ukraine
      </a>{" "}
      to find an organization and help stop the evil.
    </h1>
  ),
  2: (
    <InfoBox
      text="React developer with automotive industrial engineering expierence background"
      link="/about"
      btnText="About me"
    />
  ),
  4: (
    <InfoBox
      text="Better engineering solutions for projects"
      link="/projects"
      btnText="My portfolio"
    />
  ),
  3: (
    <InfoBox
      text="Get in touch for cooperation"
      link="/contact"
      btnText="Contact"
    />
  ),
}

function HomeInfo({ currentStage, setStartInfo }) {
  useEffect(() => {
    setStartInfo(false)
  }, []) // Запустити ефект тільки після першого рендерингу

  return renderContent[currentStage] || null
}

export default HomeInfo
