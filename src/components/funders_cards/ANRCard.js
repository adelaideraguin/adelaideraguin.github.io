import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  Divider,
  IconButton,
  styled,
  Typography
} from "@mui/material";

import { useState } from "react";
import image from "../images/anr-logo.png";

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

const ANRCard = () => {

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      style={{
        minHeight: "500px",
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        position: "relative"
      }}
      elevation={5}
    >

      {/* LOGO */}
      <CardMedia
        sx={{
          display: 'flex',
          color: "white",
          textAlign: "center",
          padding: "2em",
          margin: "auto"
        }}
        component="img"
        image={image}
        alt="Logo for the ANR"
      />

      {/* TEXT */}
      <CardContent>
        <Typography align="left" variant="body1">
          To learn more about the ANR you can visit their homepage linked below.
        </Typography>
      </CardContent>

      {/* ACTIONS */}
      <Box>
        <Divider />
        <CardActions disableSpacing>
          <Button variant="contained" href="https://anr.fr/en/">
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

      {/* EXPANDED TEXT */}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph align="left">
            The Agence Nationale de la Recherche (ANR) is the French national funding agency for research.
            It supports project-based research across all scientific disciplines, promoting collaboration
            between academic institutions, industry, and international partners.

            ANR plays a key role in funding innovative, high-impact research projects and strengthening
            scientific excellence in France. It also encourages interdisciplinary research and knowledge transfer.
          </Typography>
        </CardContent>
      </Collapse>

    </Card>
  );
};

export default ANRCard;