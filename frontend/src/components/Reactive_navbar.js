
import * as React from "react";
import { AppBar, Box, Button, Container, Stack, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LogoDevIcon from "@mui/icons-material/LogoDev";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
const pages = [<Link color="black" underline="none" to="/">Home</Link>, <Link to="/group">Meet the Group</Link>, <Link to="/research">Research Projects</Link>,
<Link to="/funding">Funding</Link>, <Link to="/publications">Publications</Link>, <Link to="/software">Software</Link>, <Link to="/hiring">Join us!</Link>, <Link to="/contact-us">Get in touch</Link>]

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


    return (
        <>
        
            <AppBar position="sticky" sx={{flexGrow: 1, display: 'flex', background: "white", justifyContent: 'space-between', marginBottom: "0.5em", marginTop: "0" }} >
            <Container maxWidth="xl">
                <Toolbar disableGutters  >
                
                    <Box sx={{ padding: "1em", paddingBottom: "1em" }}>
                        <img src="https://www.hhu.de/typo3conf/ext/wiminno/Resources/Public/img/hhu_logo.png" alt="hhu" width="200px" />
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            display: 'flex',
                            fontWeight: 500,
                            letterSpacing: '.2rem',
                            color: 'black',
                            textDecoration: 'none',
                        }}
                    >
                        Raguin Team 
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "flex", md: "none" } }}>
                      <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                      >
                        <MenuIcon />
                      </IconButton>
                      <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "left",
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "left",
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                          display: { xs: "block", sm:"block", md: "none" },
                        }}
                      >
                        {pages.map((page) => (
                          <MenuItem key={page} onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">{page}</Typography>
                          </MenuItem>
                        ))}
                      </Menu>
                    </Box>
         
          
                    <Stack direction="row" sx={{display: { xs: "none", sm: "none", md: "flex" }, mr: 1, flexGrow: 1,  justifyContent: "space-evenly" }}>
                        <Button component={Link} to="/" variant="outline" color="primary">Home</Button>
                        <Button sx={{ color: "black" }} component={Link} to="/group" variant="outline" color="primary">Meet the Group</Button>
                        <Button sx={{ color: "black" }} component={Link} to="/research" variant="outline" color="primary">Research Projects</Button>
                        <Button sx={{ color: "black" }} component={Link} to="/funding" variant="outline" color="primary">Funding</Button>
                        <Button sx={{ color: "black" }} component={Link} to="/publications" variant="outline" color="primary">Publications</Button>
                        <Button sx={{ color: "black" }} component={Link} to="/software" variant="outline" color="primary">Software</Button>
                        <Button sx={{ color: "black" }} component={Link} to="/hiring" variant="outline" color="primary">Join Us!</Button>
                        <Button sx={{ color: "black" }} component={Link} to="/contact-us" variant="outline" color="primary">Get in touch</Button>
                        
                    </Stack>

                    
   

                </Toolbar>
                </Container>
            </AppBar>
            
        </>
    );
}

export default Navbar;