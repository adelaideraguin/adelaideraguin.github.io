//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, IconButton, styled, Typography} from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import fattyacidsimage from '../images/Foko2023.png';
import fattyacidsimage1 from '../fatty_acids1.png';


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


const FattyAcidsCard = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card style={{ minHeight: "680px", display: 'flex', justifyContent: 'space-between', flexGrow: "1", flexDirection: 'column', position:"relative" }} elevation={5} >
            <Box>
                <CardHeader
                    title="Fatty Acids"
                />
                <Divider />
            </Box>
            <CardMedia sx={{
                 padding: "1em", width: "70%",
                margin: "0 auto", display: { xs: "flex", sm: "flex", md: "none" }}}
            
                component="img"
                image={fattyacidsimage1}
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
            <CardMedia sx={{
                padding: "1em", width: "70%",
                margin: "0 auto", display: { xs: "none", sm: "none", md: "flex" }}}
            
                component="img"
                image={fattyacidsimage}
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
                The synthesis and modification of fatty acids from carbohydrates are paramount for the production of lipids. Simultaneously, 
                lipids are pivotal energy storage in human health. They are associated with various metabolic diseases and their production 
                pathways are for instance candidate therapeutic targets for cancer treatments. To study the dynamics of fatty acid   <Typography style={{display:'inline-flex'}} sx={{fontStyle: 'italic'}}>de novo </Typography> synthesis and 
                the subsequent microsomal modifications, we develop a deterministic approach based on Ordinary Differential Equations. 
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

export default FattyAcidsCard;