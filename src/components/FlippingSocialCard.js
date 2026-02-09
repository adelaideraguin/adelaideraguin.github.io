import { useState, useEffect } from "react";
import {
    Card, CardMedia, CardContent, CardActions,
    Typography, Button, Box, Divider, Fade
} from "@mui/material";

import LinkedInIcon from '../components/LinkedIn_icon.png';
import ResearchGateIcon from '../components/RG_Logo.png';

const FlippingSocialCard = () => {
    const [showLinkedIn, setShowLinkedIn] = useState(true);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        if (paused) return;

        const interval = setInterval(() => {
            setShowLinkedIn(prev => !prev);
        }, 3500);

        return () => clearInterval(interval);
    }, [paused]);

    return (
        <Card
            elevation={5}
            sx={{
                minHeight: "400px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
            }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <Box><Divider /></Box>

            <Box sx={{ position: "relative", flexGrow: 1 }}>

                {/* ------------------ LINKEDIN ------------------ */}
                <Fade in={showLinkedIn} timeout={800}>
                    <Box
                        sx={{
                            position: "absolute",
                            inset: 0,
                            display: showLinkedIn ? "flex" : "none",
                            flexDirection: "column",
                            justifyContent: "space-between"
                        }}
                    >
                        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                            <CardMedia
                                component="img"
                                image={LinkedInIcon}
                                alt="LinkedIn Logo"
                                sx={{ maxWidth: 200, height: "auto" }}
                            />
                        </Box>

                        <CardContent>
                            <Typography variant="h5">LinkedIn</Typography>
                        </CardContent>

                        <Box>
                            <Divider />
                            <CardActions sx={{ justifyContent: "center" }}>
                                <Button
                                    variant="contained"
                                    href="http://linkedin.com/in/ad%C3%A9la%C3%AFde-raguin"
                                    target="_blank"
                                >
                                    Go to LinkedIn
                                </Button>
                            </CardActions>
                        </Box>
                    </Box>
                </Fade>

                {/* ------------------ RESEARCHGATE ------------------ */}
                <Fade in={!showLinkedIn} timeout={800}>
                    <Box
                        sx={{
                            position: "absolute",
                            inset: 0,
                            display: !showLinkedIn ? "flex" : "none",
                            flexDirection: "column",
                            justifyContent: "space-between"
                        }}
                    >
                        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                            <CardMedia
                                component="img"
                                image={ResearchGateIcon}
                                alt="ResearchGate Logo"
                                sx={{ maxWidth: 200, height: "auto" }}
                            />
                        </Box>

                        <CardContent>
                            <Typography variant="h5">ResearchGate</Typography>
                        </CardContent>

                        <Box>
                            <Divider />
                            <CardActions sx={{ justifyContent: "center" }}>
                                <Button
                                    variant="contained"
                                    href="https://www.researchgate.net/profile/Adelaide-Raguin"
                                    target="_blank"
                                >
                                    Go to ResearchGate
                                </Button>
                            </CardActions>
                        </Box>
                    </Box>
                </Fade>

            </Box>
        </Card>
    );
};

export default FlippingSocialCard;
