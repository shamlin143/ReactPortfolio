import React from "react";
import { Typography } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useStyles } from "./Experience.styles";
import { Element } from "react-scroll";
 //Add these line to create dynamic image/info cards;
 import { exp } from "../../../src/Configs/Experience";
 import ExperienceCard from "../Experience/ExperienceCard/ExperienceCard.component.jsx";
 //import ExperienceCard from "../Experience/ExperienceCard/ExperienceCard.component";

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
        <Element name="experience">Experience</Element>        
      </Typography>
    

      { <div className={classes.expContainer}>
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
      </div> }
    </React.Fragment>
  );
}

export default Experience;