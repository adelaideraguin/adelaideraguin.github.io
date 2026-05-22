import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  styled,
  Typography,
  Fade
} from "@mui/material";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import image from './digestion_light2.gif';
import cellimage from './cell_animation.gif';

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

const ResearchPaperCard = () => {

  const [expanded, setExpanded] = useState(false);
  const [showFirst, setShowFirst] = useState(true);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setShowFirst(prev => !prev);
    }, 3500);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <Card
      sx={{
        minHeight: 550,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: "relative",
        overflow: "visible"
      }}
      elevation={5}
    >

      <Box>
        <CardHeader title="Take a look at our Research" />
        <Divider />
      </Box>

      <Box
        sx={{
          position: "relative",
          height: 220,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          overflow: "visible"
        }}
        onMouseEnter={() => {
          setPaused(true);
          setHovered(true);
        }}
        onMouseLeave={() => {
          setPaused(false);
          setHovered(false);
        }}
      >

        {/* GIF 1 */}
        <Fade in={showFirst} timeout={400}>
          <Box
            component="img"
            src={cellimage}
            alt="Cell animation gif"
            sx={{
              position: "absolute",
              maxHeight: 400,
              maxWidth: "95%",
              objectFit: "contain",
              transition: "all 0.4s ease",
              transform: hovered
                ? "scale(1.21) translateY(-10px)"
                : "scale(1)",
              zIndex: hovered ? 10 : 1,
              boxShadow: hovered ? "0px 10px 30px rgba(0,0,0,0.2)" : "none"
            }}
          />
        </Fade>

        {/* GIF 2 */}
        <Fade in={!showFirst} timeout={400}>
          <Box
            component="img"
            src={image}
            alt="Enzymatic degradation gif"
            sx={{
              position: "absolute",
              maxHeight: 400,
              maxWidth: "85%",
              objectFit: "contain",
              transition: "all 0.4s ease",
              transform: hovered
                ? "scale(1.21) translateY(-10px)"
                : "scale(1)",
              zIndex: hovered ? 10 : 1,
              boxShadow: hovered ? "0px 10px 30px rgba(0,0,0,0.2)" : "none"
            }}
          />
        </Fade>

      </Box>

      <CardContent>
        <Typography padding="1em" align='left' variant="body1">
          We study a variety of biological systems ranging from macro-molecular to multi-cellular scales. Take a look at our research...
        </Typography>
      </CardContent>

      <Box>
        <Divider />
        <CardActions>
          <Button
            variant="contained"
            component={Link}
            to="/research/"
          >
            Learn More
          </Button>
        </CardActions>
      </Box>

    </Card>
  );
};

export default ResearchPaperCard;