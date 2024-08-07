import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";



const Navbar = () => {

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
                    <Box sx={{display: { xs: "none", md: "flex" }, mr: 1, flexGrow: 1, display: 'flex', justifyContent: "space-evenly" , margin: "2em"}}>
                        <Button component={Link} to="/" variant="outline" color="primary">Home</Button>
                        <Button sx={{ color: "black" }} component={Link} to="/group" variant="outline" color="primary">Meet the Group</Button>
                        <Button sx={{ color: "black" }} component={Link} to="/research" variant="outline" color="primary">Research Projects</Button>
                        <Button sx={{ color: "black" }} component={Link} to="/funding" variant="outline" color="primary">Funding</Button>
                        <Button sx={{ color: "black" }} component={Link} to="/publications" variant="outline" color="primary">Publications</Button>
                        <Button sx={{ color: "black" }} component={Link} to="/software" variant="outline" color="primary">Software</Button>
                        <Button sx={{ color: "black" }} component={Link} to="/hiring" variant="outline" color="primary">Join Us!</Button>
                        <Button sx={{ color: "black" }} component={Link} to="/contact-us" variant="outline" color="primary">Get in touch</Button>
                    </Box>
                </Toolbar>
                </Container>
            </AppBar>
            
        </>
    );
}

export default Navbar;
