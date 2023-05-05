import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, IconButton, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import synthesis_fig from "../protein_synthesis.png";


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


const ProteinSynthesisCard = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card style={{ minHeight: "680px", display: 'flex', justifyContent: 'space-between', flexGrow: "1", flexDirection: 'column', position:"relative" }} elevation={5} >
            <Box>
                <CardHeader
                    title="Protein Synthesis"
                />
                <Divider />
            </Box>
            <CardMedia sx={{
                padding: "1em", maxWidth: 600,
                margin: "0 auto",
            }}
                component="img"
                image={synthesis_fig}
                alt="Simulation of a comprehensive translation system comprising tRNAs, ribosomes and codon-biased mRNAs to analyse tRNA synthetase depletion. (A) Global translation model of mRNAs by ribosomes including competition for tRNAs, tRNA synthetase and ribosomes. The ribosome from the reservoir enters the mRNA-lattice m
                    via the initiation rate αm at the first lattice site, codon i=0
                    ⁠, and terminates with the constant rate β
                    at the last lattice site, codon N(m)
                    ⁠. On the lattice, the ribosome translates the codon i
                    with the hopping rate k(i)
                    and may unbind from the lattice with the drop off rate γ⁠. If the next codon is occupied, translation is not allowed. 
                    Note, that the ribosome has a footprint W=9,
                    i.e. the next codon is codon i+W
                    (not shown here). Translating a lattice site uses a charged tRNA which then will be recharged via the charging rate χaa
                    according to the corresponding amino acid (aa). (B, C) Link between doxycycline and tRNA charging with and without feedback: 
                    Conceptual idea of the feedback loop, model without (B) and with (C) doxycycline: Due to the feedback loop, the initiation rate 
                    is reduced proportional to the rate of protein production. In the presence of doxycycline, the number of glutamine synthetases 
                    (denoted by S) decreases. As a consequence, the ribosomal speed along the mRNA decreases and fewer proteins are produced per unit time,
                    and so, less initiation factors. This in turn decreases the initiation rate. Hence, the ribosomal current also decreases, thereby decreasing 
                    the demand for glutamine synthetases. This is why in the presence of doxycycline the charging level of glutamine in (F) and (G) is almost the 
                    same as in the case without doxycycline."
            />
            <CardContent align='left'>
                <Typography variant="body 1"  align='left' padding="1em" >
                Proteins are central cellular actors. They typically make most of the dry weight of cells, and drive metabolism pathways. 
                Many pharmacological active compounds are enzymes, and it is essential to understand the economy of the cell to synthesis 
                enzymes, for instance from heterologous genes. On the one hand, we focus on modelling translation and its regulation as a
                 complex one dimensional transport process. On the other hand, we are interested in tuning mRNA codon sequences, 
                using the redundancy of the genetic code, in order to improve the expression rate of accurately folded proteins.</Typography>
            </CardContent>
            <Box>
            <Divider/>
                <CardActions >
                    <Button variant="contained" component={Link} to="/publications">
                        publications
                    </Button>

                </CardActions>
            </Box>

        
        </Card >
    );
};

export default ProteinSynthesisCard;