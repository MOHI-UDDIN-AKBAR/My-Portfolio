import { Box } from "@mui/system";
import React from "react";
import { Typography } from "@mui/material";

const About = () => {
  return (
    <Box component="div" className="about">
      <Typography
        variant="h1"
        // color="#616161"
        color="#424242"
        sx={{
          fontFamily: "Bebas Neue",
          fontSize: { xs: "6rem", sm: "8rem", md: "12rem" },
        }}
        className="title"
      >
        ABOUT ME
      </Typography>
      <Typography
        className="description"
        variant="h5"
        sx={{
          maxWidth: { xs: "90%", sm: "85%", md: "70%", lg: "50%" },
          textAlign: "center",
        }}
      >
        Hi,there. I am MOHI UDDIN and a Front-end Developer. I like creating
        things that live on internet.
      </Typography>
    </Box>
  );
};

export default About;
