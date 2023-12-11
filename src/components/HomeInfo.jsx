import { Link } from "react-router-dom"
import arrow from "../assets/arrow.png"

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-6 h-6 object-contain" />
    </Link>
  </div>
)

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue px-8 text-white mx-5">
      Welcome to my universe. I'm Pavlo - JavaScript developer from Ukraine.
      <br />
      Spin to learn more ...
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
        className="cursor-pointer text-red-600 font-bold"
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
  3: (
    <InfoBox
      text="Better engineering solutions for projects"
      link="/projects"
      btnText="My portfolio"
    />
  ),
  4: (
    <InfoBox
      text="React developer with automotive industrial engineering expierence background"
      link="/about"
      btnText="About me"
    />
  ),
}

function HomeInfo({ currentStage }) {
  return renderContent[currentStage] || null
}

export default HomeInfo
