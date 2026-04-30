import { Box, Button, Card, CardActions, CardHeader, Divider, Stack, Typography } from "@mui/material";
import DescriptionIcon from '@mui/icons-material/Description';
import GitHubIcon from '@mui/icons-material/GitHub';

const ExpressInHostCard = () => {

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
                    title="ExpressInHost: A codon tuning tool for the expression of heterologous proteins in host microorganisms"
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
                            href="https://doi.org/10.5334/jors.385"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Publication
                        </Button>

                        <Button
                            variant="contained"
                            startIcon={<GitHubIcon />}
                            href="https://gitlab.com/a.raguin/expressinhost"
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

export default ExpressInHostCard;