import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiMicrosoftteams,
  SiVercel,
  SiWindows,
  SiJupyter,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={3} className="tech-icons">
        <SiWindows />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiJupyter />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiMicrosoftteams />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiVercel />
      </Col>
    </Row>
  );
}

export default Toolstack;
