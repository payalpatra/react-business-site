import React from "react";
import homeImg from "../images/Growth.png";
import Common from "./Common";

function Home() {
  return (
    <div>
      <Common
        name="Grow Your Business with"
        imgsrc={homeImg}
        visit="./service"
        btname="Get Started"
      />
    </div>
  );
}

export default Home;
