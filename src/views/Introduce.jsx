import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../components/Particle";
import TypeText from "../components/Introduce/TypeText";
import Github from "../components/Introduce/Github";
import Content from "../components/Introduce/Content";

import introduceLogo from "../assets/images/introduce-main.svg";
import laptopImg from "../assets/images/introduce.png";

function Introduce() {
  return (
    <section>
      <Container fluid className="introduce-section" id="introduce">
        <Particle />
        <Container className="introduce-container">
          <Row>
            <Col md={7} className="introduce-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Wenutu</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <TypeText />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={introduceLogo}
                alt="introduce pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className="introduce2-section">
        <Particle />
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know This <strong className="wenutu"> Website</strong>
              </h1>
              <Content />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="introduce2-img"
            >
              <img src={laptopImg} alt="introduce2" className="img-fluid" />
            </Col>
          </Row>
          <Github />
        </Container>
      </Container>
    </section>
  );
}

export default Introduce;
