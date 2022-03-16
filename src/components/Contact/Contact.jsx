import React from "react";
import { Box, Typography, Grid, IconButton, Link } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
const Contact = () => {
  return (
    <>
      <Box
        component="div"
        sx={{
          maxWidth: { xs: "100%", sm: "90%", md: "60%", lg: "50%", xl: "40%" },
          p: 2,
          mx: "auto",
          my: 10,
          mb: "100px",
        }}
        className="contactSection"
        id="contact"
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: "Rajdhani",
            mb: 4,
            fontSize: { xs: "4rem", sm: "5rem", md: "6rem" },
          }}
        >
          LET'S TALK
        </Typography>
        <Typography variant="h5" align="center" sx={{ fontWeight: "400" }}>
          Interested to working or got some questions ? Feel free to contact me
          by
          <Box component="span" sx={{ fontSize: "30px", mx: 1 }}>
            email
          </Box>
          or my
          <Box component="span" sx={{ fontSize: "30px", ml: 1 }}>
            social media
          </Box>
          .
        </Typography>
        <Box component="div" sx={{ maxWidth: 1, my: 3 }}>
          <Grid container spacing={5}>
            <Grid item>
              <Link
                href="https://www.linkedin.com/in/mohi-uddin-akbar-316657210/"
                color="inherit"
              >
                <IconButton size="large" color="inherit">
                  <LinkedInIcon sx={{ fontSize: "45px" }} />
                </IconButton>
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="mailto:mohiuddinakbar397720@gmail.com"
                color="inherit"
              >
                <IconButton size="large" color="inherit">
                  <AlternateEmailIcon sx={{ fontSize: "45px" }} />
                </IconButton>
              </Link>
            </Grid>
            {/* <Grid item>
              <IconButton size="large" color="inherit">
                <InstagramIcon sx={{ fontSize: "45px" }} />
              </IconButton>
            </Grid> */}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
