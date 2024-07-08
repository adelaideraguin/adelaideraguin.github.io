import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, Grid, IconButton, styled, Typography } from "@mui/material";
import { useState } from "react";
import image from "../images/Sakhade2024.png";

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


const SakhaDe2024Card = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card  style={{ position:"relative", minHeight: "10px", display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }} elevation={5} >
            <Box>
                <CardHeader align="left"
                    title="Stochastic model highlights the impact of crystallinity on saccharification dynamics depending on plant chemotype and pre-treatment"
                />
                <Divider />
            </Box>
            <CardContent>
                <Typography align="left" variant="body1" >
                P S De, P M Grande, H Heise, H Klose and A Raguin (2024) Stochastic model highlights the impact of crystallinity on saccharification dynamics depending on plant chemotype and pre-treatment (Preprint)
                </Typography>
            </CardContent>
            <Box>
                <Divider />
                <CardActions disableSpacing>
            <Button variant="contained"  href="http://dx.doi.org/10.13140/RG.2.2.26381.96489">
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
                    alt="."
                />
                </Grid>
                <Grid item xs={12} sm={12} md={7}>

                <CardContent>
                    <Typography align="left"  paddingLeft="2em" paddingRight="2em" variant="body 1" paragraph>
                    Enzymatic saccharification of plant-sourced lignocellulosic biomass is a key step in biorefin-ery approaches. However, 
                    these biomasses in their raw form are quite recalcitrant, which invokes the need for pre-treatment processes aimed at not 
                    only increasing glucose conversion , but also better valorising non-carbohydrate biopolymers, such as lignin. Here, we use a 
                    twofold computational and experimental approach to investigate enzymatic saccharification time-courses for a couple of purely 
                    cellulosic substrates, and four plant-sourced lignocellu-losic biomasses following three different conditions: untreated, OrganoCat 
                    pre-treated with and without swelling. Considering the specific composition of each substrate, the model successfully reproduces the 
                    saccharification dynamics for each of the fifteen samples. It additionally provides values for the parameter Crystallinity Fraction
                     that faithfully replicate the substrate Crystallinity Indices experimentally determined by ssNMR. Importantly, we show that the 
                     Crystallinity Index of distinct biomasses is differently impacted by swelling, while the sugar release is consistently impacted 
                     by pre-treatment across biomasses. Eventually , both artificial cellulosic and plant-sourced lignocellulosic biomasses demonstrate 
                     that the sugar release is the result of the combination of the Crystallinity Fraction (the model parameter for experimentally measured 
                     ssNMR Crystallinity Index) and the digestibility ratio, the model parameter that represents in a coarse-grained manner complex spatial 
                     and structural features. Overall, our results stress the need for further experimental investigations that physically explain variations in 
                     the digestibility of crystalline bonds across biomasses and pre-treatment conditions. Additionally, we supplemented our work 
                    with theoretical investigations on a generic lignocellulosic substrate to highlight the roles of various model parameters in a qualitative manner.
                    </Typography>
                </CardContent>
                </Grid>
                </Grid>
            </Collapse>
        </Card >
    );
};

export default SakhaDe2024Card;
