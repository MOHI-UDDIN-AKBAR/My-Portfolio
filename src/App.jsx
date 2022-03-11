import React from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import HeroSection from "./components/HeroSection/HeroSection";
import { CssBaseline } from "@mui/material";
import "./style/style.css";
import { Box } from "@mui/system";
import Skills from "./components/Skills/Skills";
const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box component="div">
        {/* <Header /> */}
        {/* <HeroSection /> */}
        <About />
        <Work />
        <Skills />
      </Box>
    </React.Fragment>
  );
};

export default App;
