import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import {
  FaNodeJs,
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3,
  FaAndroid,
} from "react-icons/fa";
import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiPug,
  SiR,
  SiRedux,
  SiSass,
  SiStyledcomponents,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiDotnet,
  SiAngular
} from "react-icons/si";

function ProjectCards(props) {
  const renderIcons = (tech) => {
    switch (tech) {
      // Inside your renderIcons function switch statement:

      case "dotnet-angular":
        return (
          <>
            <SiDotnet color="#512BD4" size={30} /> {/* .NET Purple */}
            <SiAngular color="#DD0031" size={30} /> {/* Angular Red */}
            <SiTypescript color="#3178C6" size={30} /> {/* TypeScript Blue */}
            <SiTailwindcss color="#06B6D4" size={30} />
          </>
        );

      case "nextjs":
        return (
          <>
            <SiNextdotjs color="#FFFFFF" size={30} />{" "}
            {/* Next.js is typically black */}
            <FaReact color="#61DAFB" size={30} /> {/* React's iconic blue */}
            <SiMongodb color="#47A248" size={30} /> {/* MongoDB's green */}
            <SiTypescript color="#3178C6" size={30} /> {/* TypeScript's blue */}
            <SiTailwindcss color="#06B6D4" size={30} />
            {/* Tailwind CSS's teal/cyan */}
          </>
        );
      case "nodejs":
        return (
          <>
            <FaNodeJs color="#68A063" size={30} />
            <SiMongodb color="#4DB33D" size={30} />
            <SiExpress color="#FFFFFF" size={30} />
            <SiPug color="#A86454" size={30} />
          </>
        );
      case "js":
        return (
          <>
            <SiJavascript color="#F7DF1E" size={30} />
            <FaHtml5 color="#E34F26" size={30} />
            <FaCss3 color="#1572B6" size={30} />
          </>
        );
      case "html-css":
        return (
          <>
            <FaHtml5 color="#E34F26" size={30} />
            <FaCss3 color="#1572B6" size={30} />
          </>
        );
      case "react":
        return <FaReact color="#61DAFB" size={30} />;
      case "react-native":
        return (
          <>
            <FaReact color="#61DAFB" size={30} />
            <FaAndroid color="#3DDC84" size={30} />
          </>
        );
      case "react-sass":
        return (
          <>
            <FaReact color="#61DAFB" size={30} />
            <SiSass color="#CC6699" size={30} />
          </>
        );
      case "react-redux-styled":
        return (
          <>
            <FaReact color="#61DAFB" size={30} />
            <SiRedux color="#764ABC" size={30} />
            <SiStyledcomponents color="#DB7093" size={30} />
          </>
        );
      case "react-styled":
        return (
          <>
            <FaReact color="#61DAFB" size={30} />
            <SiStyledcomponents color="#DB7093" size={30} />
          </>
        );
      case "python":
        return <FaPython color="#3776AB" size={30} />;
      case "R":
        return <SiR color="#276DC3" size={30} />;
      default:
        return null;
    }
  };

  return (
    <Card className="project-card-view h-100 d-flex flex-column">
      <Card.Img
        className="custom-card-img"
        variant="top"
        src={props.imgPath}
        alt="card-img"
      />
      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-center gap-3 pb-4">
          {renderIcons(props.tech)}
        </div>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>
          {props.description}
        </Card.Text>
        <div className="mt-auto">
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;{"GitHub"}
          </Button>
          {props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;{"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
