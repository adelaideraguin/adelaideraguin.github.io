import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, Grid, IconButton, styled, Typography } from "@mui/material";
import { useState } from "react";
import figure from "../images/Raguin2017.png";

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


const Raguin2017Card = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ margin: "2em", marginTop: "1em" }} style={{ position:"relative", minHeight: "10px", display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }} elevation={5} >
            <Box>
                <CardHeader align="left"
                    title="Design starch: stochastic modeling of starch granule biogenesis"
                />
                <Divider />
            </Box>

            <CardContent>
                <Typography align="left" variant="body1" >
                Adélaïde Raguin, Oliver Ebenhöh; Design starch: stochastic modeling of starch granule biogenesis. 
                Biochem Soc Trans 15 August 2017; 45 (4): 885–893.
                </Typography>
            </CardContent>
            <Box>
                <Divider />
                <CardActions disableSpacing>
                    <Button variant="contained" href="https://doi.org/10.1042/BST20160407">
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
            <Grid container spacing={1} alignItems="center"  justifyContent="space-around" >
                <Grid item xs={12} sm={12} md={5}>
            <CardMedia sx={{
                padding: "2em", maxWidth: 600,
                margin: "0 auto",
            }}
                component="img"
                image={figure}
                alt="Structure and components of starch granules: amylopectin and amylose."
            />
            </Grid>
            <Grid item xs={12} sm={12} md={7}>

                <CardContent>
                    <Typography align="left"  paddingLeft="2em" paddingRight="2em" variant="body 1" paragraph>
                    Starch is the most widespread and abundant storage carbohydrate in plants and the main source of carbohydrate in the human diet. 
                    Owing to its remarkable properties and commercial applications, starch is still of growing interest. Its unique granular structure 
                    made of intercalated layers of amylopectin and amylose has been unraveled thanks to recent progress in microscopic imaging, but 
                    the origin of such periodicity is still under debate. Both amylose and amylopectin are made of linear chains of α-1,4-bound glucose 
                    residues, with branch points formed by α-1,6 linkages. The net difference in the distribution of chain lengths and the branching 
                    pattern of amylose (mainly linear), compared with amylopectin (racemose structure), leads to different physico-chemical properties. 
                    Amylose is an amorphous and soluble polysaccharide, whereas amylopectin is insoluble and exhibits a highly organized structure of 
                    densely packed double helices formed between neighboring linear chains. Contrarily to starch degradation that has been investigated 
                    since the early 20th century, starch production is still poorly understood. Most enzymes involved in starch growth (elongation, 
                    branching, debranching, and partial hydrolysis) are now identified. However, their specific action, their interplay (cooperative 
                    or competitive), and their kinetic properties are still largely unknown. After reviewing recent results on starch structure and 
                    starch growth and degradation enzymatic activity, we discuss recent results and current challenges for growing polysaccharides 
                    on granular surface. Finally, we highlight the importance of novel stochastic models to support the analysis of recent 
                    and complex experimental results, and to address how macroscopic properties emerge from enzymatic activity and structural rearrangements.
                    </Typography>
                </CardContent>
                </Grid>
                </Grid>
            </Collapse>
        </Card >
    );
};

export default Raguin2017Card;
