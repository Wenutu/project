import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";


import ProjectCard from "../components/Porjects/ProjectCard";
import Particle from "../components/Particle";

import data from "../assets/projects.json"

function Projects() {
    return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>Here are a few projects I've worked.</p>
          <Tabs
            defaultActiveKey="0"
            className="project-tabs"
          >
            {data.map((item,index) => (
              <Tab eventKey={index} title={item.title}>
                <Row xs={1} md={2} lg={3} xxl={4} style={{ justifyContent: "center", paddingBottom: "10px" }}>
                  {item.projects.map((project,index) => (
                    <Col className="project-card">
                    <ProjectCard
                      imgPath={project.img}
                      name={project.name}
                      desc={project.desc}
                      githubLink={project.github}
                      demoLink={project.demo}
                    />
                  </Col>
                  )
                  )}
              </Row>
  
              </Tab>
            ))
            } 
          </Tabs>
        </Container>
      </Container>
    );
  }
  
  export default Projects;
  