import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.jpg";
import projImg4 from "../assets/img/project-img4.jpg";
import projImg5 from "../assets/img/project-img5.jpg";
import projImg6 from "../assets/img/project-img6.jpg";
import projImg7 from "../assets/img/project-img7.jpg"; 

import './Projects.css'; 

export const Projects = () => {
  const projectsTabOne = [
    {
      title: "Google Alexa",
      description: "Python Project",
      imgUrl: projImg1,
    },
    {
      title: "Movie-Booking Website",
      description: "React JS",
      imgUrl: projImg2,
    },
    {
      title: "Puzzle Block Game",
      description: "C# - Game developing",
      imgUrl: projImg3,
    },
    {
      title: "Blood Pressure Measurement Web",
      description: ".NET Project",
      imgUrl: projImg4,
    },
    {
      title: "Chat Application",
      description: "Java - Firebase Backend",
      imgUrl: projImg5,
    },
    {
      title: "Church Website",
      description: "Front-End React.js",
      imgUrl: projImg6,
    },
  ];

  const projectsTabTwo = [
    {
      title: "Q-Game",
      description: "C# - Game developing",
      imgUrl: projImg7,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Explore a selection of my recent projects, showcasing my skills in
              web development, design, and problem-solving. Each project
              highlights my ability to create functional and visually appealing
              solutions tailored to meet specific needs.
            </p>

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projectsTabOne.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projectsTabTwo.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};
