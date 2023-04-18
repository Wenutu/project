import React from "react";
import GitHubCalendar from "react-github-calendar";

import { Row } from "react-bootstrap";

function Github() {
  const minimalTheme = {
    light: ['hsl(0, 0%, 92%)', 'rebeccapurple'],
    dark: ['hsl(0, 0%, 92%)', 'rebeccapurple'],
  };
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="github-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="wenutu">Code</strong>
      </h1>
      <GitHubCalendar
        username="wenutu"
        blockSize={15}
        blockMargin={5}
        colorScheme="light"
        theme={minimalTheme}
        fontSize={16}
      />
    </Row>
  );
}

export default Github;