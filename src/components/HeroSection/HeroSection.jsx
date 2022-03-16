import { Box, Fab, IconButton, Link, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import React from "react";

const HeroSection = () => {
  return (
    <Box className="heroSection" id="heroSection">
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
        <Fab
          aria-label="github"
          sx={{ boxShadow: 0, bgcolor: "white", my: { md: 2, lg: 3 } }}
        >
          <Link
            href="https://github.com/MOHI-UDDIN-AKBAR"
            underline="none"
            color="inherit"
            target="_blank"
          >
            <GitHubIcon sx={{ fontSize: { md: "30px", lg: "40px" } }} />
          </Link>
        </Fab>
        <Fab
          aria-label="linkedin"
          sx={{ boxShadow: 0, bgcolor: "white", my: { md: 2, lg: 3 } }}
        >
          <Link
            href="https://www.linkedin.com/in/mohi-uddin-akbar-316657210/"
            underline="none"
            color="inherit"
            target="_blank"
          >
            <LinkedInIcon sx={{ fontSize: { md: "30px", lg: "40px" } }} />
          </Link>
        </Fab>
        <Fab
          aria-label="instagram"
          sx={{ boxShadow: 0, bgcolor: "white", my: { md: 2, lg: 3 } }}
        >
          {" "}
          <Link
            href="https://www.instagram.com/imarafat3/"
            underline="none"
            color="inherit"
            target="_blank"
          >
            <InstagramIcon sx={{ fontSize: { md: "30px", lg: "40px" } }} />
          </Link>
        </Fab>
      </Box>
    </Box>
  );
};

export default HeroSection;
