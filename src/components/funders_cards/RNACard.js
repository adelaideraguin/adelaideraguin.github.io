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
import image from "../images/logo_RNA.jpg";

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

const RNACard = () => {

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
        alt="Région Nouvelle-Aquitaine"
      />

      {/* TEXT */}
      <CardContent>
        <Typography align="left" variant="body1">
          To learn more about the Région Nouvelle-Aquitaine initiatives in research, innovation,
          and higher education partnerships, visit the official page below.
        </Typography>
      </CardContent>

      {/* ACTIONS */}
      <Box>
        <Divider />
        <CardActions disableSpacing>

          <Button
            variant="contained"
            href="https://entreprises.nouvelle-aquitaine.fr/que-fait-la-region-pour-les-entreprises/innovation-dans-les-entreprises/enseignement-superieur-recherche-et-innovation"
            target="_blank"
            rel="noopener noreferrer"
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

      {/* EXPANDED TEXT */}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph align="left">
            The Région Nouvelle-Aquitaine plays a key role in fostering collaboration between
            higher education, research institutions, and industry. It supports innovation ecosystems,
            technology transfer, and the development of strategic research programmes across the region.
          </Typography>
        </CardContent>
      </Collapse>

    </Card>
  );
};

export default RNACard;