  
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
          <h3>Technical IT professional with multiple technical certifications and a demonstrated track record in IT leadership, technical project management, strategy development, and strong governance models such as PCI and SOX. Proven ability to get the job done and provide “follow me” team leadership under challenging conditions. LAN/WAN networking expert with deep experience with call centers, IP networks, VoIP, LAN/WAN integration and load balancing. Extremely strong experience with implementation and upgrade of multiple data centers including in-house and collocated facilities with multiple vendors. I have just completed a JavaScript Boot Camp at UTSA. I am looking forward to finding a spot with a company I can work for and grow with.</h3>
                

          
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutMe;