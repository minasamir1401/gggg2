import React from "react";
import "./services.css";
import { MdDesignServices } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { FaCode, FaRobot, FaServer } from "react-icons/fa";

function Services() {
  return (
    <search className="services" id="services">
      <div className="top_section">
        <h5>What I Offer</h5>
        <h2>Services</h2>
      </div>
      <div className="container services_container">
        
        <article className="card">
          <FaCode className="icon"/>
          <h3>UI/UX Development</h3>
          <p className="text-light">
            I craft visually stunning and highly interactive user interfaces using modern frameworks like React and Next.js, ensuring a premium look and feel.
          </p>
        </article>

        <article className="card">
          <IoIosRocket className="icon"/>
          <h3>Performance Optimization</h3>
          <p className="text-light">
            Optimizing web applications for lightning-fast load times, SEO excellence, and smooth animations to provide the best possible user experience.
          </p>
        </article>

        <article className="card">
          <MdDesignServices className="icon"/>
          <h3>Responsive Web Design</h3>
          <p className="text-light">
            Ensuring your application looks and functions perfectly across all devices, from mobile phones to high-resolution desktop screens.
          </p>
        </article>

      </div>
    </search>
  );
}

export default Services;
