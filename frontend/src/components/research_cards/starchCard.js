//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, IconButton, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import starchimage from '../starch.png';
import starchimage1 from '../starch1.png';


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


const StarchCard = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card style={{ minHeight: "680px", display: 'flex', justifyContent: 'space-between', flexGrow: "1", flexDirection: 'column', alignContent: 'stretch', position:"relative" }} elevation={5} >
            <Box>
                <CardHeader
                    title="Starch"
                />
                <Divider />
            </Box>
            <CardMedia sx={{
                padding: "2em", width: "80%",
                margin: "0 auto", display: { xs: "flex", sm: "flex", md: "none" }
            }}
                component="img"
                image={starchimage1}
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
                padding: "2em", width: "80%",
                margin: "0 auto", display: { xs: "none", sm: "none", md: "flex" }
            }}
                component="img"
                image={starchimage}
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
                Starch is the second most abundant glucose polymer on earth after cellulose, and the main source of energy in human diet. The major component of starch, amylopectin, has a complex three-dimensional, 
                branched architecture. This architecture stems from the combined actions of a multitude of enzymes, each having broad specificities 
                that are difficult to capture experimentally. 
                We are thus interested in understanding how the underlying enzymatic synthesis and degradation processes interplay with the amylopectin structure.
               
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

export default StarchCard;