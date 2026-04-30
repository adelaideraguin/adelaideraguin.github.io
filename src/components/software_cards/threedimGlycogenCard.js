import { Box, Button, Card, CardActions, CardHeader, Divider, Stack } from "@mui/material";

import ComputerIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';

const ThreeDimGlycogenCard = () => {

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

            {/* Header */}
            <Box>
                <CardHeader
                    align="left"
                    title="Biogenesis of spatially resolved glycogen granules"
                />
                <Divider />
            </Box>

            {/* Buttons */}
            <Box>
                <Divider />
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
                            href="https://doi.org/10.1371/journal.pcbi.1010694"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Publication
                        </Button>

                        <Button
                            variant="contained"
                            startIcon={<ComputerIcon />}
                            href="https://github.com/yvanrousset/Stochastic-modeling-of-a-three-dimensional-glycogen-granule"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </Button>

                    </Stack>
                </CardActions>
            </Box>

        </Card>
    );
};

export default ThreeDimGlycogenCard;