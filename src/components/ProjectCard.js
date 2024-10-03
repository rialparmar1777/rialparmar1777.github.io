import { Col } from "react-bootstrap";
import "./ProjectCard.css";

export const ProjectCard = ({ title, description, imgUrl, href }) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <a href={href || " "}>
                <img src={imgUrl} alt={title} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    
                </div>
                </a>
            </div>
        </Col>
    );
};
