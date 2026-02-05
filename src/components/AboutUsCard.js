import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, IconButton, styled, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";


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


const AboutUsCard = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card style={{ minHeight: "550px", display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }} elevation={5} >
            <Box>
                <CardHeader
                    title="LaBRI"
                />
                <Divider />
            </Box>




            <CardMedia
                component="img"
                image="https://www.labri.fr/sites/default/files/2021-04/LOGO_LABRI-INTITULE-BIG_0.png?h=d2365be5&itok=lRNoBEsl"
                alt="CCB Logo"
                sx={{
                padding: "1em",
                maxHeight: 400,      // won't exceed 400px tall
                maxWidth: "100%",    // won't overflow card width
                height: "auto",      // scales height proportionally
                width: "auto",       // scales width proportionally
                objectFit: "contain",
                display: "block",
                margin: "0 auto",    // center horizontally
            }}
            />
            <CardContent>
                <Typography variant="body1" align="center" >
                    You can find us in the Laboratoire Bordelais de Recherche en Informatique (LaBRI, CNRS UMR 5800)
                </Typography>
            </CardContent>

            <Box>
                <Divider />
                <CardActions >
                    <Button variant="contained" href="https://www.labri.fr/en">
                        Learn More
                    </Button>

                </CardActions>
            </Box>

        </Card >
    );
};

export default AboutUsCard;