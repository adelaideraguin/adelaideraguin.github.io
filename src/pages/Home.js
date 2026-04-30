import React from 'react';

import {
    Box,
    Card,
    CardMedia,
    Grid,
    Typography
} from "@mui/material";

import ResearchPaperCard from '../components/ResearchPaperCard';
import MeetUsCard from '../components/MeetUsCard';
import SoftwareCard from './research/softwareCard';
import LatestNewsCard from '../components/latest_news';

import background from '../components/images/background.png';

function Home() {

    return (
        <section>
            <div className="container-fluid">

                {/* MAIN WRAPPER */}
                <Box
                    sx={{
                        position: "relative",
                        mt: 2
                    }}
                >

                    {/* HERO SECTION */}
                    <Card
                        sx={{
                            overflow: "hidden"
                        }}
                    >
                        <CardMedia
                            component="div"
                            image={background}
                            alt="A field of corn"
                            sx={{
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                color: "white",
                                textAlign: "center",
                                py: { xs: 6, md: 10 },
                                px: 2
                            }}
                        >
                            <Typography
                                variant="h1"
                                sx={{
                                    color: "white",
                                    mb: 3,
                                    fontSize: {
                                        xs: "2.5rem",
                                        sm: "3.5rem",
                                        md: "5rem"
                                    }
                                }}
                            >
                                Adélaïde Raguin's
                                <Box component="div">
                                    Research Team
                                </Box>
                            </Typography>

                            <Typography
                                variant="h2"
                                sx={{
                                    color: "white",
                                    fontSize: {
                                        xs: "1.5rem",
                                        sm: "2rem",
                                        md: "3rem"
                                    }
                                }}
                            >
                                Computational and Theoretical Biophysics
                            </Typography>
                        </CardMedia>
                    </Card>

                    {/* CONTENT SECTION */}
                    <Card
                        sx={{
                            mt: 2,
                            px: 2,
                            pb: 3
                        }}
                    >

                        {/* DESKTOP TEXT */}
                        <Typography
                            variant="h5"
                            align='left'
                            sx={{
                                mt: 4,
                                mb: 4,
                                px: { md: 3 },
                                color: "black",
                                display: { xs: "none", md: "block" }
                            }}
                        >
                            <p>
                                We develop <strong>digital twins based on biophysical and mathematical principles</strong> to study the dynamics of complex biological systems at the cellular and sub-cellular scales. Our main expertise lies on stochastic simulations, that we apply to a variety of systems, including the synthesis and degradation of large polymeric 3D structures, cytoskeletal transport, and protein expression.
                            </p>

                            <p>
                                <strong>
                                    Adélaïde Raguin obtained a Junior Professor Chair of Computer Sciences for Health Data at the National Centre for Scientific Research (CNRS).
                                </strong>
                                {" "}
                                In the context of that Chair, we are currently focussing on modelling cancer development and therapy, deciphering the interplay between genetics and mechanics across scales.
                            </p>
                        </Typography>

                        {/* MOBILE TEXT */}
                        <Typography
                            variant="body1"
                            align='left'
                            sx={{
                                mt: 3,
                                mb: 3,
                                px: 1,
                                color: "black",
                                display: { xs: "block", md: "none" }
                            }}
                        >
                            <p>
                                We develop <strong>digital twins based on biophysical and mathematical principles</strong> to study the dynamics of complex biological systems at the cellular and sub-cellular scales. Our main expertise lies on stochastic simulations, that we apply to a variety of systems, including the synthesis and degradation of large polymeric 3D structures, cytoskeletal transport, and protein expression.
                            </p>

                            <p>
                                <strong>
                                    Adélaïde Raguin obtained a Junior Professor Chair of Computer Sciences for Health Data at the National Centre for Scientific Research (CNRS).
                                </strong>
                                {" "}
                                In the context of that Chair, we are currently focussing on modelling cancer development and therapy, deciphering the interplay between genetics and mechanics across scales.
                            </p>
                        </Typography>

                        {/* CARDS */}
                        <Grid
                            container
                            spacing={3}
                            sx={{ mb: 4 }}
                            alignItems="stretch"
                        >
                            <Grid item xs={12} sm={12} md={4} sx={{ display: "flex" }}>
                                <ResearchPaperCard />
                            </Grid>

                            <Grid item xs={12} sm={12} md={4} sx={{ display: "flex" }}>
                                <MeetUsCard />
                            </Grid>

                            <Grid item xs={12} sm={12} md={4} sx={{ display: "flex" }}>
                                <SoftwareCard />
                            </Grid>
                        </Grid>

                        {/* NEWS */}
                        <Box sx={{ mb: 3 }}>
                            <LatestNewsCard />
                        </Box>

                    </Card>

                </Box>

            </div>
        </section>
    );
}

export default Home;