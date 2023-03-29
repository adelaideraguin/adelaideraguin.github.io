import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, IconButton, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import ComputerIcon from '@mui/icons-material/GitHub';
import prediglogo from '../PREDIGLOGO.png';
import Rousset2023Card from '../paper_cards/Rousset2023';


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


const ThreeDimGlycogenCard = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ margin: "2em", marginTop: "1em" }} style={{ position:"relative", minHeight: "10px", display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }} elevation={5} >
            <Box>
                <CardHeader align="left"
                    title="Stochastic modeling of a three dimensional glycogen granule"
                />
                <Divider />
            </Box>
                <Typography variant="body 1"  align="left" padding="3em" >
                Access this code via GitHub and take a look at the associated paper. 
                </Typography>
            
            
            <Box>
            <Divider/>
                <CardActions >
                <Button variant="contained" startIcon={<ComputerIcon />} href="https://github.com/yvanrousset/Stochastic-modeling-of-a-three-dimensional-glycogen-granule">
                        To GitHub
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
                
                <Rousset2023Card/>
                </CardContent>
            </Collapse>
        
        </Card >
    );
};

export default ThreeDimGlycogenCard;