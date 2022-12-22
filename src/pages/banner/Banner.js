import React from "react";
import "./Banner.css";
import Typewriter from "typewriter-effect";

const Banner = () => {
  return (
    <div className="type ">
      <Typewriter
        onInit={(typewriter) => {
          typewriter

            .typeString("CSS Hacks")

            .pauseFor(1000)
            .deleteAll()
            .typeString("Welcomes You")
            .start();
        }}
      />
    </div>
  );
};

export default Banner;
