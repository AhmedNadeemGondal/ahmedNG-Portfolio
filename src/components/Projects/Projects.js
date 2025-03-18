import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { data } from "../../json_file";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          All <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are all the projects I have worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {data.map(
            ({ id, imgPath, isBlog, title, desc, ghlink, demoLink, tech }) => {
              return (
                <Col md={4} className="project-card" key={id}>
                  <ProjectCard
                    imgPath={imgPath}
                    isBlog={isBlog}
                    title={title}
                    description={desc}
                    ghLink={ghlink}
                    demoLink={demoLink}
                    tech={tech}
                  />
                </Col>
              );
            }
          )}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
