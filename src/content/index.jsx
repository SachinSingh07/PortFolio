import project1 from "../assets/projects/project1.png"; 
import project2 from "../assets/projects/project2.png";

export const HERO_CONTENT = `I am a passionate  Front-End developer with a knack for crafting robust and scalable web applications. With 2.5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as JavaScript, HTML, TailWind CSS, Redux. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Front-End developer with a passion for creating efficient and user-friendly web applications. With 2.5 years of professional experience, I have worked with a variety of technologies, including React, Redux, JavaScript, HTML, Tailwind CSS. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;
export const EDUCATIONS = [
  {
    year: '2017-2021',
    degree: 'B. Tech CSE',
    institution: 'Graphic Era Hill University',
    description: 'CGPA: 7.5',
    highlights: ['CGPA: 7.5'] // Additional highlights can be added if needed
  },
  {
    year: '2016-2017',
    degree: '12th',
    institution: 'Army Public School, Dehradun',
    description: 'Percentage: 70.00',
    highlights: ['Percentage: 70.00'] // Additional highlights can be added if needed
  },
  {
    year: '2014-2015',
    degree: '10th',
    institution: 'Army Public School, Dehradun',
    description: 'CGPA: 8.4',
    highlights: ['CGPA: 8.4'] // Additional highlights can be added if needed
  }
];
export const EXPERIENCES = [
  {
    year: "2023 - 2024",
    role: "Engineer",
    company: "L&T Technology Services",
    description: [
      "Developed dynamic and responsive web applications using HTML5, CSS3, JavaScript, and React.js, resulting in a significant increase in user engagement and satisfaction.",
      "Improved performance by creating and maintaining a comprehensive library of reusable code components, enhancing development efficiency by 30%.",
      "Implemented state management using Redux, ensuring efficient data flow and consistency across the application, which improved application performance by 15%.",
      "Optimized web application performance by identifying bottlenecks using React/Redux DevTools and implementing performance enhancement techniques, resulting in a notable decrease in load times.",
      "Implemented RESTful APIs for patient data CRUD operations, streamlining data handling and improving reliability.",
      "Adhered to Agile methodologies, participating in daily stand-ups, sprint planning, and retrospectives, ensuring timely delivery of features and improvements.",
    ],
    technologies: ["HTML", "Tailwind CSS", "React", "Redux", "JavaScript"],
  },
  {
    year: "2021 - 2023",
    role: "Associate Engineer",
    company: "L&T Technology Services",
    description: [
      "Upgraded from React 12 to 16.8 along with dependencies.",
      "Enhanced application performance and user satisfaction through strategic optimizations.",
      "Implemented responsive design for seamless compatibility across diverse devices.",
      "Optimized the application for speed and user experience across devices, reducing load times.",
      "Performed front-end debugging and resolution of glitches to ensure optimal performance of applications.",
    ],
    technologies: ["HTML", "Tailwind CSS", "React", "Redux", "JavaScript"],
  },
];


export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Portfolio Website",
    // Add a valid image import if available
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "Javascript", "React", "Tailwind"],
  },
  {
    title: "TextUtile",
    image: project2,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "React"],
  },
];

export const CONTACT = {
  address: "Bengaluru",
  phoneNo: "+91 875675273 ",
  email: "sachinsingh07091999@gmail.com",
  linkdin:"Sachin Singh",
  Github:"SachinSingh07"
};
