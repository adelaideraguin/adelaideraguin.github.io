import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Typography } from "@mui/material";
import { useState } from "react";
import ResearchGateIcon from '../components/RG_Logo.png';

const ResearchGateCard = () => {
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
                    image={ResearchGateIcon}
                    alt="ResearchGate Logo"
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
                    You can connect with Jun.-Prof. Adélaïde Raguin, PhD, Habil. <Typography component="span" sx={{ fontStyle: 'italic' }}>via </Typography> ResearchGate.
                </Typography>
            </CardContent>

            {/* Bottom Button */}
            <Box>
                <Divider />
                <CardActions sx={{ justifyContent: 'center' }}>
                    <Button variant="contained" href="https://www.researchgate.net/profile/Adelaide-Raguin">
                        To ResearchGate
                    </Button>
                </CardActions>
            </Box>
        </Card>
    );
};

export default ResearchGateCard;
