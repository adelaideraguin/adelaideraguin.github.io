import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, IconButton, styled, Typography } from "@mui/material";
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
        <Card 
            style={{ 
                minHeight: "400px", 
                display: 'flex', 
                flexDirection: 'column',
                justifyContent: 'space-between'   // ⬅ ensures bottom button
            }} 
            elevation={5}
        >


            {/* Centered Logo */}
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <CardMedia
                    component="img"
                    image="https://www.labri.fr/sites/default/files/2021-04/LOGO_LABRI-INTITULE-BIG_0.png?h=d2365be5&itok=lRNoBEsl"
                    alt="LaBRI Logo"
                    sx={{
                        padding: "1em",
                        maxHeight: 400,
                        maxWidth: "100%",
                        height: "auto",
                        width: "auto",
                        objectFit: "contain",
                        display: "block",
                    }}
                />
            </Box>

            {/* Centered bottom text */}
            <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="body1">
                    We are a part of the Laboratoire Bordelais de Recherche en Informatique 
                    (LaBRI, CNRS UMR 5800) at the University of Bordeaux, France.
                </Typography>
            </CardContent>

            {/* Bottom Button */}
            <Box>
                <Divider />
                <CardActions sx={{ justifyContent: 'center' }}>
                    <Button variant="contained" href="https://www.labri.fr/en">
                        Learn More
                    </Button>
                </CardActions>
            </Box>
        </Card>
    );
};

export default AboutUsCard;
