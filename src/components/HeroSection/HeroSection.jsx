import { Box, Fab, IconButton, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import React from "react";

const HeroSection = () => {
  return (
    <Box className="heroSection">
      <Typography
        variant="h1"
        sx={{ fontSize: { xs: "4rem", sm: "5rem", md: "6rem" } }}
        fontFamily="Smooch"
      >
        Mohi Uddin
      </Typography>

      <Typography
        color="#212121"
        variant="h3"
        fontFamily="Amarante"
        sx={{ fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" } }}
      >
        Front-End Developer
      </Typography>
      <Box
        component="div"
        className="icons"
        sx={{
          maxWidth: { md: "10%" },
          position: "absolute",
          right: { xs: "20px", md: "60px", lg: "100px" },
          display: { xs: "none", sm: "none", md: "flex" },
        }}
      >
        <Fab aria-label="github" sx={{ boxShadow: 0, bgcolor: "white" }}>
          <GitHubIcon sx={{ fontSize: { md: "30px", lg: "40px" }, m: 2 }} />
        </Fab>
        <Fab aria-label="linkedin" sx={{ boxShadow: 0, bgcolor: "white" }}>
          <LinkedInIcon sx={{ fontSize: { md: "30px", lg: "40px" }, m: 2 }} />
        </Fab>
        <Fab aria-label="instagram" sx={{ boxShadow: 0, bgcolor: "white" }}>
          <InstagramIcon sx={{ fontSize: { md: "30px", lg: "40px" }, m: 2 }} />
        </Fab>
      </Box>
    </Box>
  );
};

export default HeroSection;
