import React from "react";
import { Typography } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useStyles } from "./Experience.styles";
import { Element } from "react-scroll";
// Add these line to create dynamic image/info cards
// import { exp } from "../../configs/Experience.js";
// import ExperienceCard from "../ExperienceCard/ExperienceCard.component.jsx";

function Experience() {
  const classes = useStyles();

  return (
    
    <React.Fragment>
      <CssBaseline />

      <Typography
        className={classes.title}
        variant="h2"
        display="block"
        align="center"
      >
        <Element name="experience">Work Experience</Element>        
      </Typography>
      <p>
          I started out building computers and then move into system administration. From there I moved in to networking and became a CCNA, CCNP network engineer. I also worked with load balancers (F5) Checkpoint firewalls on Nokias.{<br></br>}
      </p>
      <p>
          From there I moved into IT managment and Netowrk design and administration with multiple datacenters for E commerce companies.
      </p>
      <p>
          I later found the desire to work in Programming and did very junior Ruby Development mainly manipulating data for a Biomedical company.
      </p>
      <p>
          I later moved in to the Oilfied Safety operations and created implemented and monitored MSA's for commpanies and helped to bring them into compliance with OSHA, The Railroad comission and other oilfield agencies
      </p>
      <p>
         I am now taking Javascript bootcamp at UTSA to learn all aspects of fullstack development. This is where I hope to excel over time and make a permanent career. 
      </p>

      {/* <div className={classes.expContainer}>
        {exp.map(e => {
          return (
            <ExperienceCard
              title={e.title}
              desc={e.desc}
              date={e.date}
              img={e.img}
              key={e.title + "key"}
            />
          );
        })}
      </div> */}
    </React.Fragment>
  );
}

export default Experience;