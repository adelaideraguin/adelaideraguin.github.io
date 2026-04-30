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
import photo from "./michael.JPG";

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

const MichaelCard = () => {

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
                    title="Dr Michael Wulfert"
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
                            alt="A smart photo of Dr Michael Wulfert"
                        />
                    </Grid>

                    <Grid item xs={12} sm={12} md={7}>

                        <Typography
                            variant="body1"
                            align='left'
                        >
                            Michael is a postdoctoral researcher with a PhD in biophysics. Long before joining the research group, he completed his PhD at the Institute of Physical Biology at Heinrich Heine University in Düsseldorf, using thermodynamic methods, combined with computer simulations, to find DNA mutations. Afterwards, he used such methods to search for heterolasmic mutations in the mitochondrial genome of precancerous hematological patients and managed a biobank. He joined Raguin's group during his Master's degree in Computer Sciences, contributing with his extensive experience in biochemistry. He has now started his Master's degree thesis in Computer Science focussing on improving protein expression systems with bioinformatics tools.
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
                                    size="large"
                                    href="https://www.researchgate.net/profile/Michael-Wulfert"
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

export default MichaelCard;