import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, Grid, IconButton, styled, Typography } from "@mui/material";
import { useState } from "react";
import image from "../images/benjanete2024.png";

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


const BenJanete2024Card = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card  style={{ position:"relative", minHeight: "10px", display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }} elevation={5} >
            <Box>
                <CardHeader align="left"
                    title="Transport at a complex multiple-input-multiple-output TASEP junction"
                />
                <Divider />
            </Box>
            <CardContent>
                <Typography align="left" variant="body1" >
                A Ben Janete, P S De, A Raguin (2024) Transport at a complex multiple-input-multiple-output TASEP junction. (Preprint)
                </Typography>
            </CardContent>
            <Box>
                <Divider />
                <CardActions disableSpacing>
                    <Button variant="contained" href="10.13140/RG.2.2.35661.04326">
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
                image={image}
                    alt="Current-density relation at the junction of a V(1:1) lattice (with L = 100 sites) for varying
µ and ν values. (a) µ < ν, the curve becomes asymmetric and the maximum current is observed for
ρ <˜ 0.5. (b) µ = ν, the curve remains symmetric along ˜ρ = 0.5, but is lower for lower values of µ and
ν. (c) µ > ν, the curve becomes asymmetric and the maximum current is observed for ˜ρ > 0.5. The
points correspond to the Gillespie simulation results and the lines to the numerical resolution of the
mean-field."
                />
                </Grid>
                <Grid item xs={12} sm={12} md={7}>

                <CardContent>
                    <Typography align="left"  paddingLeft="2em" paddingRight="2em" variant="body 1" paragraph>
The Totally Asymmetric Simple Exclusion Process (TASEP) is used to study transport in a myriad of systems including networks where multiple input 
segments are connected to multiple output segments via a common junction site, also called a MIMO junction. Here, we investigate transport at a 
MIMO junction with complex kinetic rules within the TASEP framework, by developing an innovative numerical resolution method including solving the 
conservation of the mean-field current at the junction using Constrained Optimisation, supplemented with stochastic simulations following a Gillespie 
algorithm. We observe that lattices with the same ratio of the number of upstream segments to the number of downstream segments have the same phase diagrams, 
in the absence of bias and bottleneck effect. In the absence of bias, the bottleneck effect, which reduces the current, arises in particular in lattices
 where the rates of absorption into and pumping out of the junction lie under a certain threshold which is dependent on the number of upstream and downstream 
 segments, as well as the junction density. Not only does the bottleneck effect alter transport on the segments and the junction, but also the junction 
 current-density relation from quadratic to piece-wise quasi-linear. As soon as a bias is introduced on the side of the junction with lower number of 
 segments, a bottleneck effect arises. As biases are introduced on either or both of the upstream and downstream segments, a very complex phenomenology 
 emerges on the overall lattice, involving a combinatorial explosion of the phases. Filling the lattice does not only depend on the rates at the junction 
 (absorption, pumping, and biases), and the number of upstream and downstream segments, but also on the values of the entrance and exit rates at the boundaries 
 of the overall lattice. Furthermore, particle-hole symmetry, well-established for a simple TASEP segment, extends here as well, enabling us to recover 
 the phase diagrams for opposite lattices. Our study makes it feasible to investigate complex TASEP junctions and uncover their intricate dynamics which can 
 be mapped to different transport systems in the real world.
                    </Typography>
                </CardContent>
                </Grid>
                </Grid>
            </Collapse>
        </Card >
    );
};

export default BenJanete2024Card;
