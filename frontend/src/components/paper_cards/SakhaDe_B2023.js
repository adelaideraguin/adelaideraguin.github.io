import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, Grid, IconButton, styled, Typography } from "@mui/material";
import { useState } from "react";
import figure from "../images/SakhaDeB.jpg";

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


const SakhaDeB2023Card = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card style={{ position:"relative", minHeight: "10px", display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }} elevation={5} >
            <Box>
                <CardHeader align="left"
                    title="A detailed sensitivity analysis identifies the key factors influencing the enzymatic saccharification of lignocellulosic biomass"
                />
                <Divider />
            </Box>

            <CardContent>
                <Typography align="left" variant="body1" >
                P S De, J Theilmann, and A Raguin (2024) A detailed sensitivity analysis identifies the key factors influencing the enzymatic saccharification of lignocellulosic biomass. Computational and Structural Biotechnology Journal. (23)
                </Typography>
            </CardContent>
            <Box>
                <Divider />
                <CardActions disableSpacing>
                    <Button variant="contained" href="https://doi.org/10.1016/j.csbj.2024.01.006">
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
                alt="Total Sobol’s indices (ST) obtained when our stochastic biophysical model is compared to the experimental saccharification 
                time-courses of Bura et al.’s data (30) (three different pre-treatment severities: A low; B medium; and C high) and of Liu et al.’s 
                data (31) (three different pre-treatment temperatures: D 140°C; E 160°C; and F 180°C). The indices are normalised with respect to the 
                total Sobol’s index (ST) of the CBH processive reaction rate Embedded Image of each pre-treatment condition, which is indicated with a 
                black line. The columns from left to
                 right show the conditions resulting in increasing final saccharification yield (at 72 hours), for each dataset (see table 1)."
            />
            </Grid>
                <Grid item xs={12} sm={12} md={7}>

                <CardContent>
                    <Typography align="left"  paddingLeft="2em" paddingRight="2em" variant="body 1" paragraph>
                    Corn stover is the most abundant form of crop residue that can serve as a source of lignocellulosic biomass
                     in biorefinery approaches, for instance for the production of bioethanol. In such biorefinery processes, 
                     the constituent polysaccharide biopolymers are typically broken down into simple monomeric sugars by enzymatic 
                     saccharification, for further downstream fermentation into bioethanol. However, the recalcitrance of this material 
                     to enzymatic saccharification invokes the need for innovative pre-treatment methods to increase sugar conversion yield.
                      Here, we focus on experimental glucose conversion time-courses for corn stover lignocellulose that has been pre-treated 
                      with different acid-catalysed processes and intensities. We identify the key parameters that determine 
                      enzymatic saccharification dynamics by performing a Sobol's sensitivity analysis on the comparison between
                       the simulation results from our complex stochastic biophysical model, and the experimental data that we 
                       accurately reproduce. We find that the parameters relating to cellulose crystallinity and those associated 
                       with the cellobiohydrolase activity are predominantly driving the enzymatic saccharification dynamics. We 
                       confirm our computational results using mathematical calculations for a purely cellulosic substrate. On the 
                       one hand, having identified that only five parameters drastically influence the saccharification dynamics 
                       allows us to reduce the dimensionality of the parameter space (from nineteen to five parameters), which we 
                       expect will significantly speed up our fitting algorithm for comparison of experimental and simulated 
                       saccharification time-courses. On the other hand, these parameters directly highlight key targets for 
                       experimental endeavours in the optimisation of pre-treatment and saccharification conditions. Finally, 
                       this systematic and two-fold theoretical study, based on both mathematical and computational approaches, 
                       provides experimentalists with key insights that will support them in rationalising their complex experimental results.
                    </Typography>
                </CardContent>
                </Grid>
                </Grid>
            </Collapse>
        </Card >
    );
};

export default SakhaDeB2023Card;
