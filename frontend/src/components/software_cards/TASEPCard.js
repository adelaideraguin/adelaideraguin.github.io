import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, IconButton, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import ComputerIcon from '@mui/icons-material/Launch';
import prediglogo from '../PREDIGLOGO.png';
import Raguin2023Card from '../paper_cards/Raguin2023';
import McFarland2020Card from '../paper_cards/McFarland2020';
import image from '../transport_fig.png';


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


const TASEPCard = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ margin: "2em", marginTop: "1em" }} style={{ position:"relative", minHeight: "10px", display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }} elevation={5} >
            <Box>
                <CardHeader align="left"
                    title="Totally Asymmetric Simple Exclusion Process (TASEP) model describing the movement of particles (ribosomes) along a lattice (the mRNA)"
                />
                <Divider />
            </Box>
            
            <Typography variant="body 1" align="left" padding="3em">
                Access this code via the BioModels repository and take a look at the associated paper!
                </Typography>
                
         


            <Box>
            <Divider/>
                <CardActions >
                <Button variant="contained" startIcon={<ComputerIcon />} href="https://www.ebi.ac.uk/biomodels/MODEL2001080004#Overview">
                        To Repository
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
                <CardContent>
                <McFarland2020Card/>
                </CardContent>
            </Collapse>

        
        </Card >
    );
};

export default TASEPCard;