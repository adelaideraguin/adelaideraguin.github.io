import React from 'react';
import { Card, CardMedia, Typography, Link } from '@mui/material';
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

                {/* CONTENT */}
                <Card sx={{ marginTop: "2em", position: "relative" }}>

                    {/* DESKTOP */}
                    <Typography
                        variant="h5"
                        sx={{
                            textAlign: "left",
                            margin: "1em",
                            display: { xs: "none", md: "block" }
                        }}
                    >
                        <p>
                            Hiring opportunities will be posted here as they become available.
                        </p>

                        <p>
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
                        </p>
                    </Typography>

                    {/* MOBILE */}
                    <Typography
                        variant="body1"
                        sx={{
                            textAlign: "left",
                            margin: "1em",
                            display: { xs: "block", md: "none" }
                        }}
                    >
                        <p>
                            Hiring opportunities will be posted here as they become available.
                        </p>

                        <p>
                            Master's students from physics, computer science, and quantitative biology
                            that are interested in an internship are encouraged to contact
                            Jun.-Prof. Adélaïde Raguin{" "}
                            <Link
                                href="mailto:adelaide.raguin@u-bordeaux.fr"
                                underline="none"
                                sx={{ verticalAlign: "middle", ml: 1 }}
                            >
                                <EmailOutlinedIcon sx={{ color: "black" }} />
                            </Link>
                        </p>
                    </Typography>

                </Card>
            </div>
        </section>
    );
}

export default Hiring;