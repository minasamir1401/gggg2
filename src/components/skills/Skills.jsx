import React from "react";
import "./Skills.css";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaFigma, FaBootstrap, FaGithub, FaSearch } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiFramer, SiSass } from "react-icons/si";

const SkillsData = [
  {
    id: 1,
    icon: <FaReact color="#61DAFB" size={40} />,
    title: "React.js",
    disc: "Modern SPAs",
  },
  {
    id: 2,
    icon: <SiNextdotjs color="#ffffff" size={40} />,
    title: "Next.js",
    disc: "SSR & SEO",
  },
  {
    id: 3,
    icon: <FaJs color="#F7DF1E" size={40} />,
    title: "JavaScript",
    disc: "ES6+ Logic",
  },
  {
    id: 4,
    icon: <SiTypescript color="#3178C6" size={40} />,
    title: "TypeScript",
    disc: "Type Safety",
  },
  {
    id: 5,
    icon: <SiTailwindcss color="#38B2AC" size={40} />,
    title: "Tailwind CSS",
    disc: "Utility-First",
  },
  {
    id: 6,
    icon: <FaBootstrap color="#7952B3" size={40} />,
    title: "Bootstrap",
    disc: "Rapid Layouts",
  },
  {
    id: 7,
    icon: <FaHtml5 color="#E34F26" size={40} />,
    title: "HTML5 & CSS3",
    disc: "Semantic & Responsive",
  },
  {
    id: 8,
    icon: <FaSearch color="#40B5A4" size={40} />,
    title: "SEO & Performance",
    disc: "Search Optimization",
  },
  {
    id: 9,
    icon: <SiFramer color="#ffffff" size={40} />,
    title: "Framer Motion",
    disc: "Advanced Animations",
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="top_section">
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
      </div>

      <div className="container container_skills">
        {SkillsData.map(({ id, icon, title, disc }) => {
          return (
            <article key={id} className="card_skills" id={`skill-card-${id}`}>
              <div className="icon">
                {icon}
              </div>

              <div className="content">
                <h4>{title}</h4>
                <p className="text-light">{disc}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
