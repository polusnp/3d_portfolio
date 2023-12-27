import { skills } from "../constants"

function About() {
  return (
    <section className="max-container-about font-poppins">
      <h1 className="head-text ">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow-sm">
          Pavlo Nahurnyi
        </span>
      </h1>
      <div>
        <p className="mt-5 flex flex-col gap-3 text-blue-100">
          React Developer from Ukraine with an industrial engineering background
          in the automotive industry.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-16 h-16">
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
