import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";



const Navbar = () => {

    return (
        <>
            <AppBar position="sticky" sx={{ background: "white", marginBottom: "0.5em", marginTop: "0" }} >
                <Toolbar disableGutters  >
                    <Box sx={{ padding: "1em", paddingBottom: "1em" }}>
                        <img src="https://www.hhu.de/typo3conf/ext/wiminno/Resources/Public/img/hhu_logo.png" alt="hhu" width="300px" />
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/RaguinTeam"
                        sx={{
                            display: 'flex',
                            fontWeight: 500,
                            letterSpacing: '.2rem',
                            color: 'black',
                            textDecoration: 'none',
                        }}
                    >
                        Group of Adélaïde Raguin
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: "space-evenly" }}>
                        <Button sx={{ color: "pink" }} component={Link} to="/RaguinTeam" variant="outline" color="primary">Home</Button>
                        <Button sx={{ color: "black" }} component={Link} to="/RaguinTeam/group" variant="outline" color="primary">Meet the Group</Button>
                        <Button sx={{ color: "black" }} component={Link} to="/RaguinTeam/research" variant="outline" color="primary">Research Projects</Button>
                        <Button sx={{ color: "black" }} component={Link} to="/RaguinTeam/funding" variant="outline" color="primary">Funding</Button>
                        <Button sx={{ color: "black" }} component={Link} to="/RaguinTeam/publications" variant="outline" color="primary">Publications</Button>
                        <Button sx={{ color: "black" }} component={Link} to="/RaguinTeam/software" variant="outline" color="primary">Software</Button>
                        <Button sx={{ color: "black" }} component={Link} to="/RaguinTeam/hiring" variant="outline" color="primary">Join Us!</Button>
                        <Button sx={{ color: "black" }} component={Link} to="/RaguinTeam/contact-us" variant="outline" color="primary">Get in touch</Button>
                    </Box>
                </Toolbar>
            </AppBar>
            
        </>
    );
}

export default Navbar;
