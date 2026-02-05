import React from 'react';
import AboutUsCard from '../components/AboutUsCard';
import LinkedInCard from '../components/LinkedInCard';
import EmailCard from '../components/EmailCard';
import { Card, CardMedia, Grid, Typography, Box } from '@mui/material';
import background from '../components/images/background.png';
import MapPin from '../components/mappin.png';

function Contact() {
    return (
        <section>
            <div className="container-fluid">

                {/* Header Card */}
                <Card sx={{ marginTop: "1em", marginBottom: "2em", position: "relative" }}>
                    <CardMedia
                        height="300"
                        component="h1"
                        sx={{ color: "white", textAlign: "center", padding: "1.5em", margin: "0" }}
                        image={background}
                        alt="Wavey Binary"
                    >
                        <Typography variant="h2">
                            Contact and Social Media
                        </Typography>
                    </CardMedia>
                </Card>

                {/* Cards Grid */}
                <Grid container justifyContent="space-around" spacing={3} sx={{ position: "relative" }} marginBottom="2em">
                    <Grid item xs={12} sm={12} md={4}>
                        <LinkedInCard />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <AboutUsCard />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <EmailCard />
                    </Grid>
                </Grid>

                {/* Contact Info Card with Map Pin */}
                <Card sx={{ position: "relative", textAlign: "center", padding: "1em" }}>
                    <Typography variant="h5" sx={{ margin: "1em" }}>
                        You can find us in the Laboratoire Bordelais de Recherche en Informatique (LaBRI, CNRS UMR 5800)
                    </Typography>
                    <Typography variant="h5" sx={{ margin: "1em" }}>
                        University of Bordeaux - Campus Talence
                        33405 Talence, France
                    </Typography>

                    {/* Clickable Map Pin */}
                    <Box display="flex" justifyContent="center" mt={2} mb={2}>
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
