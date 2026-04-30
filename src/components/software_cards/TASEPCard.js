import { Box, Button, Card, CardActions, CardContent, CardHeader, Divider, Stack, Typography } from "@mui/material";
import DescriptionIcon from '@mui/icons-material/Description';
import ComputerIcon from '@mui/icons-material/Launch';

const TASEPCard = () => {
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
            {/* Title */}
            <Box>
                <CardHeader
                    align="left"
                    title="Whole-translatome protein production and tRNA sequestration in yeast"
                />
                <Divider />
            </Box>


            {/* Links */}
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
                            href="https://doi.org/10.1093/nar/gkaa055"
                        >
                            Publication
                        </Button>

                        <Button
                            variant="contained"
                            startIcon={<ComputerIcon />}
                            href="https://www.ebi.ac.uk/biomodels/MODEL2001080004#Overview"
                        >
                            Software
                        </Button>
                    </Stack>
                </CardActions>
            </Box>
        </Card>
    );
};

export default TASEPCard;