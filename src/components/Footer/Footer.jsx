import React from "react";
import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import { WiDaySunnyOvercast } from "react-icons/wi";
const Footer = () => {
  return (
    <>
      <Box component="div" className="footer" sx={{ py: 6 }} id="footer">
        <Typography
          variant="h1"
          sx={{ fontSize: { xs: "3.5rem" }, my: 3 }}
          fontFamily="Smooch"
        >
          Mohi Uddin
        </Typography>
        <Typography variant="h5">&copy; 2022 all rights reserved</Typography>
        <Box component="div">
          <Grid container className="goodDay">
            <Grid item sx={{ fontSize: "50px" }}>
              <Typography
                variant="h3"
                sx={{ fontSize: { xs: "2rem" } }}
                fontFamily="Saira Condensed"
              >
                Have a beautiful!
              </Typography>
            </Grid>
            <Grid item sx={{ fontSize: "50px", ml: 1, mt: 2 }}>
              <WiDaySunnyOvercast />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
