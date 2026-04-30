import {
    Box,
    Button,
    Card,
    CardActions,
    CardHeader,
    Divider,
    Stack,
    Typography
} from "@mui/material";

import DescriptionIcon from '@mui/icons-material/Description';
import GitHubIcon from '@mui/icons-material/GitHub';

const ComplexTASEPCard = () => {

    return (
        <Card
            sx={{ marginTop: "1em" }}
            style={{
                position: "relative",
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
                    title="Transport at a complex multiple-input-multiple-output TASEP junction"
                />
                <Divider />
            </Box>

            {/* Links */}
            <CardActions sx={{ padding: "1em" }}>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={2}
                    useFlexGap
                    flexWrap="wrap"
                >

                    <Button
                        variant="contained"
                        startIcon={<DescriptionIcon />}
                        href="https://doi.org/10.1016/j.physa.2026.131466"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Publication
                    </Button>

                    <Button
                        variant="contained"
                        startIcon={<GitHubIcon />}
                        href="https://gitlab.com/asben100/complex-tasep-mimo-junction"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitLab
                    </Button>

                </Stack>
            </CardActions>

        </Card>
    );
};

export default ComplexTASEPCard;