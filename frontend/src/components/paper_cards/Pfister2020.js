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


const Pfister2020Card = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ margin: "2em", marginTop: "1em" }} style={{ position:"relative", minHeight: "10px", display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }} elevation={5} >
            <Box>
                <CardHeader align="left"
                    title="Theoretical and experimental approaches to understand the biosynthesis of starch granules in a physiological context"
                />
                <Divider />
            </Box>

            <CardContent>
                <Typography align="left" variant="body1" >
                Pfister, B., Zeeman, S.C., Rugen, M.D. et al. Theoretical and experimental approaches to understand the 
                biosynthesis of starch granules in a physiological context. Photosynth Res 145, 55–70 (2020).
                </Typography>
            </CardContent>
            <Box>
                <Divider />
                <CardActions disableSpacing>
                    <Button variant="contained" href="https://doi.org/10.1007/s11120-019-00704-y">
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
                image="https://media.springernature.com/full/springer-static/image/art%3A10.1007%2Fs11120-019-00704-y/MediaObjects/11120_2019_704_Fig1_HTML.png?as=webp"
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
                <CardContent>
                    <Typography variant="h5">Abstract</Typography>
                    <Typography variant="body 1" paragraph>
                    Starch, a plant-derived insoluble carbohydrate composed of glucose polymers, is the principal carbohydrate in our diet 
                    and a valuable raw material for industry. The properties of starch depend on the arrangement of glucose units within 
                    the constituent polymers. However, key aspects of starch structure and the underlying biosynthetic processes are not 
                    well understood, limiting progress towards targeted improvement of our starch crops. In particular, the major component of starch, 
                    amylopectin, has a complex three-dimensional, branched architecture. This architecture stems from the combined actions of a multitude of enzymes, each having broad specificities that are difficult to capture experimentally. In this review, we reflect on experimental approaches and limitations to decipher the enzymes’ specificities and explore possibilities for in silico simulations of these activities. We believe that the synergy between experimentation and simulation is needed for the correct interpretation of experimental data and holds the potential to greatly advance our understanding of the overall starch biosynthetic process. We furthermore propose that the formation of glucan secondary structures, concomitant with its synthesis, 
                    is a previously overlooked factor that directly affects amylopectin architecture through its impact on enzyme function.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card >
    );
};

export default Pfister2020Card;
