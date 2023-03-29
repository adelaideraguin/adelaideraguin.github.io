import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, IconButton, styled, Typography } from "@mui/material";
import { useState } from "react";
import figure from "../McFarlandfig.jpeg";

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


const McFarland2020Card = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ margin: "2em", marginTop: "1em" }} style={{ position:"relative", minHeight: "10px", display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }} elevation={5} >
            <Box>
                <CardHeader align="left"
                    title="The molecular aetiology of tRNA synthetase depletion: induction of a GCN4 amino acid starvation response 
                    despite homeostatic maintenance of charged tRNA levels"
                />
                <Divider />
            </Box>

            <CardContent>
                <Typography align="left" variant="body1" >
                Matthew R McFarland, Corina D Keller, Brandon M Childers, Stephen A Adeniyi, Holly Corrigall, Adélaïde Raguin, M Carmen Romano, 
                Ian Stansfield, The molecular aetiology of tRNA synthetase depletion: induction of a GCN4 amino acid starvation response despite 
                homeostatic maintenance of charged tRNA levels, Nucleic Acids Research, Volume 48, Issue 6, 06 April 2020, Pages 3071–3088
                </Typography>
            </CardContent>
            <Box>
                <Divider />
                <CardActions disableSpacing>
                    <Button variant="contained" href="https://doi.org/10.1093/nar/gkaa055">
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
                padding: "1em", maxWidth: 700,
                margin: "0 auto",
            }}
                component="img"
                image={figure}
                alt="Simulation of a comprehensive translation system comprising tRNAs, ribosomes and codon-biased mRNAs to analyse tRNA synthetase depletion."
            />
                <CardContent>
                    <Typography variant="h5">Abstract</Typography>
                    <Typography variant="body 1" paragraph>
                    During protein synthesis, charged tRNAs deliver amino acids to translating ribosomes, and are then re-charged by tRNA synthetases (aaRS).
                     In humans, mutant aaRS cause a diversity of neurological disorders, but their molecular aetiologies are incompletely characterised. To 
                     understand system responses to aaRS depletion, the yeast glutamine aaRS gene (GLN4) was transcriptionally regulated using doxycycline 
                     by tet-off control. Depletion of Gln4p inhibited growth, and induced a GCN4 amino acid starvation response, indicative of uncharged tRNA 
                     accumulation and Gcn2 kinase activation. Using a global model of translation that included aaRS recharging, Gln4p depletion was simulated, 
                     confirming slowed translation. Modelling also revealed that Gln4p depletion causes negative feedback that matches translational demand
                      for Gln-tRNAGln to aaRS recharging capacity. This maintains normal charged tRNAGln levels despite Gln4p depletion, confirmed experimentally 
                      using tRNA Northern blotting. Model analysis resolves the paradox that Gln4p depletion triggers a GCN4 response, despite maintenance of
                       tRNAGln charging levels, revealing that normally, the aaRS population can sequester free, uncharged tRNAs during aminoacylation. Gln4p
                        depletion reduces this sequestration capacity, allowing uncharged tRNAGln to interact with Gcn2 kinase. The study sheds new light on 
                        mutant aaRS disease aetiologies, 
                    and explains how aaRS sequestration of uncharged tRNAs can prevent GCN4 activation under non-starvation conditions.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card >
    );
};

export default McFarland2020Card;
