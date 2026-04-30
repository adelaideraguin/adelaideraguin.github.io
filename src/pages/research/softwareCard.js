import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  Fade
} from "@mui/material";

import { Link } from "react-router-dom";

import logo from "../../components/PREDIGLOGO.jpg";
import logo2 from "../../components/images/expressinhost_logo.png";

const SoftwareCard = () => {

  const [showFirst, setShowFirst] = useState(true);
  const [paused, setPaused] = useState(false);

  // 🔁 Auto flip (pause on hover)
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setShowFirst(prev => !prev);
    }, 3500);

    return () => clearInterval(interval);
  }, [paused]);

  // 🎯 Dynamic external link (used by logo only)
  const externalLink = showFirst
    ? "https://predig.cs.hhu.de/"
    : "https://expressinhost.cs.hhu.de/";

  return (
    <Card
      sx={{
        minHeight: 550,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
      elevation={5}
    >
      {/* 🔝 Header */}
      <Box>
        <CardHeader title="Use our Softwares" />
        <Divider />
      </Box>

      {/* 🖼️ CLICKABLE LOGO */}
      <Box
        sx={{
          position: "relative",
          height: 220,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer"
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Logo 1 */}
        <Fade in={showFirst} timeout={600}>
          <Box
            component="a"
            href={externalLink}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ position: "absolute" }}
          >
            <Box
              component="img"
              src={logo}
              alt="PREDIG logo"
              sx={{
                maxHeight: 400,
                maxWidth: "80%",
                objectFit: "contain"
              }}
            />
          </Box>
        </Fade>

        {/* Logo 2 */}
        <Fade in={!showFirst} timeout={600}>
          <Box
            component="a"
            href={externalLink}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ position: "absolute" }}
          >
            <Box
              component="img"
              src={logo2}
              alt="ExpressInHost logo"
              sx={{
                maxHeight: 400,
                maxWidth: "80%",
                objectFit: "contain"
              }}
            />
          </Box>
        </Fade>
      </Box>

      {/* 📄 TEXT */}
      <CardContent>
        <Typography align="left" sx={{ p: 1 }} variant="body1">
          We also develop free, open-source, and user friendly interfaced tools and web applications for users to run{" "}
          <Typography component="span" sx={{ fontStyle: 'italic' }}>
            in silico
          </Typography>{" "}
          experiments based on our stochastic simulation algorithms.
        </Typography>
      </CardContent>

      {/* 🔘 INTERNAL BUTTON ONLY */}
      <Box>
        <Divider />
        <CardActions>
          <Button
            variant="contained"
            component={Link}
            to="/software"
          >
            Learn More
          </Button>
        </CardActions>
      </Box>

    </Card>
  );
};

export default SoftwareCard;