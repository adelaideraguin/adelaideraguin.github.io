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
            <CardMedia sx={{
                padding: "1em", maxWidth: 600,
                margin: "0 auto",
            }}
                component="img"
                image="https://port.silverchair-cdn.com/port/content_public/journal/biochemsoctrans/45/4/10.1042_bst20160407/2/bst-2016-0407c_01.jpeg?Expires=1679403550&Signature=2ZywAODcs9FV2FLzsbqCw21opO3A7F70Ey8PY-la2hrF-1Hu0qmbsicdTx8enZTtqR4NJbI0sn32uqqz4AYGgfWz10KAzNWP1NHC-yg~pMMQXFl0sbBWIK4zl8Czq5OXRDEr2NcDWL4VtS1lnRq0PkJO-AMqlr-raTPkNFq7JX3E8PCSV0g7iIoSgkpr1f-DoID5lHleOc4dpxAYv7vgoGgRslDBf7Vjd~sOSOpXEmsfvlNY~5f72upKltMUILnYmjfpI6NcpuzyU4gM5v7JJIo~g2uDoyS9zwUGxG6cRcJ3SjJKYKxkT4eByOWFVXpBTtBT4bRuFLrqrPuIZlj9IA__&Key-Pair-Id=APKAIE5G5CRDK6RD3PGA"
                alt="Structure and components of starch granules: amylopectin and amylose."
            />
                <CardContent>
                    <Typography variant="h5">Abstract</Typography>
                    <Typography variant="body 1" paragraph>
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
            </Collapse>
        </Card >
    );
};

export default Raguin2017Card;
