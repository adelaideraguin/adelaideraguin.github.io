import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  Stack
} from "@mui/material";

import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';

const SaccharificationCrystallinityCard = () => {
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
          title="Stochastic model highlights the impact of crystallinity on saccharification dynamics"
        />
        <Divider />
      </Box>

      {/* Links */}
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
            href="https://doi.org/10.1371/journal.pone.0322367"
            target="_blank"
          >
            Publication
          </Button>

          <Button
            variant="contained"
            startIcon={<GitHubIcon />}
            href="https://gitlab.com/partho9791/code_n_data_for_stochastic_biophysical_model_for_biomass_saccharification"
            target="_blank"
          >
            GitLab
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
};

export default SaccharificationCrystallinityCard;