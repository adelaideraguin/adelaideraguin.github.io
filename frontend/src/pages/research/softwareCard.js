import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, IconButton, styled, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../components/PREDIGLOGO.png";


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


const SoftwareCard = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (

        <Card style={{ minHeight: "550px", display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }} elevation={5}>
            <Box>
                <CardHeader
                    title="Use our Softwares"
                />
                <Divider />
            </Box>
            <CardMedia sx={{
                padding: "1em", maxHeight: 290,
                margin: "0 auto",
                width: "auto",
                height: "auto"
            }}
                component="img"
                image={logo}
                alt="Paella dish"
            />
            <CardContent>
                <Typography align='left' padding="1em" variant="body1" >
                We also develop user friendly interfaced tools and webpages for users to run <Typography style={{display:'inline-flex'}} sx={{fontStyle: 'italic'}}>in silico </Typography> experiments, 
                based on our stochastic simulation algorithms.
                </Typography>
            </CardContent>
            <Box>
                <Divider />
                <CardActions disableSpacing  >


                <Button variant="contained" component={Link} to="/software">
                        Learn More
                </Button>

                </CardActions>

            </Box>

        </Card >
    );
};

export default SoftwareCard;