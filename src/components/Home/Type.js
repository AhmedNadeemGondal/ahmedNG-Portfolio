import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: ["Creative Coder", "Problem Solver", "Tech Enthusiast"],
        autoStart: true,
        loop: true,
        delay: 100,
        deleteSpeed: 30,
        startDelay: 500,
        cursor: "|",
        pauseFor: 1500,
      }}
    />
  );
}

export default Type;
