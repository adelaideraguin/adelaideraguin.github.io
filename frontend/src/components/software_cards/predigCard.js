import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, Grid, IconButton, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import ComputerIcon from '@mui/icons-material/ComputerTwoTone';
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
                    title="PREDIG: Plant Wall Degredation Simulation"
                />
                <Divider />
            </Box>
            <Grid container  spacing={1} alignItems="center"  justifyContent="space-around">
                <Grid item xs={12} sm={12} md={6}>
                    <Typography variant="body 1" align="left" padding="3em">
                    We have embedded the PREDIG simulation scheme within a website where you can submit your parameters from experiments to the server as 
                        initial conditions for the simulation. You will receive your results shortly afterwards by email. You can also access this software via GitHub.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={3.5}>
                    <CardMedia sx={{
                        padding: "1em", maxWidth: 300,
                        margin: "0 auto",
                    }}
                        component="img"
                        image={prediglogo}
                        alt=" lorem ipsum."
                    />
                </Grid>
                
            </Grid>


            <Box>
            <Divider/>
                <CardActions >
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