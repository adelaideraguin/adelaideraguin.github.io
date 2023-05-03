import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, Grid, IconButton, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import ComputerIcon from '@mui/icons-material/ComputerTwoTone';
import DescriptionIcon from '@mui/icons-material/Description';

import prediglogo from '../PREDIGLOGO.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
import Behle2021Card from '../paper_cards/Behle2021';



const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


const PREDIGCard = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ margin: "2em", marginTop: "1em" }} style={{ position:"relative", minHeight: "10px", display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }} elevation={5} >
            <Box>
                <CardHeader align="left"
                    title="PREDIG: a web application to simulate, fit experimental data, and optimise reaction conditions for the saccharification of plant biomass, lignocellulose"
                />
                <Divider />
            </Box>
                
                    <CardMedia sx={{
                        padding: "1em", maxWidth: 300,
                        margin: "0 auto",
                    }}
                        component="img"
                        image={prediglogo}
                        alt=" lorem ipsum."
                    />
            


            <Box>
            <Divider/>
                <CardActions >
                <Button variant="contained" startIcon={<DescriptionIcon />} href="https://doi.org/10.1371/journal.pcbi.1009262">
                        To Publication
                </Button>
                <Button variant="contained" startIcon={<ComputerIcon />} href="https://predig.cs.hhu.de/">
                        To page
                </Button>
                <Button variant="contained" startIcon={<GitHubIcon />} href="https://gitlab.com/erbeh/pcwsm">
                        To GitHub
                </Button>
                <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>

                </CardActions>
            </Box>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                
                <Behle2021Card/>
                </CardContent>
            </Collapse>

        
        </Card >
    );
};

export default PREDIGCard;