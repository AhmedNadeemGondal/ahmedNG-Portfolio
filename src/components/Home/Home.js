import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import Home2 from "./Home2";
import ProjectCard from "../Projects/ProjectCards";
import { data } from "../../json_file";

import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <section>
      <Container fluid className="home-section">
        <Container className="home-content">
          <h1 className="heading">
            [ SYSTEM.ONLINE ]
          </h1>
          <h1 className="heading-name">
            ENGINEER: <strong className="main-name">AHMED NADEEM</strong>
          </h1>
          <h3 className="heading-name mt-4">
            // RECENT DEPLOYMENTS & ARCHITECTURES
          </h3>
        </Container>
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {data
              .sort((a, b) => b.id - a.id)
              .slice(0, 3)
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
                }) => (
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
                )
              )}
          </Row>
        </Container>
        <Container className="text-center">
          <Button
            variant="primary"
            className="px-4 py-2 fs-5"
            onClick={() => navigate("/project")}
          >
            <AiOutlineFundProjectionScreen /> &nbsp;[ VIEW ALL SCHEMATICS ]
          </Button>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
