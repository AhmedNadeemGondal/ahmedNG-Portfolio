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
      <Container fluid className="project-section">
        <Container className="home-content">
          <h1 className="heading" style={{ letterSpacing: "2px" }}>
            [ SYSTEM.ONLINE ]
          </h1>
          <h1 className="heading-name" style={{ textTransform: "uppercase" }}>
            ENGINEER: <strong className="main-name">AHMED NADEEM</strong>
          </h1>
          <h3 className="heading-name" style={{ marginTop: "20px" }}>
            // RECENT DEPLOYMENTS & ARCHITECTURES
          </h3>
        </Container>
        <Row className="justify-content-center pb-3">
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
                <Col md={3} className="project-card" key={id}>
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
        <div className="text-center">
          <Button
            variant="primary"
            style={{ padding: "10px", fontSize: "18px" }}
            onClick={() => navigate("/project")}
          >
            <AiOutlineFundProjectionScreen /> &nbsp;[ VIEW ALL SCHEMATICS ]
          </Button>
        </div>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
