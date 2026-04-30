import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  styled,
  Typography,
  Fade
} from "@mui/material";

import { useState, useEffect } from "react";
import cnrslogo from '../components/images/cnrs_logo.png'

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

const AboutUsCard = () => {

  const [expanded, setExpanded] = useState(false);
  const [showLabri, setShowLabri] = useState(true);
  const [paused, setPaused] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // auto flip
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setShowLabri(prev => !prev);
    }, 1500);

    return () => clearInterval(interval);
  }, [paused]);

  const currentLink = showLabri
    ? "https://www.labri.fr/en"
    : "https://www.cnrs.fr";

  const currentLogo = showLabri
    ? "https://www.labri.fr/sites/default/files/2021-04/LOGO_LABRI-INTITULE-BIG_0.png?h=d2365be5&itok=lRNoBEsl"
    : "https://upload.wikimedia.org/wikipedia/commons/7/7e/Logo_CNRS.svg";

  const currentAlt = showLabri ? "LaBRI Logo" : "CNRS Logo";

  return (
    <Card
      style={{
        minHeight: "400px",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
      elevation={5}
    >

      {/* Logo area */}
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: "relative",
          cursor: "pointer"
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >

        {/* LaBRI */}
        <Fade in={showLabri} timeout={500}>
          <Box
            component="a"
            href="https://www.labri.fr/en"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ position: "absolute" }}
          >
            <CardMedia
              component="img"
              image="https://www.labri.fr/sites/default/files/2021-04/LOGO_LABRI-INTITULE-BIG_0.png?h=d2365be5&itok=lRNoBEsl"
              alt="LaBRI Logo"
              sx={{
                padding: "1em",
                maxHeight: 200,
                maxWidth: "100%",
                objectFit: "contain"
              }}
            />
          </Box>
        </Fade>

        {/* CNRS */}
        <Fade in={!showLabri} timeout={500}>
          <Box
            component="a"
            href="https://www.cnrs.fr"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ position: "absolute" }}
          >
            <CardMedia
              component="img"
              image={cnrslogo}
              alt="CNRS Logo"
              sx={{
                padding: "1em",
                maxHeight: 200,
                maxWidth: "100%",
                objectFit: "contain"
              }}
            />
          </Box>
        </Fade>

      </Box>

      {/* Text */}
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography variant="body1">
          We are a part of the Bordeaux Computer Science Research Laboratory
          (LaBRI, UMR 5800) and affiliated with CNRS in France.
        </Typography>
      </CardContent>

      {/* Button */}
      <Box>
        <Divider />
        <CardActions sx={{ justifyContent: 'center' }}>
          <Button
            variant="contained"
            href={currentLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </Button>
        </CardActions>
      </Box>

    </Card>
  );
};

export default AboutUsCard;