import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Divider,
    Grid,
    IconButton,
    styled,
    Typography
} from "@mui/material";

import { useState } from "react";
import photo from './david.jpeg';

import LinkedInIcon from '@mui/icons-material/LinkedIn';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const GabrielCard = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card
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
                    title="Dr Gabriel David"
                />
                <Divider />
            </Box>

            <CardContent sx={{ flexGrow: 1 }}>
                <Grid
                    container
                    spacing={1}
                    alignItems="flex-start"
                    justifyContent="space-around"
                >

                    <Grid item xs={7} sm={12} md={3.5}>
                        <CardMedia
                            sx={{
                                padding: "1em",
                                maxWidth: 350,
                                margin: "0 auto",
                                display: "flex",
                                alignItems: "flex-start"
                            }}
                            component="img"
                            image={photo}
                            alt="A smart photo of Dr Gabriel David"
                        />
                    </Grid>

                    <Grid item xs={12} sm={12} md={7}>

                        <Typography
                            variant="body1"
                            align='left'
                        >
                            Gabriel is a postdoctoral researcher with a PhD in theoretical physics applied to biology from the University of Montpellier. He worked in Montpellier on DNA-bound protein liquid-liquid phase separation and cytoplasm self-organisation at the Laboratoire Charles Coulomb, and on image analysis and deep learning techniques for live and intelligent 3D/3D+t microscopy at the LIRMM Institute. After two years of working for a startup, he joined Raguin's team at Heinrich Heine University in Düsseldorf, to deploy physically-informed 3D+t numerical twins of engineered living materials and to develop research softwares for extracting quantitative insights from experimental data to parametrise theoretical models.
                        </Typography>

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
                                    startIcon={<LinkedInIcon />}
                                    size="large"
                                    href="https://www.linkedin.com/in/gabriel-david-968aa3191/"
                                >
                                    LinkedIn
                                </Button>
                            </Grid>

                            <Grid item>
                                <Button
                                    variant="outlined"
                                    size="large"
                                    href="https://www.researchgate.net/profile/Gabriel-David-5"
                                >
                                    Research Gate
                                </Button>
                            </Grid>
                        </Grid>

                    </Grid>

                </Grid>
            </CardContent>

        </Card>
    );
};

export default GabrielCard;