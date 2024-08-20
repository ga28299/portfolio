import React from "react";
import Typewriter from "typewriter-effect";

export const  Type=()=> {
  return (
    <Typewriter 
      options={{
        strings: [
          "Machine Learning Engineer",
          "Data Scientist",
          "Software Engineer",
          "A nice guy?",
          "Check out my projects!"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}
