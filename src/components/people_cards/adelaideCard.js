import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Divider,
    Grid,
    Typography
} from "@mui/material";

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { useState } from "react";
import photo from "./Raguin.jpg";

const AdelaideCard = () => {

    const [expanded, setExpanded] = useState(false);

    return (
        <Card
            sx={{ marginTop: "2em" }}
            style={{
                position: "relative",
                minHeight: "500px",
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'column'
            }}
            elevation={5}
        >
            <Box>
                <CardHeader
                    title="Jun.-Prof. Adélaïde Raguin, PhD, Habil."
                />
                <Divider />
            </Box>

            <CardContent>
                <Grid
                    container
                    spacing={1}
                    alignItems="flex-start"
                    justifyContent="center"
                >
                    {/* IMAGE */}
                    <Grid item xs={7} sm={12} md={3.5}>
                        <CardMedia
                            sx={{
                                padding: "1em",
                                maxWidth: 280,
                                margin: "0 auto",
                            }}
                            component="img"
                            image={photo}
                            alt="A smart photo of Dr Adelaide Raguin"
                        />
                    </Grid>

                    {/* TEXT */}
                    <Grid item xs={12} sm={12} md={6}>

                        <Typography align='left' variant="body1">

                            <p>
                                Adélaïde Raguin studied Physics at the University of Montpellier, where she received her PhD in theoretical Physics in December 2013, for her research on statistical methods to model transport at network junctions, motivated by the cytoskeletal transport, under the supervision of Prof. Andrea Parmeggiani and Dr Norbert Kern. For her postdoctoral studies she first joined the team of Prof. Carmen Romano at King's College, University of Aberdeen, and then the group of Prof. Oliver Ebenhöh in Düsseldorf. Since 2021, she established her independent research team, funded on third party funding, at Heinrich-Heine University Düsseldorf. She obtained her Habilitation in Physics in January 2025 at the University of Montpellier.
                            </p>

                            <p>
                                Currently, she is Junior Professor Chair in Health Data Sciences (CNRS Institute for Computer Sciences) at Bordeaux Computer Science Research Laboratory (LaBRI, UMR 5800).
                            </p>

                            <p>
                                In parallel with her research and supervision activities, Adélaïde Raguin has been involved in large amounts of Physics and Mathematics teaching, including a{" "}
                                <Typography
                                    style={{ display: 'inline-flex' }}
                                    sx={{ fontStyle: 'italic' }}
                                >
                                    Monitorat
                                </Typography>{" "}
                                during the three years of her PhD. She led the module "Analytical and Numerical Techniques" for Life Science Bachelor students at the International College at Robert Gordon University of Aberdeen and the module "Stochastic Models of Biological Systems" in the Master's degree of Computer Sciences at Heinrich Heine University Düsseldorf. At University of Bordeaux, she is a teacher of the module "Methodology: Introduction to logical and scientific reasoning", in the Computer Science Bachelor Programme.
                            </p>

                        </Typography>

                        {/* BUTTONS */}
                        <Grid
                            container
                            spacing={1}
                            alignItems="center"
                            justifyContent="center"
                            marginTop={"1em"}
                        >
                            <Grid item>
                                <Button
                                    variant="outlined"
                                    size="large"
                                    href="https://www.researchgate.net/profile/Adelaide-Raguin"
                                >
                                    Research Gate
                                </Button>
                            </Grid>

                            <Grid item>
                                <Button
                                    variant="outlined"
                                    size="large"
                                    startIcon={<EmailOutlinedIcon />}
                                    href="mailto:adelaide.raguin@u-bordeaux.fr"
                                >
                                    Email
                                </Button>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default AdelaideCard;