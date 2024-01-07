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
  todo,
  drum,
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
    date: "Jun 2009 - present",
    points: [
      "Workplace and process optimisation, working time measurement.",
      "Supply of production.",
      "Processing of current and scheduled changes to working documents.",
      "Implementation of lean production.",
      "Project management.",
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
      "Responsive web design.",
      "JavaScripts algorithms and data structures.",
      "Front End development libraries (BootStrap, JQuery, SASS, React).",
    ],
  },
  {
    id: 3,

    title: "Practical React student",
    company_name: "SoftServe Academy",
    icon: softserve,
    iconBg: "#a2d2ff",
    date: "Jan 2023 - Present",
    points: [
      "Create React App. JSX, Styles",
      "JS for React (pure functions, destructurization, map, spread",
      "React - Key, State, Props, Events",
      "OOP in JS",
      "React - Lifecycle & Binding Event Handlers",
      "Advanced JS (Asynchronous JS, Closures, Exceptions)",
      "React Virtual DOM, Hooks (useState, useEffect)",
      "Storage(local/session), Web workers, Service workers, Web socket",
      "Composition, Context (useContext, useCallback Hook)",
      "React State Management",
      "Redux in React/ Redux Toolkit",
      "Tools (npm, linter, babel, webpack)",
      "React Router",
      "Node, Fetch, Axios",
      "Refs, Higher-Order Component, DefaultProps",
      "Tests (Jest, react-testing-library as main)",
      "MUI for React",
      "Error Handling in React (Error Boundaries), creating custom Hooks",
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
    link: "https://quotesmachine.netlify.app/",
    iconUrl: quote,
    theme: "btn-back-red",
    name: "Quote Generator Machine",
    description:
      "In pursuit of my FreeCodeCamp certification, I developed a Quotes Generator Machine. This project allowed me to deepen my understanding of React components, state management, and API integration. It's not just a code exercise; it's a testament to my commitment to mastering React for real-world applications.",
    linkGit: "https://github.com/polusnp/random-quote-machine.git",
  },
  {
    link: "https://drum-muchine.netlify.app/",
    iconUrl: drum,
    theme: "btn-back-green",
    name: "Drum Machine",
    description:
      "As part of the FreeCodeCamp curriculum, I created a Drum Machine that demonstrates my proficiency in handling user interactions and events in React. This project enabled me to delve into responsive design and create an engaging user experience.",
    linkGit: "https://github.com/polusnp/drum-machine.git",
  },

  {
    link: "https://todo-polusnp.netlify.app/",
    iconUrl: todo,
    theme: "btn-back-pink",
    name: "ToDo List",
    description:
      "I designed and implemented a ToDo List application to delve into the essentials of task management using React. This project provided hands-on experience with state manipulation, form handling, and basic CRUD operations. It showcases my commitment to creating simple yet effective solutions.",
    linkGit: "https://github.com/polusnp/todolist.git",
  },
]

export const highlight = [
  { id: 1, skill: "React fundamentals, JSX, and styling" },
  {
    id: 2,
    skill:
      "Strong JavaScript foundation (pure functions, destructuring, mapping)",
  },
  {
    id: 3,
    skill: "Proficient in React concepts (State, Props, Events, Hooks)",
  },
  { id: 4, skill: "Object-Oriented Programming (OOP) in JavaScript" },
  { id: 5, skill: "React lifecycle, event handling, and advanced JS concepts" },
  { id: 6, skill: "State management with Redux and Redux Toolkit" },
  { id: 7, skill: "Web technologies, storage, and service workers" },
  { id: 8, skill: "Composition, Context API, and React Router" },
  { id: 9, skill: "API integration (Node, Fetch, Axios)" },
  { id: 10, skill: "Testing with jest and react-testing-library" },
  {
    id: 11,
    skill: "Material-UI (MUI) for React and error handling strategies",
  },
]
