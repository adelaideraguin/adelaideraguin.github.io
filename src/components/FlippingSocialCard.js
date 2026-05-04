import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    Button,
    Box,
    Divider
} from "@mui/material";

import ResearchGateIcon from '../components/RG_Logo.png';

const FlippingSocialCard = () => {
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
        >
            <Box><Divider /></Box>

            <Box
                sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between"
                }}
            >
                {/* ResearchGate Logo */}
                <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                    <CardMedia
                        component="img"
                        image={ResearchGateIcon}
                        alt="ResearchGate Logo"
                        sx={{ maxWidth: 200, height: "auto" }}
                    />
                </Box>

                {/* Text */}
                <CardContent>
                    <Typography variant="h5">
                        ResearchGate
                    </Typography>
                </CardContent>

                {/* Button */}
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
        </Card>
    );
};

export default FlippingSocialCard;