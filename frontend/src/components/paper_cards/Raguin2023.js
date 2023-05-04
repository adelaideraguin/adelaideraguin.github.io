import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, Grid, IconButton, styled, Typography } from "@mui/material";
import { useState } from "react";
import figure from "../images/Raguin_expressioninhost_light.png";

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


const Raguin2023Card = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card style={{ position:"relative", minHeight: "10px", display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }} elevation={5} >
            <Box>
                <CardHeader align="left"
                    title="ExpressInHost: A Codon Tuning Tool for the Expression of Recombinant Proteins in Host Microorganisms"
                />
                <Divider />
            </Box>

            <CardContent>
                <Typography align="left" variant="body1" >
                Raguin, A., Stansfield, I. and Romano, M.C., 2023. ExpressInHost: A Codon Tuning Tool for the Expression of 
                Recombinant Proteins in Host Microorganisms. Journal of Open Research Software, 11(1), p.2
                </Typography>
            </CardContent>
            <Box>
                <Divider />
                <CardActions disableSpacing>
                    <Button variant="contained" href="https://doi.org/10.5334/jors.385">
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
                alt="Effects of the number of proteins and phylogenetic diversity in the input set of orthologous genes, shown 
                for mode 2. The name of the native organism whose protein is removed from the set of orthologous sequences is 
                shown on the abscissa, while the amino acid conservation is measured on the ordinate. 
                The less proteins considered and the closer they are related, the more amino acids are conserved."
            />
            </Grid>
                <Grid item xs={12} sm={12} md={7}>

                <CardContent>
                    <Typography align="left"  paddingLeft="2em" paddingRight="2em" variant="body 1" paragraph>
                    ExpressInHost (https://gitlab.com/a.raguin/expressinhost) is a GTK/C++ based user friendly graphical interface 
                    that allows tuning the codon sequence of an mRNA for recombinant protein expression in a host microorganism. 
                    Heterologous gene expression is widely implemented in biotechnology companies and academic research laboratories. 
                    However, expression of recombinant proteins can be challenging. On the one hand, maximising translation speed is 
                    important, especially in scalable production processes relevant to biotechnology companies, but on the other hand, 
                    solubility problems often arise as a consequence, since translation ‘pauses’ might be key to allow the nascent polypeptide 
                    chain to fold appropriately. To address this challenge, we have developed a software that offers three distinct modes to 
                    tune codon sequences using the genetic code redundancy. The tuning strategies implemented take into account the specific
                     tRNA resources of the host and that of the native organism. They balance rapid translation and native speed mimicking, 
                    which might be important to allow proper protein folding, thereby avoiding protein solubility problems.
                    </Typography>
                </CardContent>
                </Grid>
                </Grid>
            </Collapse>
        </Card >
    );
};

export default Raguin2023Card;
