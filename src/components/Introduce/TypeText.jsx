import React from "react";
import Typewriter from "typewriter-effect";

function TypeText() {
  return (
    <Typewriter
      options={{
        strings: [
          "Developer",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TypeText;