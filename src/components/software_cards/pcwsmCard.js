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

const PCWSM2021Card = () => {
  return (
    <Card
      sx={{ marginTop: "1em" }}
      style={{
        position: "relative",
        minHeight: "180px",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column"
      }}
      elevation={5}
    >
      {/* Header */}
      <Box>
        <CardHeader
          title="Stochastic model of lignocellulosic material saccharification"
          subheader="Behle E, Raguin A (2021)"
        />
        <Divider />
      </Box>

      {/* Content */}
      <CardContent>
        <Typography variant="body2" align="left">
          This work introduces a stochastic biophysical model for lignocellulosic biomass
          saccharification, capturing enzyme–substrate interactions and heterogeneous
          degradation dynamics at the polymer scale.
        </Typography>
      </CardContent>

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
              startIcon={<GitHubIcon />}
              href="https://gitlab.com/erbeh/pcwsm"
              target="_blank"
            >
              GitLab
            </Button>

            <Button
              variant="contained"
              startIcon={<DescriptionIcon />}
              href="https://doi.org/10.1016/j.csbj.2021.05.004"
              target="_blank"
            >
              Publication
            </Button>
          </Stack>
        </CardActions>
      </Box>
    </Card>
  );
};

export default PCWSM2021Card;