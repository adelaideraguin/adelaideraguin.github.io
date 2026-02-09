import React from 'react';
import AboutUsCard from '../components/AboutUsCard';
import EmailCard from '../components/EmailCard';
import { Card, CardMedia, Grid, Typography, Box } from '@mui/material';
import background from '../components/images/background.png';
import MapPin from '../components/mappin.png';
import FlippingSocialCard from '../components/FlippingSocialCard';

function Contact() {
    return (
        <section>
            <div className="container-fluid" style={{ padding: 0 }}>

                {/* Header Card */}
                <Card sx={{ marginTop: 16, marginBottom: 16, position: 'relative' }}>
                    <CardMedia
                        height="300"
                        component="h1"
                        sx={{ color: 'white', textAlign: 'center', padding: '1.5em', margin: 0 }}
                        image={background}
                        alt="Wavey Binary"
                    >
                        <Typography variant="h2">
                            Contact and Social Media
                        </Typography>
                    </CardMedia>
                </Card>

                {/* Cards Grid with minimal spacing */}
                <Grid container justifyContent="center" spacing={0.5} sx={{ margin: 1 }}>

                    <Grid item xs={12} sm={6} md={3} sx={{ padding: 1.5 }}>
                        <FlippingSocialCard />
                    </Grid>

                    <Grid item xs={12} sm={6} md={3} sx={{ padding: 1.5 }}>
                        <AboutUsCard />
                    </Grid>

                    <Grid item xs={12} sm={6} md={3} sx={{ padding: 1.5 }}>
                        <EmailCard />
                    </Grid>

                </Grid>

                {/* Contact Info Card with Map Pin */}
                <Card sx={{ position: 'relative', textAlign: 'center', padding: 2, mt: 2 }}>
                    <Typography variant="h5" sx={{ margin: 1 }}>
                        We are located in the LaBRI Building at the
                    </Typography>
                    <Typography variant="h5" sx={{ margin: 1 }}>
                        University of Bordeaux, Talence Campus, 33405 Talence, France
                    </Typography>

                    {/* Clickable Map Pin */}
                    <Box display="flex" justifyContent="center" mt={1} mb={1}>
                        <a
                            href="https://maps.app.goo.gl/CrFo2GUAMbPz25tTA"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={MapPin}
                                alt="Map Pin"
                                style={{ width: 160, height: 100, cursor: 'pointer' }}
                            />
                        </a>
                    </Box>
                </Card>

            </div>
        </section>
    );
}

export default Contact;
