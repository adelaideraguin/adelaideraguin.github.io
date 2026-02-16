import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, Grid, IconButton, Stack, styled, Typography, Link as MuiLink } from "@mui/material";
import { useState } from "react";
import DescriptionIcon from '@mui/icons-material/Description';
import ComputerIcon from '@mui/icons-material/ComputerTwoTone';
import GitHubIcon from '@mui/icons-material/GitHub';

import expresslogo from '../images/expressinhost_logo.png';
import Raguin2023Card from '../paper_cards/Raguin2023';

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

const ExpressInHostWEBCard = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card 
            sx={{ marginTop: "1em" }} 
            style={{ position:"relative", minHeight: "10px", display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }} 
            elevation={5}
        >
            {/* Header with logo */}
            <Box>
                <Grid container alignItems="center" justifyContent="space-between">
                    {/* Title */}
                    <Grid item xs={9} sm={9} md={10} lg={10}>
                        <CardHeader
                            align="left"
                            title={
                                <Typography variant="body1">
                                    ExpressInHostWeb: A web application for heterologous protein expression in a desired host organism, with upgraded features from the previous version of ExpressInHost (
                                    <MuiLink href="https://doi.org/10.5334/jors.385" target="_blank" rel="noopener noreferrer">
                                        Raguin et al., 2023
                                    </MuiLink>
                                    ) and a user-friendly interface
                                </Typography>
                            }
                        />
                    </Grid>

                    {/* Logo Thumbnail */}
                    <Grid 
                        item 
                        xs={3} sm={3} md={2} lg={1.5} 
                        sx={{ display: 'flex', justifyContent: 'flex-start', ml: 0 }} // CHATGPT
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

            {/* Buttons and Expand */}
            <Box>
                <Divider />
                <CardActions>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} useFlexGap flexWrap="wrap">
                        <Button 
                            variant="contained" 
                            startIcon={<DescriptionIcon />}  
                            href="https://doi.org/10.5334/jors.385"
                        >
                            Publication
                        </Button>

                        <Button 
                            variant="contained"
                            startIcon={<ComputerIcon />} 
                            href="https://expressinhost.cs.hhu.de/"
                        >
                            Web App
                        </Button>

                        <Button 
                            variant="contained"
                            startIcon={<GitHubIcon />} 
                            href="https://github.com/tbonnabaud/expressinhost_web"
                        >
                            GitHub
                        </Button>
                    </Stack>

                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
            </Box>

            {/* Collapsible Content */}
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Raguin2023Card />
                </CardContent>
            </Collapse>

        </Card>
    );
};

export default ExpressInHostWEBCard;
