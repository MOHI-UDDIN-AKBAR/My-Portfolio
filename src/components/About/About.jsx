import { Box } from "@mui/system";
import React, { useState } from "react";
import { Typography } from "@mui/material";
const About = () => {
  const [animate, setAnimate] = useState(false);
  return (
    <Box
      component="div"
      className="about"
      id="about"
      onMouseEnter={(e) => setAnimate(true)}
      onMouseLeave={(e) => setAnimate(false)}
    >
      <Typography
        variant="h1"
        // color="#616161"
        color="#424242"
        sx={{
          fontFamily: "Bebas Neue",
          fontSize: { xs: "6rem", sm: "8rem", md: "12rem" },
        }}
        className={animate ? "title" : ""}
      >
        ABOUT ME
      </Typography>
      <Typography
        className={animate ? "description" : ""}
        variant="h5"
        sx={{
          maxWidth: { xs: "90%", sm: "85%", md: "70%", lg: "50%" },
          textAlign: "center",
        }}
      >
        Hey ! <br />I am so happy to see you here. I am a Front-end Developer
        who loves React and Typescript. Besides, I like creating things that
        live on the internet and care deeply about user experience.
      </Typography>
    </Box>
  );
};

export default About;
