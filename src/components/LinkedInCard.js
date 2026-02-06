import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Typography } from "@mui/material";
import { useState } from "react";
import LinkedInIcon from '../components/LinkedIn_icon.png';

const LinkedInCard = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Card
            elevation={5}
            sx={{
                minHeight: "400px",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: "relative",
                textAlign: 'center'
            }}
        >
            {/* Header */}
            <Box>
                <CardHeader none />
                <Divider />
            </Box>

            {/* Centered Logo */}
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }}>
                <CardMedia
                    component="img"
                    image={LinkedInIcon}
                    alt="Linked In Logo"
                    sx={{
                        maxWidth: 200,
                        width: '100%',
                        height: 'auto'
                    }}
                />
            </Box>

            {/* Text pinned near bottom */}
            <CardContent sx={{ mt: 'auto' }}>
                <Typography variant="body1">
                    You can contact Dr Raguin <Typography component="span" sx={{ fontStyle: 'italic' }}>via </Typography> LinkedIn by clicking here.
                </Typography>
            </CardContent>

            {/* Button at bottom */}
            <Box>
                <Divider />
                <CardActions sx={{ justifyContent: 'center' }}>
                    <Button variant="contained" href="http://linkedin.com/in/ad%C3%A9la%C3%AFde-raguin">
                        To LinkedIn
                    </Button>
                </CardActions>
            </Box>
        </Card>
    );
};

export default LinkedInCard;
