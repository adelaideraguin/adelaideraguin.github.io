import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Box, Button, Card, CardActions, CardContent,
  CardHeader, CardMedia, Collapse, Divider,
  Grid, IconButton, styled, Typography
} from "@mui/material";

import { useState } from "react";
import image from "../images/lapsein2025.jpeg";

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

const Lapsien2025Card = () => {

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        position: "relative",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: "100%"
      }}
      elevation={5}
    >
      {/* 🔝 Header */}
      <Box>
        <CardHeader
          align="left"
          title="PyPE_RESP: A Tool to Facilitate and Standardize Derivation of RESP Charges"
        />
        <Divider />
      </Box>

      {/* 📄 Citation */}
      <CardContent>
        <Typography align="left" variant="body1">
          Lapsien M, Bonus M, Gahan L, Raguin A, and Gohlke H (2025)
          PyPE_RESP: A Tool to Facilitate and Standardize Derivation of RESP Charges.
          Journal of Chemical Information and Modeling 65(9), 4251–4256.
        </Typography>
      </CardContent>

      {/* 🔗 Actions */}
      <Box>
        <Divider />
        <CardActions disableSpacing>

          <Button
            variant="contained"
            href="https://doi.org/10.1021/acs.jcim.5c00041"
          >
            Learn More
          </Button>

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

      {/* 🔽 Expandable content */}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Grid container spacing={1} alignItems="center" justifyContent="space-around">

          {/* 🖼️ Image */}
          <Grid item xs={12} md={5}>
            <CardMedia
              sx={{
                p: 3,
                maxWidth: 800,
                margin: "0 auto"
              }}
              component="img"
              image={image}
              alt="PyPE_RESP illustration"
            />
          </Grid>

          {/* 🧠 Description */}
          <Grid item xs={12} md={7}>
            <CardContent>
              <Typography
                align="left"
                sx={{ px: 2 }}
                variant="body1"
                paragraph
              >
                PyPE_RESP is a computational tool designed to streamline and standardise
                the derivation of RESP (Restrained ElectroStatic Potential) charges for
                molecular simulations. The software automates key steps in the workflow,
                improving reproducibility and reducing user intervention. By providing
                a consistent pipeline for charge derivation, PyPE_RESP facilitates the
                integration of quantum chemical calculations with molecular mechanics
                models, enabling more reliable parametrisation for biomolecular and
                materials simulations.
              </Typography>
            </CardContent>
          </Grid>

        </Grid>
      </Collapse>

    </Card>
  );
};

export default Lapsien2025Card;