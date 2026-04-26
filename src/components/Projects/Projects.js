import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { data } from "../../json_file";

function Projects() {
  // console.log(data.length);
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="heading-name" style={{ textTransform: "uppercase", letterSpacing: "1px" }}>
          [ <strong className="purple">SCHEMATIC.ARCHIVE </strong> ]
        </h1>
        <p style={{ color: "var(--border-color)", fontFamily: "monospace", marginTop: "10px" }}>
          // INDEX OF DEPLOYED SYSTEMS AND STRUCTURAL DESIGNS
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {data
            .sort((a, b) => b.id - a.id)
            .map(
              ({
                id,
                imgPath,
                isBlog,
                title,
                desc,
                ghlink,
                demoLink,
                tech,
              }) => {
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
