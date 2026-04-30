import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Collapse,
    Divider,
    Grid,
    IconButton,
    styled,
    Typography
} from "@mui/material";

import { useState } from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from "react-router-dom";

import photo from "./Asma-portraitformat.jpeg";

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

const AsmaCard = () => {

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
                    title="Asma Ben Janete"
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
                                maxWidth: 280,
                                margin: "0 auto",
                                display: "flex",
                                alignItems: "flex-start"
                            }}
                            component="img"
                            image={photo}
                            alt="A smart photo of Asma Ben Janete"
                        />
                    </Grid>

                    <Grid item xs={12} sm={12} md={7}>

                        <Typography
                            variant="body1"
                            align='left'
                        >
                            Asma is a PhD student working on developing a stochastic simulation model that captures the dynamics of mRNA translation at cellular scale, tracking large numbers of mRNAs, ribosomes, and tRNAs as well as the millions of molecular events that govern them. She joined Raguin's group for her Master's degree thesis focussing on the transport at a complex multiple-input-multiple-output TASEP junction. Her Bachelor's thesis investigated the dynamic motion of swarm robots and focussed on developing algorithms for self-organisation.
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
                                    href="https://www.linkedin.com/in/asma-ben-janete-05518a161"
                                >
                                    LinkedIn
                                </Button>
                            </Grid>

                            <Grid item>
                                <Button
                                    variant="outlined"
                                    size="large"
                                    href="https://www.researchgate.net/profile/Asma-Ben-Janete"
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

export default AsmaCard;