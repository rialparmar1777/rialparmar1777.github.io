import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

export const Projects = () => {

  const projects= [
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
      title: "Q-Game",
      description: "C# - Game developing",
      imgUrl: projImg3,
    },
    {
      title: "Blood Pressure Measurement Web",
      description: ".NET Project",
      imgUrl: projImg1,
    },
    {
      title: "Chat Application",
      description: "Java - Firebase Backend",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.{" "}
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav variant="pills"  className="nav-pills mb-5 justify-content-centre align-items-center" id="pills-tab">
              <Nav.Item>
                <Nav.Link eventKey="first">Tab One</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab Two</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">
                  Tab Three
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Row>
                  {
                    projects.map((project, index) => {
                      return (
                        <ProjectCard
                        key={index}
                        {...project}
                        />
                      )
                    })
                  }
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
              <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
            </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
