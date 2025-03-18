import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import ProjectCard from "../Projects/ProjectCards";
import { data } from "../../json_file";
import newHomeLogo from "../../Assets/home-main-4.svg";

import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
                I'M <strong className="main-name">AHMED NADEEM</strong>
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} className="text-center">
              <img
                src={newHomeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Container>
        <h1 className="project-heading">
          Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some recent projects I have worked on.
        </p>

        <Row className="justify-content-center pb-3">
          {data
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

        <div className="text-center">
          <Button
            variant="primary"
            style={{ padding: "10px", fontSize: "18px" }}
            onClick={() => navigate("/project")}
          >
            <AiOutlineFundProjectionScreen /> &nbsp;All Projects
          </Button>
        </div>
      </Container>

      <Home2 />
    </section>
  );
}

export default Home;
