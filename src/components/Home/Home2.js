import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineWhatsApp, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              FROM <span className="purple"> ENGINEERING </span> TO CODE
            </h1>
            <p className="home-about-body">
              A mechanical engineer turned software developer, I build{" "}
              <b className="purple">scalable applications</b> with a focus on
              <b className="purple"> efficiency and optimization</b>.
              <br />
              <br />
              Fluent in
              <i>
                <b className="purple"> JavaScript and Python</b>
              </i>
              , I specialize in
              <b className="purple"> web technologies, product development </b>
              and <b className="purple"> data analysis</b>.
              <br />
              <br />
              Whether it's crafting
              <b className="purple"> full-stack apps </b>
              with
              <i>
                <b className="purple"> React.js and Node.js </b>
              </i>
              , optimizing workflows, or designing
              <b className="purple"> UI animations </b>, I keep things{" "}
              <b className="purple"> simple, functional, and scalable </b>. 🚀
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AhmedNadeemGondal"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://wa.me/03335581734"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineWhatsApp />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ahmed-nadeem-7a30a4111/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:ahmednadeemgondal92@gmail.com"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
