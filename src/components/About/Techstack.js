import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
} from "react-icons/di";
import { SiSass, SiPandas, SiNumpy, SiStyledcomponents } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={3} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiSass />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiPandas />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiNumpy />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiStyledcomponents />
      </Col>
    </Row>
  );
}

export default Techstack;
