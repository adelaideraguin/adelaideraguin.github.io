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

            <CardMedia sx={{
                padding: "1em", maxWidth: 800,
                margin: "auto",
            }}
                component="img"
                image="https://www.ceplas.eu/fileadmin/Resources/Public/Bootstrap/img/CEPLAS-Logo.svg"
                alt="Logo for CEPLAS"
            />
            <CardContent>
                <Typography variant="body1" >
                    To learn more about CEPLAS you can visit their homepage linked below.
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
                    <Typography paragraph align="left">
                        

                    The Cluster of Excellence on Plant Sciences (CEPLAS) integrates the resources of the Universities of Cologne and Düsseldorf, 
                    the Max Planck Institute for Plant Breeding Research, and the Forschungszentrum Jülich into an internationally leading plant
                     science centre that attracts world-class faculty and junior researchers. It addresses grand challenges through world-class 
                     fundamental research on complex plant traits of agronomic relevance that impact on yield and adaptation to limited resources. 
                     Hence, it generates knowledge that 
                    is essential for designing and breeding plants that react in a predictable way to future challenges (SMART plants).
                    </Typography>
                </CardContent>
            </Collapse>
        </Card >
    );
};

export default CEPLASCard;
