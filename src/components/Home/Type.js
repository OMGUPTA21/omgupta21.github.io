import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "MCA Student@Makaut",
          "MLSA α-Ambasssador",
          "GDSC MAKAUT@Member",
          "Technolgy Enthusiast",
          "Web Developer",
          "Problem Solver@GFG",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
