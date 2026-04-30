import { Box, Button, Card, CardActions, CardHeader, CardMedia, Divider, Grid, Stack } from "@mui/material";

import ComputerIcon from '@mui/icons-material/ComputerTwoTone';
import DescriptionIcon from '@mui/icons-material/Description';
import GitHubIcon from '@mui/icons-material/GitHub';

import prediglogo from '../PREDIGLOGO.jpg';

const PREDIGCard = () => {

    return (
        <Card
            sx={{ marginTop: "1em" }}
            style={{
                position: "relative",
                minHeight: "10px",
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'column'
            }}
            elevation={5}
        >

            {/* Header + Logo */}
            <Box>
                <Grid container alignItems="center" justifyContent="space-around">

                    <Grid item xs={8} sm={9} md={10} lg={11}>
                        <CardHeader
                            align="left"
                            title="PREDIG: a web application to simulate, fit experimental data, and optimise reaction conditions for the saccharification of plant biomass, lignocellulose"
                        />
                    </Grid>

                    <Grid item xs={4} sm={3} md={2} lg={1}>
                        <CardMedia
                            sx={{
                                padding: "1em",
                                maxWidth: 200,
                                margin: "0 auto",
                            }}
                            component="img"
                            image={prediglogo}
                            alt="PREDIG logo"
                        />
                    </Grid>

                </Grid>

                <Divider />
            </Box>

            {/* Buttons */}
            <CardActions>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={2}
                    useFlexGap
                    flexWrap="wrap"
                >

                    <Button
                        variant="contained"
                        startIcon={<DescriptionIcon />}
                        href="https://doi.org/10.1016/j.csbj.2023.09.026"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Publication
                    </Button>

                    <Button
                        variant="contained"
                        startIcon={<ComputerIcon />}
                        href="https://predig.cs.hhu.de/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Web App
                    </Button>

                    <Button
                        variant="contained"
                        startIcon={<GitHubIcon />}
                        href="https://github.com/Iamsecret/PREDIG-Web-Application"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </Button>

                </Stack>
            </CardActions>

        </Card>
    );
};

export default PREDIGCard;