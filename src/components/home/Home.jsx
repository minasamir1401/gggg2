import React from 'react'
import './Home.css'
import me from '../../assets/me.png'
import CV from '../../assets/cv.pdf'
import HomeSocials from './HomeSocials'
import SEO from '../seo/SEO'
import { FaReact, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa'

function Home() {
  return (
    <>
      <SEO 
        title="Mina Samir | Front-end Developer"
        description="Welcome to my portfolio. I am a Front-end Developer specializing in React, modern UI/UX, and building high-performance web applications."
      />
      <section className='home' id='home'>
        <div className="container home-container">
          
          <div className="home-content">
            <div className="greeting">
              <span className="badge">Welcome to my universe</span>
            </div>
            <h1>Hi, I'm <span className="highlight">Mina Samir</span></h1>
            <h2 className="role">Front-end Developer</h2>
            <p className="description">
              I build scalable, modern web applications with a focus on high-performance, responsive designs and exceptional user experiences.
            </p>
            
            <div className="btns">
              <a className="btn" id="download-cv-btn" download="Mina Samir CV.pdf" href={CV}>Download CV</a>
              <a className="btn btn-primary" id="lets-talk-btn" href="#contact">Let's talk</a>
            </div>

            <HomeSocials />

            <div className="tech-stack">
              <span>Tech Stack</span>
              <div className="tech-icons">
                <FaReact className="tech-icon react" title="React" />
                <FaJs className="tech-icon js" title="JavaScript" />
                <FaHtml5 className="tech-icon html" title="HTML5" />
                <FaCss3Alt className="tech-icon css" title="CSS3" />
              </div>
            </div>
          </div>

          <div className="home-image-wrapper">
            <div className="me-modern">
               <div className="glow-ring"></div>
               <img src={me} alt="مينا سمير مبرمج واجهات أمامية - Mina Samir Front-end Web Developer" title="مينا سمير مبرمج - Mina Samir" loading="lazy" />
            </div>
          </div>
          
        </div>
        
        <a href="#about" className='scroll-down' id="scroll-down-link">Scroll Down</a>
      </section>
    </>
  )
}

export default Home