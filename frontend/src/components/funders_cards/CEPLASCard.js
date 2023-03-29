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


const CEPLASCard = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card style={{ minHeight: "500px", display: 'flex', justifyContent: 'space-between', flexDirection: 'column', position:"relative" }} elevation={5} >
            <Box>
                <CardHeader
                    title="CEPLAS"
                />
                <Divider />
            </Box>
            <CardMedia sx={{
                padding: "1em", maxWidth: 800,
                margin: "0 auto",
            }}
                component="img"
                image="https://www.ceplas.eu/fileadmin/Resources/Public/Bootstrap/img/CEPLAS-Logo.svg"
                alt="Logo for CEPLAS"
            />
            <CardContent>
                <Typography variant="body1" >
                    We are funded by CEPLAS. To learn more about CEPLAS you can visit their homepage linked below.
                </Typography>
            </CardContent>
            <Box>
                <Divider />
                <CardActions disableSpacing>
                    <Button variant="contained" href="https://www.ceplas.eu/en/home/">
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
                <CardContent>
                    <Typography variant="h5">About</Typography>
                    <Typography paragraph>
                        


CEPLAS aims to assemble a blueprint of the genetic mechanisms that control complex plant traits with sufficient detail 
to enable predictions of trait performance in different environments. This knowledge is crucial for the design of new 
crop varieties using predictive trait engineering and will be important for sustainable food security for a growing population faced with climate change. 

CEPLAS continues to contribute innovative solutions to these major challenges. 

One of the major areas of CEPLAS research is mapping plant traits from genomic informa­tion, thereby enabling novel, 
predictive breeding strategies. This research aims to develop a mechanistic understanding of the design principles underpinning 
complex plant phenotypes, which emerge from variations in a limited set of evolutionarily deeply conserved elements and recurring
 patterns in development and metabolism as well as the interaction between plants and their microbial environment. 

CEPLAS aims to mechanistically define how complex plant traits contribute to optimized plant performance in any given environmental 
context. Understanding the mechanisms that integrate development and metabolism to control life cycle transitions and adaptation to the environment, 
and understanding the role of soil biology and biochemistry in mediating functions at the soil-plant interface, are emerging topics in plant 
biology that are of critical importance for developing strategies to sustainably increase crop plant yield.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card >
    );
};

export default CEPLASCard;
