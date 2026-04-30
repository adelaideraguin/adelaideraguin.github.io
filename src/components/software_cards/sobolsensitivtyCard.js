import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Stack,
  Typography
} from "@mui/material";

import DescriptionIcon from '@mui/icons-material/Description';
import GitHubIcon from '@mui/icons-material/GitHub';

const SaccharificationSensitivityCard = () => {
  return (
    <Card
      sx={{ marginTop: "1em" }}
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column"
      }}
      elevation={5}
    >
      {/* Header */}
      <Box>
        <CardHeader
          align="left"
          title="A detailed sensitivity analysis identifies the key factors influencing enzymatic saccharification of lignocellulosic biomass"
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
              href="https://doi.org/10.1016/j.csbj.2024.01.006"
              target="_blank"
            >
              Publication
            </Button>

            <Button
              variant="contained"
              startIcon={<GitHubIcon />}
              href="https://gitlab.com/partho9791/data_used_for_sensitivity_analysis_for_pcwsm"
              target="_blank"
            >
              GitLab
            </Button>
          </Stack>
        </CardActions>
      </Box>
    </Card>
  );
};

export default SaccharificationSensitivityCard;