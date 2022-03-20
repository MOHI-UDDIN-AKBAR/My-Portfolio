import {
  Box,
  Card,
  CardMedia,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  Link,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import GitHubIcon from "@mui/icons-material/GitHub";
import VisibilityIcon from "@mui/icons-material/Visibility";
// import img1 from "./assets/Screenshot.png";
import img1 from "./assets/image1.png";
import img2 from "./assets/image2.png";
import img3 from "./assets/image3.png";
import { data } from "../data/data";
const Work = () => {
  useEffect(() => {
    console.log(data);
  }, []);
  const [animate, setAnimate] = useState(false);
  return (
    <>
      <Box component="div">
        <Typography
          variant="h1"
          sx={{
            mb: { xs: "50px" },
            width: 1,
            fontFamily: "PT Serif",
            mx: "auto",
          }}
          className="WorkTitle"
        >
          Work
        </Typography>
      </Box>
      <Box className="allProjects" component="div" id="work">
        {data?.map((each, i) => (
          <Box
            component="div"
            key={i}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: {
                xs: "column",
                sm: "column",
                md: "column",
                lg: "row",
              },
              p: 1,
              mb: { xs: "100px", md: "200px", lg: "200px" },
            }}
            className="projects"
            onMouseEnter={(e) => setAnimate(true)}
            onMouseLeave={(e) => setAnimate(false)}
          >
            <Card
              sx={{
                width: { xs: "95%", sm: "85%", md: "70%", lg: "70%" },
                m: { xs: 2, md: 3, lg: 5 },
                display: {
                  xs: "flex",
                  sm: "flex",
                  md: "none",
                  lg: "none",
                  xl: "none",
                },
              }}
            >
              <CardMedia component="img" image={each.image} alt="image" />
            </Card>
            <Box component="div">
              <Grid
                container
                sx={{
                  display: {
                    xs: "flex",
                    sm: "flex",
                    md: "none",
                    lg: "none",
                    xl: "none",
                  },
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                }}
                spacing={5}
              >
                <Grid item>
                  <Link
                    href={each.linkForLive}
                    color="inherit"
                    underline="none"
                    target="_blank"
                  >
                    <IconButton color="inherit" sx={{ p: 2 }}>
                      <VisibilityIcon sx={{ fontSize: "40px" }} />
                    </IconButton>
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    href={each.githubLink}
                    color="inherit"
                    underline="none"
                    target="_blank"
                  >
                    <IconButton color="inherit" sx={{ p: 2 }}>
                      <GitHubIcon sx={{ fontSize: "40px" }} />
                    </IconButton>
                  </Link>
                </Grid>
              </Grid>
            </Box>
            <Box
              component="div"
              className="projectInfo"
              sx={{
                maxWidth: { xs: 1, sm: 1, md: 1, lg: 1 / 2 },
                p: { xs: 1, md: 3, lg: 5, xl: 7 },
              }}
            >
              <Typography
                variant="h2"
                className={`number ${animate ? "forAnimation" : ""}`}
                sx={{ m: { xs: 1, md: 3, lg: 5 } }}
              >
                0{i + 1}
              </Typography>
              <Box component="div" sx={{ p: { xs: 2, sm: 3, md: 7, lg: 5 } }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "2.3rem", sm: "4rem", md: "5rem" },
                    fontFamily: "Rajdhani",
                    mt: 8,
                  }}
                  className={`${animate ? "forAnimation" : ""}`}
                >
                  {each.title}
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "Frank Ruhl Libre",
                    my: 2,
                    maxWidth: "fit-content",
                    fontSize: { xs: "2rem", sm: "2.12rem" },
                  }}
                  className={`projectType ${animate ? "forAnimation" : ""}`}
                >
                  <FiberManualRecordIcon
                    sx={{ fontSize: "12px", color: "#1f2633", mr: 1 }}
                  />
                  {each.type}
                </Typography>
                <Box component="div" className="info">
                  <Typography
                    variant="h5"
                    align="center"
                    sx={{ fontWeight: "normal", my: 2 }}
                    className={`${animate ? "forAnimation" : ""}`}
                  >
                    {each.description}
                  </Typography>
                  <Box
                    component="div"
                    className={`tools ${animate ? "forAnimation" : ""}`}
                  >
                    {each.ingredients?.map((ingredient, i) => (
                      <Typography
                        key={i}
                        variant="h6"
                        sx={{
                          m: { xs: 1, sm: 1, md: 2 },
                          p: 1,
                          // color: "#1f2633",
                          fontWeight: 450,
                        }}
                      >
                        {/* <FiberManualRecordIcon
                          sx={{ fontSize: "12px", color: "#1f2633", mr: 1 }}
                        /> */}
                        <FiberManualRecordIcon
                          sx={{ fontSize: "12px", mr: 1 }}
                        />
                        {ingredient}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              component="div"
              className="imageGallery"
              sx={{
                display: {
                  lg: "flex",
                  md: "flex",
                  sm: "none",
                  xs: "none",
                  xl: "flex",
                },
                maxWidth: { xs: 1, sm: 1, md: 1, lg: 1 / 2 },
              }}
            >
              <Card
                sx={{
                  width: { xs: "95%", sm: "85%", md: "80%", lg: "90%" },
                  m: { xs: 2, md: 3, lg: 5 },
                  mr: { md: "10px", lg: "50px", xl: "80px" },
                }}
              >
                <CardMedia component="img" image={each.image} alt="image" />
              </Card>
              <Box component="div">
                <Grid
                  container
                  sx={{
                    display: {
                      lg: "flex",
                      md: "flex",
                      sm: "none",
                      xs: "none",
                      xl: "flex",
                    },
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                  }}
                  spacing={5}
                >
                  <Grid item>
                    <Link
                      href={each.linkForLive}
                      color="inherit"
                      underline="none"
                      target="_blank"
                    >
                      <IconButton color="inherit" sx={{ p: 2 }}>
                        <VisibilityIcon sx={{ fontSize: "40px" }} />
                      </IconButton>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link
                      href={each.githubLink}
                      color="inherit"
                      underline="none"
                      target="_blank"
                    >
                      <IconButton color="inherit" sx={{ p: 2 }}>
                        <GitHubIcon sx={{ fontSize: "40px" }} />
                      </IconButton>
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        ))}
        {/* <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "column",
              lg: "row",
            },
            p: 1,
            mb: { xs: "100px", md: "200px", lg: "200px" },

            // height: { xs: "173vh", sm: "130vh", md: "125vh", lg: "100vh" },
          }}
          className="projects"
          onMouseEnter={(e) => setAnimate(true)}
          onMouseLeave={(e) => setAnimate(false)}
        >
          <Card
            sx={{
              width: { xs: "95%", sm: "85%", md: "70%", lg: "70%" },
              m: { xs: 2, md: 3, lg: 5 },
              display: {
                xs: "flex",
                sm: "flex",
                md: "none",
                lg: "none",
                xl: "none",
              },
            }}
          >
            <CardMedia
              component="img"
              // height="360px"
              // sx={{
              //   height: {
              //     xs: "300px",
              //     sm: "350px",
              //     md: "380px",
              //     lg: "400px",
              //   },
              // }}
              image={img1}
              alt="image"
            />
          </Card>
          <Box component="div">
            <Grid
              container
              sx={{
                display: {
                  xs: "flex",
                  sm: "flex",
                  md: "none",
                  lg: "none",
                  xl: "none",
                },
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}
              spacing={5}
            >
              <Grid item>
                <IconButton color="inherit" sx={{ p: 2 }}>
                  <VisibilityIcon sx={{ fontSize: "40px" }} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton color="inherit" sx={{ p: 2 }}>
                  <GitHubIcon sx={{ fontSize: "40px" }} />
                </IconButton>
              </Grid>
            </Grid>
          </Box>
          <Box
            component="div"
            className="projectInfo"
            sx={{
              maxWidth: { xs: 1, sm: 1, md: 1, lg: 1 / 2 },
              p: { xs: 1, md: 3, lg: 5, xl: 7 },
            }}
          >
            <Typography
              variant="h2"
              className={`number ${animate ? "forAnimation" : ""}`}
              sx={{ m: { xs: 1, md: 3, lg: 5 } }}
            >
              01
            </Typography>
            <Box component="div" sx={{ p: { xs: 2, sm: 3, md: 7, lg: 5 } }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2.3rem", sm: "4rem", md: "5rem" },
                  fontFamily: "Rajdhani",
                  mt: 8,
                }}
                className={`${animate ? "forAnimation" : ""}`}
              >
                Make Code Easy
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Frank Ruhl Libre",
                  my: 2,
                  maxWidth: "fit-content",
                  fontSize: { xs: "2rem", sm: "2.12rem" },
                }}
                className={`projectType ${animate ? "forAnimation" : ""}`}
              >
                <FiberManualRecordIcon
                  sx={{ fontSize: "12px", color: "#1f2633", mr: 1 }}
                />
                Full Stack Developer
              </Typography>
              <Box component="div" className="info">
                <Typography
                  variant="h5"
                  align="center"
                  sx={{ fontWeight: "normal", my: 2 }}
                  className={`${animate ? "forAnimation" : ""}`}
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Beatae,sapiente! Lorem ipsum dolor sit amet.
                </Typography>
                <Box
                  component="div"
                  className={`tools ${animate ? "forAnimation" : ""}`}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      m: { xs: 1, sm: 1, md: 2 },
                      p: 1,
                      color: "#1f2633",
                      fontWeight: 450,
                    }}
                  >
                    <FiberManualRecordIcon
                      sx={{ fontSize: "12px", color: "#1f2633", mr: 1 }}
                    />
                    HTML
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      m: { xs: 1, sm: 1, md: 2 },
                      p: 1,
                      color: "#1f2633",
                      fontWeight: 450,
                    }}
                  >
                    <FiberManualRecordIcon
                      sx={{ fontSize: "12px", color: "#1f2633", mr: 1 }}
                    />
                    CSS
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      m: { xs: 1, sm: 1, md: 2 },
                      p: 1,
                      color: "#1f2633",
                      fontWeight: 450,
                    }}
                  >
                    <FiberManualRecordIcon
                      sx={{ fontSize: "12px", color: "#1f2633", mr: 1 }}
                    />
                    SCSS
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      m: { xs: 1, sm: 1, md: 2 },
                      p: 1,
                      color: "#1f2633",
                      fontWeight: 450,
                    }}
                  >
                    <FiberManualRecordIcon
                      sx={{ fontSize: "12px", color: "#1f2633", mr: 1 }}
                    />
                    FIREBASE
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      m: { xs: 1, sm: 1, md: 2 },
                      p: 1,
                      color: "#1f2633",
                      fontWeight: 450,
                    }}
                  >
                    <FiberManualRecordIcon
                      sx={{ fontSize: "12px", color: "#1f2633", mr: 1 }}
                    />
                    REACT
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      m: { xs: 1, sm: 1, md: 2 },
                      p: 1,
                      color: "#1f2633",
                      fontWeight: 450,
                    }}
                  >
                    <FiberManualRecordIcon
                      sx={{ fontSize: "12px", color: "#1f2633", mr: 1 }}
                    />
                    PUBLIC API
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            component="div"
            className="imageGallery"
            sx={{
              display: {
                lg: "flex",
                md: "flex",
                sm: "none",
                xs: "none",
                xl: "flex",
              },
              maxWidth: { xs: 1, sm: 1, md: 1, lg: 1 / 2 },
            }}
          >
            <Card
              sx={{
                width: { xs: "95%", sm: "85%", md: "80%", lg: "90%" },
                m: { xs: 2, md: 3, lg: 5 },
                mr: { md: "10px", lg: "50px", xl: "80px" },
              }}
            >
              <CardMedia
                component="img"
                // height="360px"
                // sx={{
                //   height: {
                //     xs: "300px",
                //     sm: "350px",
                //     md: "380px",
                //     lg: "500px",
                //   },
                // }}
                image={img1}
                alt="image"
              />
            </Card>
            <Box component="div">
              <Grid
                container
                sx={{
                  display: {
                    lg: "flex",
                    md: "flex",
                    sm: "none",
                    xs: "none",
                    xl: "flex",
                  },
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                }}
                spacing={5}
              >
                <Grid item>
                  <IconButton color="inherit" sx={{ p: 2 }}>
                    <VisibilityIcon sx={{ fontSize: "40px" }} />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton color="inherit" sx={{ p: 2 }}>
                    <GitHubIcon sx={{ fontSize: "40px" }} />
                  </IconButton>
                </Grid>
              </Grid>
            </Box>
            {/* <Box
              component="div"
              sx={{ width: "100%", p: 1 }}
              className="smallImages"
            >
              {/* <Card sx={{ width: "45%" }}>
                <CardMedia
                  component="img"
                  // height="300px"
                  sx={{
                    height: {
                      xs: "230px",
                      sm: "250px",
                      md: "270px",
                      lg: "300px",
                    },
                  }}
                  image="https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="image"
                />
              </Card> */}
        {/* <Card sx={{ width: "45%" }}>
                <CardMedia
                  component="img"
                  // height="300px"
                  sx={{
                    height: {
                      xs: "230px",
                      sm: "250px",
                      md: "270px",
                      lg: "300px",
                    },
                  }}
                  image="https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="image"
                />
              </Card> */}
        {/* </Box> */}
        {/* </Box> */}
        {/* </Box> */}
      </Box>
    </>
  );
};

export default Work;
