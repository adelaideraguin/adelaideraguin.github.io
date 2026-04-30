import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
  styled,
  Typography
} from "@mui/material";

import { Link } from "react-router-dom";
import { useState } from "react";
import image from '../images/cell_animation.gif';

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

const MulticellCard = () => {

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      style={{
        minHeight: "680px",
        display: 'flex',
        justifyContent: 'space-between',
        flexGrow: "1",
        flexDirection: 'column',
        alignContent: 'stretch',
        position: "relative"
      }}
      elevation={5}
    >
      <Box>
        <CardHeader
          title="Mechanical Control of Bacteria Colony Growth in ELMs"
        />
        <Divider />
      </Box>

      <CardMedia
        sx={{
          padding: "1em",
          width: "60%",
          margin: "0 auto"
        }}
        component="img"
        image={image}
        alt="Cellular dynamics animation"
      />

      <CardContent align="left">
        <Typography variant="body1">
          Genetically modified bacteria encapsulated within hydrogel matrices are engineered living materials (ELMs) that typically achieve various functions by producing recombinant proteins with spectral, catalytic, adhesive, cell-signalling, or structural properties. The intricate relationship between cell growth dynamics and the mechanical properties of the hydrogel remains elusively characterised. To specifically capture single-cell morphology, matrix viscoelasticity, and the resulting constrained growth of the colony, we develop a data-driven numerical twin of bacteria-hydrogel ELMs based on a Cellular Potts Model.
        </Typography>
      </CardContent>

      <Box>
        <Divider />
        <CardActions>
          <Button variant="contained" component={Link} to="/publications">
            Publications
          </Button>
        </CardActions>
      </Box>

    </Card>
  );
};

export default MulticellCard;