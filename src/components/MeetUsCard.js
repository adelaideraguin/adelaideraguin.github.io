import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, IconButton, styled, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import photo from '../components/images/photo-collage.png';

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


const MeetUsCard = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card style={{ minHeight: "550px", display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }} elevation={5} >
            <Box>
                <CardHeader
                    title="Meet the Team"
                />
                <Divider />
            </Box>




            <CardMedia sx={{ padding: "1em", width: "100%", height: "200",
                margin: "0 auto" }}
                component="img"
                image={photo}
                alt="Group collage"
            />
            <CardContent>
                <Typography align='left' padding="1em" variant="body1" >
                After many years in the UK and Germany, we are back to France, at the National Center for Scientific Research (CNRS) in Bordeaux. Adélaïde Raguin got a Junior Professor Chair of Computer Sciences for Health Data and we are focussing on modelling cancer development and therapy.
                </Typography>
            </CardContent>

            <Box>
                <Divider />
                <CardActions >
                    <Button variant="contained" component={Link} to="/group">
                        Learn More
                    </Button>

                </CardActions>
            </Box>

        </Card >
    );
};

export default MeetUsCard;