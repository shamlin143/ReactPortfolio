  
import React from "react";
import portfolio from "../../utils/portfolio.jpg";
import { Typography } from "@material-ui/core";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <React.Fragment>
      <Typography
        variant="h2"
        display="block"
        align="center"
        style={{
          margin: "1rem",
          fontSize: "1.6rem",
          textTransform: "uppercase"
        }}
      >
 
      </Typography>
      <div className="name">
        <img src={portfolio} alt="profile_photo" className="img" />
        <h1>Scott Hamlin</h1>
        <div className="subtitle">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h3>I am a Full Stack Developer in Training.</h3>
          <h3>I am looking forward to working with a company I can grow with.</h3>
          

          
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutMe;