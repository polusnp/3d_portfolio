import {
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  //   mongodb,
  motion,
  //   three,
  mui,
  //   nextjs,
  nodejs,
  quote,
  ks,
  react,
  redux,
  sass,
  tailwindcss,
  typescript,
  fcc,
  softserve,
} from "../assets/icons"

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  //   {
  //     imageUrl: mongodb,
  //     name: "MongoDB",
  //     type: "Database",
  //   },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  //   {
  //     imageUrl: three,
  //     name: "Three.js",
  //     type: "Animation",
  //   },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  //   {
  //     imageUrl: nextjs,
  //     name: "Next.js",
  //     type: "Frontend",
  //   },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
]

export const experiences = [
  {
    id: 1,

    title: "Process engineer",
    company_name: "Kromberg & Schubert Ukraine",
    icon: ks,
    iconBg: "#a855f7",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    id: 2,

    title: "Web Dev student",
    company_name: "freeCodeCamp",
    icon: fcc,
    iconBg: "#4b5563",
    date: "Feb 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    id: 3,

    title: "Practical React student",
    company_name: "SoftServe",
    icon: softserve,
    iconBg: "#a2d2ff",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
]

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
]

export const projects = [
  {
    iconUrl: quote,
    theme: "btn-back-red",
    name: "Quote Generator Machine",
    description:
      "In pursuit of my FreeCodeCamp certification, I developed a Quotes Generator Machine. This project allowed me to deepen my understanding of React components, state management, and API integration. It's not just a code exercise; it's a testament to my commitment to mastering React for real-world applications.",
    link: "https://github.com/polusnp/random-quote-machine.git",
  },
  {
    iconUrl: quote,
    theme: "btn-back-green",
    name: "Drum Machine",
    description:
      "As part of the FreeCodeCamp curriculum, I created a Drum Machine that demonstrates my proficiency in handling user interactions and events in React. This project enabled me to delve into responsive design and create an engaging user experience.",
    link: "https://github.com/adrianhajdin/threads",
  },

  {
    iconUrl: quote,
    theme: "btn-back-pink",
    name: "Pomodoro Timer",
    description:
      "To enhance my skills in stateful applications, I developed a Pomodoro Timer. This project challenged me to implement countdown functionality, session management, and an intuitive user interface. It reflects my dedication to creating practical tools that improve productivity.",
    link: "https://github.com/adrianhajdin/social_media_app",
  },
]
