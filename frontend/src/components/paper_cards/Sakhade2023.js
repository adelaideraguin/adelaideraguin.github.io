import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, Grid, IconButton, styled, Typography } from "@mui/material";
import { useState } from "react";

import figure1 from "../images/SakhaDe2023.png";


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


const SakhaDe2023Card = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card  style={{ position:"relative", minHeight: "10px", display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }} elevation={5} >
            <Box>
                <CardHeader align="left"
                    title="PREDIG: web application to model and predict the enzymatic saccharification of plant cell wall"
                />
                <Divider />
            </Box>
            <CardContent>
                <Typography align="left" variant="body1" >
                P S De, T Glass, M Stein, T Spitzlei, A Raguin (2023) PREDIG: web application to model and predict the enzymatic saccharification of plant cell wall. Computational and Structural Biotechnology Journal.
                </Typography>
            </CardContent>
            <Box>
                <Divider />
                <CardActions disableSpacing>
                    <Button variant="contained" href="https://doi.org/10.1016/j.csbj.2023.09.026">
                        Learn More
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
            <Grid container spacing={1} alignItems="center"  justifyContent="space-around" >
                <Grid item xs={12} sm={12} md={5}>

                    <CardMedia sx={{
                    padding: "2em", maxWidth: 800,
                    margin: "0 auto",
                }}
                    component="img"
                    image={figure1}
                    alt="Perspective view of the modelled lignocellulose microfibril substrate, with lignin in
blue, hemicellulose in yellow, and cellulose in green. Both hemicellulose and cellulose can
be either crystalline (dark colour) or amorphous (light colour), with amorphous regions
typically located at the boundaries of the microfibril, or embedded in the crystalline region
as ‘defect’ patches. These defects may for instance arise as a result of pre-treatments"
                />
                </Grid>
                <Grid item xs={12} sm={12} md={7}>

                <CardContent>
                    <Typography align="left"  paddingLeft="2em" paddingRight="2em" variant="body 1" paragraph>
                    Enzymatic digestion of lignocellulosic plant biomass is a key step in bio-refinery approaches for the production of 
                    biofuels and other valuable chemicals. However, the recalcitrance of this material in conjunction with its variability 
                    and heterogeneity strongly hampers the economic viability and profitability of biofuel production. To complement both 
                    academic and industrial experimental research in the field, we designed an advanced web application that encapsulates 
                    our in-house developed complex biophysical model of enzymatic plant cell wall degradation. PREDIG (https://predig.cs.hhu.de/) 
                    is a user-friendly, free, and fully open-source web application that allows the user to perform in silico experiments. Specifically,
                     it uses a Gillespie algorithm to run stochastic simulations of the enzymatic saccharification of a lignocellulose microfibril, 
                     at the mesoscale, in three dimensions. Such simulations can for instance be used to test the action of distinct enzyme cocktails 
                     on the substrate. Additionally, PREDIG can fit the model parameters to uploaded experimental time-course data, thereby returning
                      values that are intrinsically difficult to measure experimentally. This gives the user the possibility to learn which factors 
                    quantitatively explain the recalcitrance to saccharification of their specific biomass material.
                    </Typography>
                </CardContent>
                </Grid>
                </Grid>
            </Collapse>
        </Card >
    );
};

export default SakhaDe2023Card;
