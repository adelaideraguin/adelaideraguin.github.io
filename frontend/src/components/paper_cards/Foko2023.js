import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, Grid, IconButton, styled, Typography } from "@mui/material";
import { useState } from "react";
import figure from "../images/Foko2023.png";

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


const Foko2023Card = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card  style={{ position:"relative", minHeight: "10px", display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }} elevation={5} >
            <Box>
                <CardHeader align="left"
                    title="Kinetic data for modeling the dynamics of the enzymes involved in animal fatty acid synthesis"
                />
                <Divider />
            </Box>

            <CardContent>
                <Typography align="left" variant="body1" >
                CA Foko Kuate, O Ebenhöh, B M Bakker and A Raguin. Kinetic data for modeling the dynamics of the
enzymes involved in animal fatty acid synthesis. Bioscience Reports (2023) 43 BSR20222496
                </Typography>
            </CardContent>
            <Box>
                <Divider />
                <CardActions disableSpacing>
                    <Button variant="contained" href="https://doi.org/10.1042/BSR20222496s">
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
                alt="Simulation of a comprehensive translation system comprising tRNAs, ribosomes and codon-biased mRNAs to analyse tRNA synthetase depletion."
            />
            </Grid>
                <Grid item xs={12} sm={12} md={7}>
                <CardContent>
                    <Typography align="left"  paddingLeft="2em" paddingRight="2em" variant="body 1" paragraph>
                    The synthesis and modification of fatty acids from carbohydrates are paramount for the production of lipids. 
                    Simultaneously, lipids are pivotal energy storage in human health. They are associated with various metabolic diseases 
                    and their production pathways are for instance candidate therapeutic targets for cancer treatments. The fatty acid 
                    <Typography style={{display:'inline-flex'}} sx={{fontStyle: 'italic'}}>de novo</Typography> synthesis (FADNS) occurs in the 
                    cytoplasm, while the microsomal modification of fatty acids (MMFA) happens at the surface of the endoplasmic reticulum. 
                    The kinetics and regulation of these complex processes involve several enzymes. In mammals, the main ones are the acetyl-CoA carboxylase (ACC), 
                    the fatty acid synthase (FAS), the very-long-chain fatty acid elongases (ELOVL 1-7), and the desaturases (delta family). 
                    Their mechanisms and expression in different organs have been studied for more than 50 years. However, modeling them in the 
                    context of complex metabolic pathways is still a challenge. Distinct modeling approaches can be implemented. Here we focus on
                     dynamic modeling using ordinary differential equations based on kinetic rate laws. This requires a combination of knowledge 
                     on the enzymatic mechanisms and their kinetics, as well as the interactions between the metabolites, and between enzymes and 
                     metabolites. In this review, after recalling the modeling framework, we support the development of 
                    such a mathematical approach by reviewing the available kinetic information of the enzymes involved.
                    </Typography>
                </CardContent>
                </Grid>
                </Grid>
            </Collapse>
        </Card >
    );
};

export default Foko2023Card;
