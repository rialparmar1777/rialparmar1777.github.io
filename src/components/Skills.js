import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Skills.css'; 

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2 className="skill-heading">Skills</h2>
                            <p className="skill-description">My proficiency extends to various web technologies, including but not limited to React, Node.js, and database management.</p>
                            <div className="carousel-container">
                                <Carousel responsive={responsive} infinite={true} className="skill-slider top-row">
                                    <div className="item">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML" className="skill-img" />
                                        <h5>HTML</h5>
                                    </div>
                                    <div className="item">
                                        <img src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg" alt="CSS" className="skill-img" />
                                        <h5>CSS</h5>
                                    </div>
                                    <div className="item">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="JavaScript" className="skill-img" />
                                        <h5>JavaScript</h5>
                                    </div>
                                    <div className="item">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg" alt="React" className="skill-img" />
                                        <h5>React</h5>
                                    </div>
                                    <div className="item">
                                        <img src="https://www.vectorlogo.zone/logos/cnet/cnet-icon.svg" alt="C#" className="skill-img" />
                                        <h5>C#</h5>
                                    </div>
                                    <div className="item">
                                        <img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" alt="Node JS" className="skill-img" />
                                        <h5>Node JS</h5>
                                    </div>
                                    <div className="item">
                                        <img src="https://www.vectorlogo.zone/logos/mysql/mysql-official.svg" alt="MySQL" className="skill-img" />
                                        <h5>MySQL</h5>
                                    </div>
                                    <div className="item">
                                        <img src="https://www.vectorlogo.zone/logos/python/python-icon.svg" alt="Python" className="skill-img" />
                                        <h5>Python</h5>
                                    </div>
                                </Carousel>
                                <Carousel responsive={responsive} infinite={true} className="skill-slider bottom-row">
                                    <div className="item">
                                        <img src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" alt="MongoDB" className="skill-img" />
                                        <h5>MongoDB</h5>
                                    </div>
                                    <div className="item">
                                        <img src="https://www.vectorlogo.zone/logos/java/java-icon.svg" alt="Java" className="skill-img" />
                                        <h5>Java</h5>
                                    </div>
                                    <div className="item">
                                        <img src="https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg" alt="Bootstrap" className="skill-img" />
                                        <h5>Bootstrap</h5>
                                    </div>
                                    <div className="item">
                                        <img src="https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg" alt="Next JS" className="skill-img" />
                                        <h5>Next JS</h5>
                                    </div>
                                    <div className="item">
                                        <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="Figma" className="skill-img" />
                                        <h5>Figma</h5>
                                    </div>
                                    <div className="item">
                                        <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="Firebase" className="skill-img" />
                                        <h5>Firebase</h5>
                                    </div>
                                    <div className="item">
                                        <img src="https://www.vectorlogo.zone/logos/particleio/particleio-icon.svg" alt="Particle JS" className="skill-img" />
                                        <h5>Particle JS</h5>
                                    </div>
                                    <div className="item">
                                        <img src="https://www.vectorlogo.zone/logos/github/github-tile.svg" alt="GitHub" className="skill-img" />
                                        <h5>GitHub</h5>
                                    </div>
                                    <div className="item">
                                        <img src="https://www.vectorlogo.zone/logos/open-std_c/open-std_c-icon~alt2.svg" alt="C Language" className="skill-img" />
                                        <h5>C Language</h5>
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img src="https://via.placeholder.com/1000x200" alt="Background Image" className="background-image-left" />
        </section>
    );
};
