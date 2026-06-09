import React from 'react';
import { Card, CardMedia, Typography, Link, Box, Divider } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import background from '../components/images/background.png';

function Hiring() {
    return (
        <section>
            <div className="container-fluid">

                {/* HEADER */}
                <Card sx={{ marginTop: "1em", position: "relative" }}>
                    <CardMedia
                        height="300"
                        component="h1"
                        sx={{
                            color: "white",
                            textAlign: "center",
                            padding: "1.5em",
                            margin: "0"
                        }}
                        image={background}
                        alt="A field of corn"
                    >
                        <Typography variant="h2">
                            Join Us
                        </Typography>
                    </CardMedia>
                </Card>

                {/* MAIN CONTENT */}
                <Card sx={{ marginTop: "2em", padding: 2 }}>

                    {/* ===================== NEW PHD AD ===================== */}
                    <Card
                        sx={{
                            marginBottom: 3,
                            padding: 2,
                            backgroundColor: "#f8f9fb",
                            borderLeft: "6px solid black",
                            textAlign: "left"   // ✅ ensures full left alignment inside
                        }}
                    >

                        {/* TITLE (CENTERED) */}
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 600,
                                mb: 2,
                                textAlign: "center"   // ✅ only title centered
                            }}
                        >
                            PhD Position in Computational Biophysics
                        </Typography>

                        {/* BODY (LEFT ALIGNED) */}
                        <Typography variant="body1" paragraph>
                            I am looking for a PhD candidate in Computational Biophysics at the Bordeaux Laboratory for Research in Computer Sciences (LaBRI) in France, to work on a project in collaboration with the Bordeaux Institute of Oncology (BRIC). The PhD student will develop an advanced framework for stochastic simulations of cancer tissue growth, that will be calibrated with experimental data they will analyse. No experimental work will be performed by the PhD student, but by the collaborator lab.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            Applicants must fulfill all of the following criteria:
                        </Typography>

                        <Box sx={{ pl: 2, mb: 2 }}>
                            <Typography variant="body1">
                                • an MSc degree in Physics, Computer Sciences, or Applied Mathematics. Applicants with a background in Biology will not be considered
                            </Typography>
                            <Typography variant="body1">
                                • strong experience in C/C++ and Python programming and data analysis
                            </Typography>
                            <Typography variant="body1">
                                • strong interest in modelling of living systems
                            </Typography>
                            <Typography variant="body1">
                                • very good command of English for written and oral communication
                            </Typography>
                            <Typography variant="body1">
                                • ability to collaborate in a multidisciplinary environment
                            </Typography>
                            <Typography variant="body1">
                                • ability to work autonomously in an international team
                            </Typography>
                        </Box>

                        <Typography variant="body1">
                            Applicants should contact per email{" "}
                            <Link
                                href="mailto:adelaide.raguin@u-bordeaux.fr"
                                underline="none"
                                sx={{ ml: 1, verticalAlign: "middle" }}
                            >
                                <EmailOutlinedIcon sx={{ fontSize: 24, color: "black" }} />
                            </Link>
                        </Typography>

                        <Typography variant="body1" sx={{ mt: 1 }}>
                            Please ensure your email subject is exactly: <b>PhD application - MODINVAD project</b>, and please attach your CV and cover letter. In your CV, please include 3 contacts for references.
                        </Typography>
                    </Card>

                    <Divider sx={{ my: 3 }} />

                    {/* ===================== OLD TEXT ===================== */}
                    <Box sx={{ px: 1 }}>

                        <Typography variant="h5" paragraph>
                            Hiring opportunities will be posted here as they become available.
                        </Typography>

                        <Typography variant="h5" paragraph>
                            Master's students from physics, computer science, and quantitative biology
                            that are interested in an internship or a PhD are encouraged to contact
                            Jun.-Prof. Adélaïde Raguin{" "}
                            <Link
                                href="mailto:adelaide.raguin@u-bordeaux.fr"
                                underline="none"
                                sx={{ verticalAlign: "middle", ml: 1 }}
                            >
                                <EmailOutlinedIcon sx={{ fontSize: 28, color: "black" }} />
                            </Link>
                        </Typography>

                    </Box>

                </Card>
            </div>
        </section>
    );
}

export default Hiring;