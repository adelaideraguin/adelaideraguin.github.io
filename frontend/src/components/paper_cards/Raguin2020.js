import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, IconButton, styled, Typography } from "@mui/material";
import { useState } from "react";
import transport_fig from "../transport_fig.png";

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


const Raguin2020Card = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ margin: "2em", marginTop: "1em" }} style={{ position:"relative", minHeight: "10px", display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }} elevation={5} >
            <Box>
                <CardHeader align="left"
                    title="Stochastic modelling of collective motor protein transport through a crossing of microtubules"
                />
                <Divider />
            </Box>

            <CardContent>
                <Typography align="left" variant="body1" >
                Raguin, A., Kern, N., & Parmeggiani, A. (2020). Stochastic modelling of collective motor protein transport through a crossing 
                of microtubules. Journal of theoretical biology, 505, 110370.
                </Typography>
            </CardContent>
            <Box>
                <Divider />
                <CardActions disableSpacing>
                    <Button variant="contained" href="https://doi.org/10.1016/j.jtbi.2020.110370">
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
            <CardMedia sx={{
                padding: "1em", maxWidth: 500,
                margin: "0 auto",
            }}
                component="img"
                image={transport_fig}
                alt="Structure of amylopectin and higher-order arrangements of starch. 
                Two α-1,4/α-1,6-linked glucose polymers, amylopectin and amylose (not shown), comprise starch. 
                Amylopectin is branched with 4–5% α-1,6 linkages, yielding a tree-like structure. This structure 
                has A-chains that are external and unbranched, B-chains that carry other branches, and one C-chain 
                which has the molecule’s single reducing end (indicated with a sphere). Within clusters of linear 
                amylopectin chain segments, double helices form and pack into ordered lamellar arrays, forming either
                 the A- or B-type allomorph, that stack with a 9–10 nm periodicity. This is the basis for the
                  semi-crystalline nature of starch, and amylopectin lamellae are organized into higher-order structures, 
                  such as ‘blocklets’ and concentric ‘growth rings"
            />
                <CardContent>
                    <Typography variant="h5">Abstract</Typography>
                    <Typography variant="body 1" paragraph>
                    The cytoskeleton in eukaryotic cells plays several crucial roles. In terms of intracellular transport, 
                    motor proteins use the cytoskeletal filaments as a backbone along which they can actively transport 
                    biological cargos such as vesicles carrying biochemical reactants. Crossings between such filaments
                     constitute a key element, as they may serve to alter the destination of such payload. Although motor 
                     proteins are known to display a rich behaviour at such crossings, the latter have so far only been
                      modelled as simple branching points. Here we explore a model for a crossing between two microtubules
                       which retains the individual tracks consisting of protofilaments, and we construct a schematic representation 
                       of the transport paths. We study collective transport exemplified by the Totally Asymmetric Simple Exclusion
                        Process (TASEP), and provide a full analysis of the transport features and the associated phase diagram, 
                        by a generic mean-field approach which we confirm through particle-based stochastic simulations. In particular
                         we show that transport through such a compound crossing cannot be approximated from a coarse-grained structure 
                         with a simple branching point. Instead, it gives rise to entirely new and counterintuitive features: the 
                         fundamental current-density relation for traffic flow is no longer a single-valued function, and it furthermore
                          differs according to whether it is observed upstream or downstream from the crossing. 
                    We argue that these novel features may be directly relevant for interpreting experimental measurements.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card >
    );
};

export default Raguin2020Card;
