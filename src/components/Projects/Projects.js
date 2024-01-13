import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import suscide from "../../Assets/Projects/suicide.png";
import capture from "../../Assets/Projects/Capture.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Project<strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on 2019 -2024.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="MCA COLLAGE PREDICTOR "
              description="
              MCA COLLAGE PREDICTOR - RANK VS COLLAGE(NEW)."
              ghLink="https://github.com/OMGUPTA21/Predictor_MCA"
              demoLink="https://predictormca.000webhostapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="MINTRA"
              description="Mintra clone is a clone of mintra a ecommerce site."
              ghLink="https://github.com/OMGUPTA21/MINTRA"
              demoLink="https://omgupta21.github.io/MINTRA/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Miki-layer"
              description="Music Player - For Motivation and problem situtation dose with music."
              ghLink="https://github.com/OMGUPTA21/Miki-layer"
              demoLink="https://omgupta21.github.io/Miki-layer/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="ONLINE-FOOD-SERVICE"
              description="ONLINE FOOD DELIVERY WEBSITE (STATIC APP)."
              ghLink="https://github.com/OMGUPTA21/ONLINE-FOOD-SERVICE"
              demoLink="https://omgupta21.github.io/ONLINE-FOOD-SERVICE/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suscide}
              isBlog={false}
              title="Jeca Institute"
              description="Jeca Institute Online Coaching WEBSITE (STATIC APP)."
              ghLink="https://github.com/OMGUPTA21/Jeca-Institute"
              demoLink="https://omgupta21.github.io/Jeca-Institute/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={capture}
              isBlog={false}
              title="MY PROFILE SITE"
              description="About My Resume Website..."
              ghLink="https://github.com/OMGUPTA21/omprofile"
              demoLink="https://omgupta21.github.io/omprofile/"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
