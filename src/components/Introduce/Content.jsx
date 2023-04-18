import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function Content() {
  return (
    <Card className="content-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, this <span className="wenutu">Website </span>
            is to presentation<span className="wenutu"> Projects.</span> <br />
            <br />
            Projects contains:
          </p>
          <ul>
            <li className="content-activity">
              <ImPointRight /> Personal web
            </li>
            <li className="content-activity">
              <ImPointRight /> Funny demo
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep calm and carry on!"{" "}
          </p>
          <footer className="blockquote-footer">Wenutu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default Content