import React from "react";
import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";
import SixG from "../../assets/SixG Cafe.png"
import orderMe from "../../assets/Order Me.png"
import TVPSS from "../../assets/TVPSS.png"
import ChaTEA from "../../assets/ChaTEAA.png"

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={orderMe}
          title="Order Me"
          description="Campus Food Delivery Application"
          href="https://github.com/Yawrrr/Order-Me"
        />
        <ProjectCard
          src={TVPSS}
          title="TVPSSHub"
          description={"Regional Educational\nResource Management Platform"}
          href="https://github.com/JingZheee/TVPSSHub"
        />
        <ProjectCard
          src={SixG}
          title="SixG Cafe"
          description="Cafe Ordering System"
          href="https://github.com/Yawrrr/Food-Ordering-System"
        />
        <ProjectCard
          src={ChaTEA}
          title="ChaTEAA"
          description="Order Summary Tracker"
          href="https://github.com/Yawrrr/ChaTEAA"
        />
      </div>
    </section>
  );
}

export default Projects;
