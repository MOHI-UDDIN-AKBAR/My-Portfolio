import React, { useState } from "react";
import { FaReact, FaSass } from "react-icons/fa";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import {
  SiFirebase,
  SiJavascript,
  SiMaterialui,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";
import { Box, Button, Fab, Grid, Typography } from "@mui/material";
const Skills = () => {
  const option = ["All", "comfortable", "familiar"];
  const icons = [
    <FaReact />,
    <FaSass />,
    <AiFillHtml5 />,
    <AiFillGithub />,
    <DiCss3 />,
    <SiFirebase />,

    <SiJavascript />,
    <SiMaterialui />,
    <SiTailwindcss />,
    <SiMongodb />,
  ];
  const tools = [<FaReact />, <FaSass />, <AiFillHtml5 />, <AiFillGithub />];
  const language = [<SiJavascript />];
  const familiar = [<DiCss3 />, <SiFirebase />];
  const [skills, setSkills] = useState(icons);
  const handleEventLister = (index) => {
    if (index === 0) {
      setSkills(icons);
    } else if (index === 1) {
      setSkills(tools);
    } else if (index === 2) {
      setSkills(language);
    } else if (index === 3) {
      setSkills(familiar);
    }
  };
  return (
    <>
      <Box
        component="div"
        className="skills"
        sx={{ maxWidth: "100%", my: "200px" }}
        id="skills"
      >
        <Typography
          variant="h1"
          sx={{ mb: { xs: "50px" }, fontFamily: "PT Serif" }}
        >
          Skills
        </Typography>
        {/* <Grid
          container
          className="allButtons"
          sx={{
            maxWidth: {
              xs: "100%",
              sm: "95%",
              md: "70%",
              lg: "50%",
              xl: "45%",
            },
            mb: { xs: "-80px" },
          }}
        >
          {option?.map((each, i) => (
            <Grid item align="center">
              <Button
                onClick={(e) => handleEventLister(i)}
                variant="outlined"
                color="inherit"
                sx={{ p: 1, fontSize: "16px", fontWeight: 420 }}
              >
                {each}
              </Button>
            </Grid>
          ))}
        </Grid> */}
        <Grid
          container
          sx={{
            maxWidth: {
              xs: "100%",
              sm: "90%",
              md: "70%",
              lg: "40%",
              xl: "40%",
            },
            mt: "0px",
          }}
          className="iconOfSkills"
        >
          {skills?.map((each, i) => (
            <Grid
              item
              key={i}
              sx={{
                p: 3,
                fontSize: {
                  xs: "60px",
                  sm: "70px",
                  md: "70",
                  lg: "70px",
                  xl: "80px",
                },
                mx: 2,
              }}
              className="icons"
            >
              {each}
              {/* <Typography variant="h6" sx={{ ml: 1.2, align: "center" }}>
                HTML
              </Typography> */}
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Skills;
