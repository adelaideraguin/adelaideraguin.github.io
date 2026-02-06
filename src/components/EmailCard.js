import { Box, Card, CardContent, CardHeader, CardMedia, Divider, Typography, Tooltip, Button } from "@mui/material";
import EmailIcon from '../components/email.png';
import React, { useState } from 'react';

const EmailCard = () => {
    const email = 'adelaide.raguin@u-bordeaux.fr';
    const [tooltipText, setTooltipText] = useState('Click to copy email');

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setTooltipText('Copied!');
        setTimeout(() => {
            setTooltipText('Click to copy email');
        }, 2000);
    };

    const handleEmailCompose = () => {
        window.location.href = `mailto:${email}`;
    };

    return (
        <Card
            style={{
                minHeight: "400px",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: "relative",
            }}
            elevation={5}
        >
            {/* Header */}
            <Box>
                <CardHeader none />
                <Divider />
            </Box>

            {/* Centered Logo */}
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <CardMedia
                    component="img"
                    image={EmailIcon}
                    alt="Email icon"
                    sx={{
                        padding: "1em",
                        maxWidth: 230,
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                    }}
                />
            </Box>

            {/* Email text */}
            <CardContent sx={{ textAlign: 'center' }}>
                <Tooltip title={tooltipText} arrow>
                    <Typography
                        variant="body1"
                        onClick={handleCopy}
                        sx={{
                            textDecoration: 'underline',
                            cursor: 'pointer',
                            transition: 'color 0.3s ease',
                            '&:hover': {
                                color: '#1976d2',
                            }
                        }}
                    >
                        {email}
                    </Typography>
                </Tooltip>
            </CardContent>

            {/* Bottom button (ALWAYS at bottom) */}
            <Box>
                <Divider />
                <Box sx={{ p: 1, textAlign: "center" }}>
                    <Button variant="contained" onClick={handleEmailCompose}>
                        To Email
                    </Button>
                </Box>
            </Box>
        </Card>
    );
};

export default EmailCard;
