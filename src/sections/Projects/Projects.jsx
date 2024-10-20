import React from "react";
import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import ProjectCard from "../../common/ProjectCard";
import freshBurger from "../../assets/fresh-burger.png"
import hipsster from "../../assets/hipsster.png"
import fitLift from "../../assets/fitlift.png"

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          title="Viberr"
          description="Streaming App"
          href="https://github.com/Ade-mir/company-landing-page-2"
        />
        <ProjectCard
          src={freshBurger}
          title="Fresh Burger"
          description="Hamburger Restaurant"
          href="https://github.com/Ade-mir/company-landing-page-2"
        />
        <ProjectCard
          src={hipsster}
          title="Hipsster"
          description="Glasses Shop"
          href="https://github.com/Ade-mir/company-landing-page-2"
        />
        <ProjectCard
          src={fitLift}
          title="FitLeft"
          description="Fitness App"
          href="https://github.com/Ade-mir/company-landing-page-2"
        />
      </div>
    </section>
  );
}

export default Projects;
