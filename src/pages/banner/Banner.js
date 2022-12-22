import React from "react";
import "./Banner.css";
import Typewriter from "typewriter-effect";

const Banner = () => {
  return (
    <div className="type my-5">
      <Typewriter
        options={{
          strings: ["CSS Hacks", "Welcomes You"],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default Banner;
