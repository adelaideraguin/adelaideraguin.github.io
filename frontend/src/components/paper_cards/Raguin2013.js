import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, IconButton, styled, Typography } from "@mui/material";
import { useState } from "react";
import transport_fig from "../transport_fig.png";

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


const Raguin2013Card = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ margin: "2em", marginTop: "1em" }} style={{ position:"relative", minHeight: "10px", display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }} elevation={5} >
            <Box>
                <CardHeader align="left"
                    title="Role of network junctions for the totally asymmetric simple exclusion process"
                />
                <Divider />
            </Box>

            <CardContent>
                <Typography align="left" variant="body1" >
                Adélaïde Raguin, Andrea Parmeggiani, and Norbert Kern. Role of network junctions for the totally asymmetric simple exclusion process.
                 Phys. Rev. E 88, 042104
                </Typography>
            </CardContent>
            <Box>
                <Divider />
                <CardActions disableSpacing>
                    <Button variant="contained" href="https://doi.org/10.1103/PhysRevE.88.042104">
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
                padding: "1em", maxWidth: 600,
                margin: "0 auto",
            }}
                component="img"
                image="https://journals.aps.org/pre/article/10.1103/PhysRevE.88.042104/figures/3/medium"
                alt="Schematic illustration of TASEP on a closed-loop (figure-of-eight) topology."
            />
                <CardContent>
                    <Typography variant="h5">Abstract</Typography>
                    <Typography variant="body 1" paragraph>
                    We study the effect of local regulation mechanisms on stochastic network traffic, based on simple examples. 
                    Using the totally asymmetric simple exclusion process on a multiloop structure in which several segments share 
                    a single junction, we illustrate several mechanisms: (i) additional segments improve transport but the effect 
                    saturates due to blockage, (ii) bias reduces the overall transport and leads to several regimes, (iii) “pumping” 
                    particles out of the junctions, via a locally increased hopping rate, allows us to compensate the bottlenecks but 
                    becomes futile beyond a characteristic rate which we determine. 
                    We provide a generic discussion of combinations of these effects, including phase diagrams in terms of the control parameters.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card >
    );
};

export default Raguin2013Card;
