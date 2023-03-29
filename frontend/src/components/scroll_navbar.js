import { AppBar, Box, Button, CssBaseline, ListItemText, MenuList, MenuItem, Toolbar, Typography, useScrollTrigger } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
    children: React.ReactElement;
  }
  
  function ElevationScroll(props: Props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
  
  export default function Navbar(props: Props) {
    return (
        <>
        <CssBaseline />
        <ElevationScroll {...props}>
            <AppBar position="sticky" sx={{ background: "white", marginBottom: "0.5em", marginTop: "0.5em" }} >
                <Toolbar disableGutters  >
                    <Box sx={{ padding: "1em", paddingBottom: "0" }}>
                        <img src="https://www.hhu.de/typo3conf/ext/wiminno/Resources/Public/img/hhu_logo.png" alt="hhu" width="300px" />
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
                        Group of Adélaïde Raguin
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: "space-evenly" }}>
                        <Button sx={{ color: "black" }} component={Link} to="/" variant="outline" color="primary">Home</Button>
                        <Button sx={{ color: "black" }} component={Link} to="/group" variant="outline" color="primary">Meet the Group</Button>
                        <Button sx={{ color: "black" }} component={Link} to="/research" variant="outline" color="primary">Research Projects
                        <MenuList>
                        <MenuItem>
                            <Button sx={{ textAlign: "right" }} variant="outlined" component={Link} to="/research/glycogen-starch">
                        Glycogen & Stach
                            </Button>
                        </MenuItem>
                        <MenuItem>
                            <Button sx={{ textAlign: "right" }} variant="outlined"  component={Link} to="/research/protein-synthesis">
                        Protein Synthesis
                            </Button>
                        </MenuItem>
                        <MenuItem>
                            <Button sx={{ textAlign: "right" }} variant="outlined"  component={Link} to="/research/cytoskeletal-transport">
                        Cytoskeletal Transport
                            </Button>
                        </MenuItem>
                        <MenuItem>
                            <Button sx={{ textAlign: "right" }} variant="outlined"  component={Link} to="/research/biosynthesis-degredation">
                        Plant cell wall biosynthesis and degredation
                            </Button>
                        </MenuItem>                        </MenuList>
                        </Button>

                        <Button sx={{ color: "black" }} component={Link} to="/funding" variant="outline" color="primary">Funding</Button>
                        <Button sx={{ color: "black" }} component={Link} to="/teaching" variant="outline" color="primary">Teaching</Button>
                        <Button sx={{ color: "black" }} component={Link} to="/hiring" variant="outline" color="primary">Opportunities</Button>
                        <Button sx={{ color: "black" }} component={Link} to="/contact-us" variant="outline" color="primary">Get in touch</Button>


                
                       
                    </Box>
                </Toolbar>
            </AppBar>
        </ElevationScroll>

        <Toolbar/>

        </>
    );
}

