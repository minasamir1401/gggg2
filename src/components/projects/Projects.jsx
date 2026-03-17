import React from "react";
import "./projects.css";


const portfolioData = [
  {
    id: 1,
    image: "https://l.top4top.io/p_3715lwcil1.jpg",
    title: "E-Commerce",
    github: "https://github.com/minasamir1401/blue-ecommerce-main.git",
    demo: "https://minasamir1401.github.io/blue-ecommerce-main/",
  },
  {
    id: 2,
    image: 'https://f.top4top.io/p_3715iwmpc1.jpg',
    title: "Portfolio",
    github: "https://github.com/minasamir1401/my-vite-portfolio",
    demo: "https://minasamir1401.github.io/my-vite-portfolio/",
  },
  {
    id: 3,
    image: "https://a.top4top.io/p_3715dyakc2.jpg",
    title: "Food-Lover",
    github: "https://github.com/minasamir1401/Food-Lover-main",
    demo: "https://minasamir1401.github.io/Food-Lover-main/",
  },
  {
    id: 4,
    image: "https://d.top4top.io/p_3715huivz1.jpeg",
    title: "Dar Al-Kalima (Educational Platform & Dashboard)",
    github: "https://github.com/minasamir1401/Dar-al-Kalima-backend",
    demo: "https://dar-al-kalima.vercel.app/",
  },
  {
    id: 5,
    image: "https://e.top4top.io/p_3728oo7y51.jpg",
    title: "FrameLab AI (Free AI Image Generator)",
    github: "https://github.com/minasamir1401/Next.js-Dashboard-Project",
    demo: "https://frame-lab-psi.vercel.app/",
  },
  {
    id: 6,
    image: "https://f.top4top.io/p_3715vx7m21.jpg",
    title: "Read Up News (Real-time Global News)",
    github: "https://github.com/minasamir1401/Read-Up-News",
    demo: "https://read-up-news.web.app/",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="top_section">
        <h5>My Recent Work</h5>
        <h2>Projects</h2>
      </div>

      <div className="container projects_container">
        {portfolioData.map(({ id, image, title, github, demo }) => (
          <article key={id} className="portfolio_item">
            <div className="portfolio_item-img">
              <img src={image} alt={title} loading="lazy" />
            </div>

            <h3>{title}</h3>

            <div className="portfolio_item-btns">
              {github && github !== "#" && (
                <a href={github} target="_blank" rel="noreferrer" className="btn" id={`github-btn-${id}`}>
                  Github
                </a>
              )}
              {demo && demo !== "#" && (
                <a href={demo} target="_blank" rel="noreferrer" className="btn btn-primary" id={`demo-btn-${id}`}>
                  Live demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
