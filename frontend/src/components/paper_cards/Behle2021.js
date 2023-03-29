import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, IconButton, styled, Typography } from "@mui/material";
import { useState } from "react";

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


const Behle2021Card = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ margin: "2em", marginTop: "1em" }} style={{ position:"relative", minHeight: "10px", display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }} elevation={5} >
            <Box>
                <CardHeader align="left"
                    title="Stochastic model of lignocellulosic material saccharification"
                />
                <Divider />
            </Box>
            <CardContent>
                <Typography align="left" variant="body1" >
                Behle E, Raguin A (2021) Stochastic model of lignocellulosic material saccharification. PLOS Computational Biology 17(9): e1009262.
                </Typography>
            </CardContent>
            <Box>
                <Divider />
                <CardActions disableSpacing>
                    <Button variant="contained" href="https://doi.org/10.1371/journal.pcbi.1009262">
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
                padding: "1em", maxWidth: 800,
                margin: "0 auto",
            }}
                component="img"
                image="https://journals.plos.org/ploscompbiol/article/figure/image?size=large&id=10.1371/journal.pcbi.1009262.g001"
                alt=" Schematic representation of the structure of the substrate in the model.
                (a) Several cellulose microfibrils embedded in a matrix of hemicellulose reinforced by lignin. 
                (b) Side-view of the top 50 nm of a single cellulose microfibril made of 36 polymers, and part 
                of the surrounding matrix showing the relative arrangement of the hemicellulose and lignin 
                polymers as well as gaps. In (a) and (b), polymer types are color-coded (cellulose: dark gray; 
                hemicellulose: light gray; lignin: black). (c) Top-down view of the structure shown in (b). The 
                core enclosed by the dotted line is composed of 36 polymers of cellulose (black crosses), and its
                 structure follows that used by Ding et al. The positions in the two outer layers (gray crosses) 
                 can each either be hemicellulose or lignin polymers."
            />
                <CardContent>
                    <Typography variant="h5">Abstract</Typography>
                    <Typography variant="body 1" paragraph>
                    The processing of agricultural wastes towards extraction of renewable resources is recently being considered as a promising alternative 
                    to conventional biofuel production. The degradation of agricultural residues is a complex chemical process that is currently time 
                    intensive and costly. Various pre-treatment methods are being investigated to determine the subsequent modification of the material 
                    and the main obstacles in increasing the enzymatic saccharification. In this study, we present a computational model that complements 
                    the experimental approaches. We decipher how the three-dimensional structure of the substrate impacts the saccharification dynamics. 
                    We model a cell wall microfibril composed of cellulose and surrounded by hemicellulose and lignin, with various relative abundances 
                    and arrangements. This substrate is subjected to digestion by different cocktails of well characterized enzymes. The saccharification 
                    dynamics is simulated in silico using a stochastic procedure based on a Gillespie algorithm. As we additionally implement a fitting 
                    procedure that optimizes the parameters of the simulation runs, we are able to reproduce experimental saccharification time courses 
                    for corn stover. Our model highlights the synergistic action of enzymes, and confirms the linear decrease of sugar conversion when 
                    either lignin content or crystallinity of the substrate increases. Importantly, we show that considering the crystallinity of cellulose
                     in addition to the substrate composition is essential to 
                    interpret experimental saccharification data. Finally, our findings support the hypothesis of xylan being partially crystalline.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card >
    );
};

export default Behle2021Card;
