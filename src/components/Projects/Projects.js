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
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {data.map(
            ({ id, imgPath, isBlog, title, desc, ghlink, demoLink }) => {
              return (
                <Col md={4} className="project-card">
                  <ProjectCard
                    imgPath={imgPath}
                    isBlog={isBlog}
                    title={title}
                    description={desc}
                    ghLink={ghlink}
                    demoLink={demoLink}
                    key={id}
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
