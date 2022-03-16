import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/system";
import { Button, IconButton, Link, Typography } from "@mui/material";
const HeaderForSmallDevice = () => {
  const menu = ["HOME", "ABOUT", "WORK", "SKILL", "CONTACT"];
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <Box component="div" className="mobileVersion">
        <Typography
          variant="h5"
          className="MenuBar"
          sx={{ fontWeight: 400, fontSize: "23px" }}
        >
          MENU
          <IconButton
            sx={{ color: "MenuText", fontWeight: 400 }}
            onClick={(e) => setShowMenu(!showMenu)}
          >
            {showMenu ? (
              <AddIcon className="addIcon" sx={{ fontSize: "45px" }} />
            ) : (
              <MenuIcon sx={{ fontSize: "45px" }} />
            )}
          </IconButton>
          {showMenu ? (
            <Box component="div" className="category">
              {/* {menu?.map((each, i) => (
                <Button
                  className="button"
                  variant="text"
                  color="inherit"
                  sx={{ fontWeight: 400, fontSize: "20px", p: 1.5 }}
                  key={i}
                  // onClick={(e) => handleEventListener()}
                >
                  {each}
                </Button>
              ))} */}
              <Link
                href="#heroSection"
                underline="none"
                color="inherit"
                sx={{ width: "90%" }}
              >
                <Button
                  className="button"
                  variant="text"
                  color="inherit"
                  sx={{ fontWeight: 400, fontSize: "20px", p: 1.5 }}
                >
                  HOME
                </Button>
              </Link>
              <Link
                href="#about"
                underline="none"
                color="inherit"
                sx={{ width: "90%" }}
              >
                <Button
                  className="button"
                  variant="text"
                  color="inherit"
                  sx={{ fontWeight: 400, fontSize: "20px", p: 1.5 }}
                >
                  ABOUT
                </Button>
              </Link>
              <Link
                href="#work"
                underline="none"
                color="inherit"
                sx={{ width: "90%" }}
              >
                <Button
                  className="button"
                  variant="text"
                  color="inherit"
                  sx={{ fontWeight: 400, fontSize: "20px", p: 1.5 }}
                >
                  WORK
                </Button>
              </Link>
              <Link
                href="#skills"
                underline="none"
                color="inherit"
                sx={{ width: "90%" }}
              >
                <Button
                  className="button"
                  variant="text"
                  color="inherit"
                  sx={{ fontWeight: 400, fontSize: "20px", p: 1.5 }}
                >
                  SKILLS
                </Button>
              </Link>
              <Link
                href="#contact"
                underline="none"
                color="inherit"
                sx={{ width: "90%" }}
              >
                <Button
                  className="button"
                  variant="text"
                  color="inherit"
                  sx={{ fontWeight: 400, fontSize: "20px", p: 1.5 }}
                >
                  CONTACT
                </Button>
              </Link>
            </Box>
          ) : (
            ""
          )}
        </Typography>
      </Box>
    </>
  );
};

export default HeaderForSmallDevice;
