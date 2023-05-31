import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, IconButton, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import transport_fig from "../cytoskeleton1.png";
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


const TransportCard = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card style={{ minHeight: "680px", display: 'flex', justifyContent: 'space-between', flexGrow: "1", flexDirection: 'column', position:"relative" }} elevation={5} >
            <Box>
                <CardHeader
                    title="Cytoskeletal Transport"
                />
                <Divider />
            </Box>
            <CardMedia sx={{
                padding: "1em", width: "80%",
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
            <CardContent padding="1em" align='left'>
                The cytoskeleton in eukaryotic cells plays several crucial roles. In terms of intracellular transport, 
                motor proteins use the cytoskeletal filaments as a backbone along which they can actively transport 
                biological cargos such as vesicles carrying biochemical reactants.
                 We use the Totally Asymmetric Simple Exclusion Process to study the properties of transport at the junction of microtubules.    
            </CardContent>
            <Box>
            <Divider/>
                <CardActions >
                <Button variant="contained" component={Link} to="/publications">
                        Publications
                    </Button>

                </CardActions>
            </Box>

        
        </Card >
    );
};

export default TransportCard;