import { Box, Button, Card, CardActions, CardHeader, Divider, Stack } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';

const LigninFitCard = () => {
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
          title="LigninFit: A companion fitting and analysis package for Lignin-KMC"
        />
        <Divider />
      </Box>

      {/* Links */}
      <CardActions>
        <Stack direction="row" spacing={2} flexWrap="wrap">
          <Button
            variant="contained"
            startIcon={<DescriptionIcon />}
            href="https://doi.org/"
          >
            Publication
          </Button>

          <Button
            variant="contained"
            startIcon={<GitHubIcon />}
            href="https://github.com/LianneGahan/LigninFit"
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

export default LigninFitCard;