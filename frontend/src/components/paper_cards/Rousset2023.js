import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, Grid, IconButton, styled, Typography } from "@mui/material";
import { useState } from "react";
import figure from "../images/Rousset2023.png";

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


const Rousset2023Card = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card style={{ position:"relative", minHeight: "10px", display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }} elevation={5} >
            <Box>
                <CardHeader align="left"
                    title="Stochastic modelling of a three-dimensional glycogen granule synthesis and impact of the branching enzyme"
                />
                <Divider />
            </Box>

            <CardContent>
                <Typography align="left" variant="body1" >
                Y Rousset, O Ebenhöh, A Raguin (2023) Stochastic modelling of a three-dimensional glycogen granule synthesis and impact of the branching enzyme. PLoS Computational Biology. 19(5): e1010694.
                </Typography>
            </CardContent>
            <Box>
                <Divider />
                <CardActions disableSpacing>
                    <Button variant="contained" href="https://doi.org/10.1371/journal.pcbi.1010694">
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
                padding: "2em", maxWidth: 700,
                margin: "0 auto",
            }}
                component="img"
                image={figure}
                alt="Main enzyme reactions involved in the synthesis and breakdown of
glycogen. In vivo, the GS and GBE enzymes synthesise glycogen, while the GP and
GDE degrade it. Besides, GN is the initial precursor of the granule and stands in its
core. Enzymes are noted in orange, glucose residues are in blue, and GN is highlighted
with a yellow sphere."
            />

                </Grid>
                <Grid item xs={12} sm={12} md={7}>

            
                <CardContent>
                    <Typography align="left"  paddingLeft="2em" paddingRight="2em" variant="body 1" paragraph>
                    In humans, glycogen storage diseases result from metabolic inborn errors, and can lead to severe phenotypes and lethal 
                    conditions. Besides these rare diseases, glycogen is also associated to widely spread societal burdens such as diabetes. 
                    Glycogen is a branched glucose polymer synthesised and degraded by a complex set of enzymes. Over the past 50 years, the 
                    structure of glycogen has been intensively investigated. Yet, the interplay between the detailed three-dimensional glycogen 
                    structure and the related enzyme activity is only partially characterised and still to be fully understood. In this article, 
                    we develop a stochastic coarse-grained and spatially resolved model of branched polymer biosynthesis following a Gillespie algorithm. 
                    Our study largely focusses on the role of the branching enzyme, and first investigates the properties of the model with generic 
                    parameter values, before comparing it to <Typography style={{display:'inline-flex'}} sx={{fontStyle: 'italic'}}>in vivo</Typography> experimental data in mice. It arises that the ratio of glycogen synthase
                     over branching enzyme reaction rates drastically impacts the structure of the granule. We deeply investigate the mechanism of 
                     branching and parametrise it using distinct lengths. Not only do we consider various possible sets of values for these lengths, 
                     but also distinct rules to apply them. We show how combining various values for these lengths finely tunes glycogen macromolecular 
                     structure. Comparing the model with experimental data confirms that we can accurately reproduce glycogen chain length distributions 
                     in wild type mice. Additional granule properties obtained for this fit are also in good agreement with typically reported values in 
                     the experimental literature. Nonetheless, we find that the mechanism of branching must be more flexible than usually reported.
Overall, our model provides a theoretical basis to quantify the effect that single enzymatic parameters, in particular of the branching enzyme, have 
on the chain length distribution.
Our generic model and methods can be applied to any glycogen data set, and could in particular contribute to characterise the mechanisms responsible 
for glycogen storage disorders.
                    </Typography>
                </CardContent>
                </Grid>
                </Grid>
            </Collapse>
        </Card >
    );
};

export default Rousset2023Card;
