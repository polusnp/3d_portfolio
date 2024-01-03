import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import CTA from "../components/CTA"

import { skills, experiences } from "../constants"

function About() {
  return (
    <div className="bg-[url('./assets/bg-contact.jpg')] bg-cover scroll-behavior: smooth">
      <section className="max-container-about font-poppins">
        <h1 className="head-text ml-2">Hello, I'm Pavlo Nahurnyi</h1>
        <div>
          <p className="mt-5 flex flex-col gap-3 text-blue-100 ml-2">
            React Developer from Ukraine with an industrial engineering
            background in the automotive industry. Advanced problem-solving
            skills directed towards achieving strategic goals.
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
          <div className="mt-12 flex ml-2">
            <VerticalTimeline>
              {experiences.map((expierence) => (
                <VerticalTimelineElement
                  key={expierence.id}
                  date={
                    <div className="text-white px-4">{expierence.date}</div>
                  }
                  icon={
                    <div className="flex justify-center items-center w-full h-full">
                      <img
                        src={expierence.icon}
                        alt={expierence.company_name}
                        className="w-[60%] h-[60%] object-contain"
                      />
                    </div>
                  }
                  iconStyle={{ background: expierence.iconBg }}
                  contentStyle={{
                    borderBottom: "8px",
                    borderStyle: "solid",
                    borderBottomColor: expierence.iconBg,
                    boxShadow: "none",
                  }}
                >
                  <div>
                    <h3 className="text-black text-xl font-poppins">
                      {expierence.title}
                    </h3>
                    <p
                      className="text-black-500 font-medium font-base"
                      style={{ margin: 0 }}
                    >
                      {expierence.company_name}
                    </p>
                  </div>
                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {expierence.points.map((point, index) => (
                      <li
                        key={expierence.points[index]}
                        className="text-black-500-/50 font-normal pl-1 text-sm"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
        <hr className="border-pink-600" />
        <CTA />
      </section>
    </div>
  )
}

export default About
