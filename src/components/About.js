import React from "react";
import Common from "./Common";
import aboutImg from "../images/Blog.png";

function About() {
  return (
    <div>
      <Common
        name="Welcome to About Page"
        imgsrc={aboutImg}
        visit="./Contact"
        btname="Contact Now"
      />
    </div>
  );
}

export default About;
