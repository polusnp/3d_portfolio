import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

import { skills, experiences } from "../constants"

function About() {
  return (
    <div className="bg-[url('./assets/bg-contact.jpg')] bg-cover">
      <section className="max-container-about font-poppins">
        <h1 className="head-text ml-2">
          Hello, I'm{" "}
          <span className="blue-gradient_text font-semibold drop-shadow-sm">
            Pavlo Nahurnyi
          </span>
        </h1>
        <div>
          <p className="mt-5 flex flex-col gap-3 text-blue-100 ml-2">
            React Developer from Ukraine with an industrial engineering
            background in the automotive industry. <br /> <br />
            Advanced problem-solving skills directed towards achieving strategic
            goals. <br /> <br />
            Enthusiastic about transitioning from a seasoned Industrial Engineer
            to a skilled Developer. Eagerly pursuing opportunities to apply
            programming skills and contribute to innovative projects in a
            developer role.
          </p>
        </div>

        <div className="py-10 flex flex-col">
          <h3 className="subhead-text ml-2">My skills</h3>
          <div className="mt-16 flex flex-wrap gap-12 ml-4">
            {skills.map((skill) => (
              <div key={skill.name} className="block-container w-16 h-16">
                <div className="btn-back rounded-xl" />
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
        <div className="py-16">
          <h3 className="subhead-text ml-2">Work expierence</h3>
          <div>
            <p className="mt-5 flex flex-col gap-3 text-blue-100 ml-2">
              Adept at optimizing manufacturing processes, ensuring efficiency,
              and enhancing productivity. Successfully managed projects for the
              implementation of new technologies and improvements in the
              production chain. <br /> <br />
              Currently undergoing a significant career shift with a focus on
              mastering JavaScript (React). Here is the rundown:
            </p>
          </div>
          <div className="mt-12 flex">
            <VerticalTimeline>
              {experiences.map((expierence) => (
                <VerticalTimelineElement key={expierence.company_name}>
                  <div>
                    <h3>{expierence.title}</h3>
                  </div>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
