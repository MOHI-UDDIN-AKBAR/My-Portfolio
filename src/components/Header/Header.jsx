import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { Link } from "@mui/material";

import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import HeaderForSmallDevice from "./HeaderForSmallDevice";
const Header = () => {
  // const menu = ["HOME", "ABOUT", "WORK", "SKILL", "CONTACT"];
  const [mode, setMode] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setWidth(window.innerWidth);
      });
    };
  }, [width]);
  const handleEventListener = () => {
    console.log("hello world");
  };
  return (
    <>
      <AppBar color="inherit" sx={{ boxShadow: 0 }} position="fixed">
        <Toolbar className="toolBar">
          <Typography
            variant="h2"
            fontFamily="Smooch"
            sx={{ maxWidth: { sm: 1 / 2, md: "25%", lg: "40%" } }}
          >
            MU
          </Typography>
          <Grid
            container
            className="girdContainer"
            sx={{
              display: { xs: "none", sm: "none", md: "flex" },
              maxWidth: { md: "65%", lg: "50%" },
              ml: { lg: 40 },
              mr: "100px",
            }}
          >
            {/* {menu?.map((each, i) => (
              <Grid item key={i}>
                <Button
                  variant="text"
                  color="inherit"
                  sx={{ fontWeight: 400, fontSize: "20px", p: 1.5 }}
                  onClick={(e) => handleEventListener()}
                >
                  {each}
                </Button>
              </Grid>
            ))} */}
            {/* <Link href="#footer" smooth>
          footer
        </Link> */}
            <Grid item>
              <Link href="#heroSection" underline="none" color="inherit">
                <Button
                  variant="text"
                  color="inherit"
                  sx={{ fontWeight: 400, fontSize: "20px", p: 1.5 }}
                >
                  HOME
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Link href="#about" underline="none" color="inherit">
                <Button
                  variant="text"
                  color="inherit"
                  sx={{ fontWeight: 400, fontSize: "20px", p: 1.5 }}
                >
                  ABOUT
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Link href="#work" underline="none" color="inherit">
                <Button
                  variant="text"
                  color="inherit"
                  sx={{ fontWeight: 400, fontSize: "20px", p: 1.5 }}
                >
                  WORK
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Link href="#skills" underline="none" color="inherit">
                <Button
                  variant="text"
                  color="inherit"
                  sx={{ fontWeight: 400, fontSize: "20px", p: 1.5 }}
                >
                  SKILLS
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Link href="#contact" underline="none" color="inherit">
                <Button
                  variant="text"
                  color="inherit"
                  sx={{ fontWeight: 400, fontSize: "20px", p: 1.5 }}
                >
                  CONTACT
                </Button>
              </Link>
            </Grid>

            {/* <Grid item>
              <Button
                variant="text"
                color="inherit"
                sx={{ fontWeight: 400, fontSize: "20px", p: 1.5 }}
                onClick={(e) => handleEventListener()}
              >
                <Link to={"#work"} smooth>
                  all
                </Link>
              </Button>
            </Grid> */}
          </Grid>
          {width < 900 ? (
            <HeaderForSmallDevice />
          ) : (
            // <IconButton
            //   sx={{
            //     p: 2,
            //     maxWidth: "10%",
            //     bgcolor: mode ? "white" : "black",
            //     color: mode ? "black" : "white",
            //   }}
            //   onClick={(e) => setMode(!mode)}
            // >
            //   {mode ? (
            //     <NightsStayIcon sx={{ color: "MenuText" }} />
            //   ) : (
            //     <LightModeIcon sx={{ color: "MenuText" }} />
            //   )}
            // </IconButton>
            ""
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
