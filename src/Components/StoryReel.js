import React from "react";
import "../css/StoryReel.css";
import headshot1 from "../images/headshot1.jpg";
import headshot2 from "../images/headshot2.jpg";
import headshot3 from "../images/headshot3.jpg";
import headshot4 from "../images/headshot4.jpg";
import headshot5 from "../images/headshot5.jpg";
import mainshot1 from "../images/mainshot1.jpg";
import mainshot2 from "../images/mainshot2.jpg";
import mainshot3 from "../images/mainshot3.jpg";
import mainshot4 from "../images/mainshot4.jpg";
import mainshot5 from "../images/mainshot5.jpg";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story image={mainshot1} profileSrc={headshot1} title="Billy Bones" />
      <Story image={mainshot2} profileSrc={headshot3} title="Bobo" />
      <Story image={mainshot3} profileSrc={headshot2} title="Jen Smith" />
      <Story image={mainshot4} profileSrc={headshot4} title="Sam Dobson" />
      <Story image={mainshot5} profileSrc={headshot5} title="James White" />
    </div>
  );
}

export default StoryReel;
