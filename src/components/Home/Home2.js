import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineWhatsApp, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <div className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              STRUCTURAL <span className="purple"> ANALYSIS </span> & DEVELOPMENT
            </h1>
            <p className="home-about-body" style={{ fontFamily: "monospace" }}>
              A multi-disciplinary engineer turned software developer. My foundation is built on heavy industry computation and precision problem solving.
              <br />
              <br />
              <span className="purple" style={{ fontWeight: "700" }}>[ EXPERIENCE.MATRIX ]</span>
              <br />
              <br />
              &raquo; <b>Aerospace FEA</b> // 3 Years - Finite Element Analysis for critical flight structures.<br />
              &raquo; <b>Civil Infrastructure</b> // 3+ Years - Data analyst structuring massive infrastructural metrics.<br />
              &raquo; <b>Oil & Gas Engineering</b> // 2 Years - Process optimization & structural integrity.<br />
              &raquo; <b>MEP Design</b> // 1 Year - Mechanical, electrical, and plumbing architecture.<br />
              <br />
              <br />
              <span className="purple" style={{ fontWeight: "700" }}>[ CURRENT.TRAJECTORY ]</span>
              <br />
              <br />
              I now apply this same technical rigor to engineer and deploy
              <b className="purple"> full-stack applications </b>
              using
              <i>
                <b className="purple"> .NET Core, Angular, React, and Node.js </b>
              </i>. I treat software architecture exactly like physical infrastructure: keeping solutions
              <b className="purple"> robust, exact, and highly scalable</b>.
            </p>

          </div>

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
