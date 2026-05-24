import project1 from "../assets/projects/project-1.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project_6.png";

export const HERO_CONTENT = `As a highly skilled and motivated Frontend React Developer, I specialize in building dynamic and responsive web applications using React.js. My expertise lies in translating design mockups into high-quality code and delivering seamless user experiences. I have a strong foundation in HTML, CSS, and JavaScript, with a deep understanding of modern front-end development practices and tools`;

export const ABOUT_TEXT = `As a web developer, my objective is to create user-friendly and efficient websites that are visually appealing and easy to navigate. I utilize my skills in HTML, CSS, JavaScript, and ReactJS to develop websites that meet all the requirements of the client `;

export const EDUCATION =[
  {
  School:"Till 10th",
  Name:"DAV PUBLIC SCHOOL",
  Year:"2018",
  Location:"KOTA, RAJASTHAN"
  },
  {
    School:"Till 12th",
    Name:"M.B. Public sr. sec. school ",
    Year:"2021",
    Location:"KOTA, RAJASTHAN"
  },
  {
      School:"Btech(CSE)",
      Name:"Galgotias University",
      Year:"2021-2025",
      Location:"Greater noida, Uttar Pradesh"
  },
];

export const CERTIFICATES = [
  {
    year: "January 2nd 2023",
    course: "HTML Web Development Course",
    company: "Infosys Springboard",
    description: `In this course, I learned the essentials of HTML, including tags, elements, and attributes used to structure and format web content. Through practical exercises, I gained hands-on experience in creating and editing web pages, laying a solid foundation for building websites effectively.`,
    
  },
  {
    year: "March 3rd 2023",
    course: "The Complete Web Developer Course 2.0",
    company: "Infosys Springboard",
    description: `Mastered web development fundamentals by learning HTML for structure, CSS for styling, and JavaScript for interactivity. Gained practical experience through hands-on projects and problem-solving exercises.`,
    
  },
  {
    year: "July 1st 2024",
    course: "React Js and Redux Certification",
    company: "KG-Coding",
    description: `In this course, I learned the fundamentals of React, focusing on components, props, state management, hooks, and lifecycle methods. Additionally, I delved into Redux for centralized state management, using actions, reducers, and the store. Through hands-on projects, I gained practical experience in building dynamic and scalable web applications with React and Redux.`,
    
  },];

export const PROJECTS = [
 {
    title: "CivicFix Portal",
    image: project6,
    description: "A full-stack governance portal designed to streamline municipal complaint management. It features distinct interfaces for citizens to report community issues and moderators to validate and track resolutions in real-time.",
  features: [
    "Secure authentication with role-based access control.",
    "Interactive dashboard tracking live status updates.",
    "Mobile-optimized responsive tables for data management."
  ],
  technologies: ["React.js", "Tailwind CSS", "Framer Motion", "Supabase", "PostgreSQL"],
  liveLink: "https://civicfix-portal.vercel.app/",
  githubLink: "https://github.com/mohitsingh13/civicfix-portal"
  },

  
  {
  title: "Portfolio Website",
  image: project3, 
  description: "My personal developer portfolio built to showcase my projects, frontend skills, and animation work in a clean, modern way.",
  features: [
    "Built a fully responsive layout from scratch that looks great on mobile, tablets, and desktops.",
    "Added smooth scroll animations and clean hover effects using Framer Motion to make the UI feel alive.",
    "Cleaned up the code by storing all text, skills, and project info in a single data file for easy updates.",
    "Bundled and optimized the entire project with Vite for instant loading speeds."
  ],
  technologies: ["React.js", "Tailwind CSS", "Framer Motion", "Vite"], 
  githubLink: "https://github.com/mohitsingh13/Portfolio_website" 
},

  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["React.js", "Tailwind CSS", "Framer Motion", "Vite"],
    githubLink:"https://github.com/mohitsingh13/Moto-Marvels-Website"
  },
  
  
  {
    title: "Todo App",
    image: project4,
    description:
      "A to-do list app with multiple list options allows you to store all of these to-dos in one place. ",
    technologies: ["HTML", "CSS", "javascript" , "React.js", "Bootstrap"]
  },
  {
    title: "Tic Tac Toe",
    image: project5,
    description:
      "It is a tic tac toe gaming using HTML, CSS, JavaScript. IT also give Congratulation message after winning",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const CONTACT = {
  address: "Rajasthan, India ",
  phoneNo: "+91 7976509162 ",
  email: "www.mohit1320singh@gmail.com",
};
