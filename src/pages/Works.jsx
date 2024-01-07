import { projects } from "../constants"
import { Link } from "react-router-dom"

function Works() {
  return (
    <div className="bg-[url('./assets/bg-contact.jpg')] bg-cover scroll-behavior: smooth">
      <section className="max-container-about font-poppins">
        <h1 className="head-text ml-2">My works</h1>
        <div>
          <p className="mt-5 flex flex-col gap-3 text-blue-100 ml-2">
            Embarking on my journey as a junior React.js developer has been an
            exciting adventure filled with learning and growth. Here are some of
            the projects that mark key milestones in my development:
          </p>
        </div>

        <div className="flex flex-wrap my-20 gap-20 sm:my-40 sm:gap-40">
          {projects.map((project) => (
            <div
              className="w-full flex sm:flex-row flex-col justify-center items-center"
              key={project.name}
            >
              <div className="sm:w-1/2 w-full flex justify-center items-center">
                <div className="block-container sm:w-60 sm:h-60 w-40 h-40">
                  <div className={`btn-back rounded-xl ${project.theme}`} />
                  <div className="btn-front rounded-xl flex justify-center items-center">
                    <Link
                      to={project.link}
                      rel="noopener noreferrer"
                      className="flex justify-center items-center"
                      target="_blanc"
                    >
                      <img
                        src={project.iconUrl}
                        alt="Project Icon"
                        className="w-[95%] h-[90%] object-contain rounded-xl shadow-xl"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:w-1/2 w-full justify-center items-center z-10">
                <h4 className="text-blue-100 text-lg mt-6">{project.name}</h4>
                <p className="text-blue-100 text-sm mt-6 text-center">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <p className="mt-5 flex flex-col gap-3 text-blue-100 ml-2">
            As I continue to grow and refine my skills, I am eager to contribute
            to impactful projects and collaborate with like-minded developers.
            If you have any questions or insights, please don't hesitate to
            reach out.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Works
