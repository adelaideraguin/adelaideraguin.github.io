import {
    Box,
    Button,
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    Divider,
    Grid,
    Stack,
    Typography
} from "@mui/material";

import DescriptionIcon from '@mui/icons-material/Description';
import ComputerIcon from '@mui/icons-material/ComputerTwoTone';
import GitHubIcon from '@mui/icons-material/GitHub';

import expresslogo from '../images/expressinhost_logo.png';

const ExpressInHostWEBCard = () => {

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

            {/* Header with logo */}
            <Box>
                <Grid container alignItems="center" justifyContent="space-between">

                    {/* Title */}
                    <Grid item xs={9} sm={9} md={10} lg={10}>
                        <CardHeader
                            align="left"
                            title="ExpressInHostWeb: A web application for heterologous protein expression in a desired host organism, with upgraded features from the previous version of ExpressInHost and a user-friendly interface"
                        />
                    </Grid>

                    {/* Logo */}
                    <Grid
                        item
                        xs={3}
                        sm={3}
                        md={2}
                        lg={1.5}
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            ml: 0
                        }}
                    >
                        <CardMedia
                            component="img"
                            image={expresslogo}
                            alt="ExpressInHost Logo"
                            sx={{
                                width: '100%',
                                maxWidth: 150,
                                height: 'auto',
                                padding: '0.5em',
                            }}
                        />
                    </Grid>

                </Grid>

                <Divider />
            </Box>

            {/* Buttons */}
            <CardActions sx={{ p: 2 }}>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={2}
                    useFlexGap
                    flexWrap="wrap"
                >

                    <Button
                        variant="contained"
                        startIcon={<DescriptionIcon />}
                        href="https://doi.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Publication
                    </Button>

                    <Button
                        variant="contained"
                        startIcon={<ComputerIcon />}
                        href="https://expressinhost.cs.hhu.de/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Web App
                    </Button>

                    <Button
                        variant="contained"
                        startIcon={<GitHubIcon />}
                        href="https://github.com/tbonnabaud/expressinhost_web"
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

export default ExpressInHostWEBCard;