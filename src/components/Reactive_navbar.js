import * as React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Stack,
  Toolbar,
  Typography
} from "@mui/material";

import { Link } from "react-router-dom";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import cnrsLogo from "../components/images/cnrs_logo.png";
import labrilogo from "../components/images/labri_logo.png";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // 🔵 UPDATED STYLE (bigger text)
  const navButtonStyle = {
    color: "black",
    textTransform: "none",
    fontWeight: 600,
    fontSize: "1.1rem",        // 👈 increase this (try 1.2rem if you want bigger)
    letterSpacing: "0.02em",
    "&:hover": {
      color: "primary.main",
      backgroundColor: "rgba(0,0,255,0.05)"
    }
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        background: "white",
        marginBottom: "0.5em"
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/* 🧠 LOGO AREA */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              padding: "1em"
            }}
          >
            {/* CNRS LOGO */}
            <a href="https://www.cnrs.fr" target="_blank" rel="noopener noreferrer">
              <img
                src={cnrsLogo}
                alt="CNRS Logo"
                style={{
                  height: 63,
                  cursor: "pointer",
                  objectFit: "contain"
                }}
              />
            </a>

            {/* LABRI LOGO */}
            <a href="https://www.labri.fr/en" target="_blank" rel="noopener noreferrer">
              <img
                src={labrilogo}
                alt="LaBRI Logo"
                style={{
                  height: 57,
                  cursor: "pointer",
                  objectFit: "contain"
                }}
              />
            </a>
          </Box>

          {/* 📱 MOBILE MENU */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton size="large" onClick={handleOpenNavMenu}>
              <MenuIcon />
            </IconButton>

            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {[
                { label: "Home", path: "/" },
                { label: "Meet the Group", path: "/group" },
                { label: "Research", path: "/research" },
                { label: "Funding", path: "/funding" },
                { label: "Publications", path: "/publications" },
                { label: "Software", path: "/software" },
                { label: "Join us!", path: "/hiring" },
                { label: "Get in touch", path: "/contact-us" }
              ].map((item) => (
                <MenuItem key={item.path} onClick={handleCloseNavMenu}>
                  <Typography>
                    <Link to={item.path} style={{ textDecoration: "none", color: "black" }}>
                      {item.label}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* 🧭 DESKTOP NAV */}
          <Stack
            direction="row"
            sx={{
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              justifyContent: "space-evenly"
            }}
          >
            <Button component={Link} to="/" sx={navButtonStyle}>Home</Button>
            <Button component={Link} to="/group" sx={navButtonStyle}>Group Members</Button>
            <Button component={Link} to="/research" sx={navButtonStyle}>Research Projects</Button>
            <Button component={Link} to="/funding" sx={navButtonStyle}>Funding</Button>
            <Button component={Link} to="/publications" sx={navButtonStyle}>Publications</Button>
            <Button component={Link} to="/software" sx={navButtonStyle}>Software</Button>
            <Button component={Link} to="/hiring" sx={navButtonStyle}>Join Us</Button>
            <Button component={Link} to="/contact-us" sx={navButtonStyle}>Contacts</Button>
          </Stack>

        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;