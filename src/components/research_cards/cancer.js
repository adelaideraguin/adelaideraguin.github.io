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
import image from '../images/spheroid_animation.gif';

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

const CancerCard = () => {

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
          title="Modelling of Tumour Growth"
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
        alt="Cancer cell dynamics animation"
      />

      <CardContent align="left">
        <Typography variant="body1">
            Cancer is the leading cause of death worldwide, with nearly one in six deaths in 2020. Cancer death is primarily related to metastasis formation, which involves several mechanical processes. Our objective is to decipher the intricate relation between mechanical behaviour and genetic  expression in cancer cells. We develop an advanced multi-scale model based on a transcriptome-scale protein expression model and a multi-cellular model of cell mechanics.
        </Typography>
      </CardContent>

      <Box>
        <Divider />
        <CardActions>
          <Button
            variant="contained"
            component={Link}
            to="/publications"
          >
            Publications
          </Button>
        </CardActions>
      </Box>

    </Card>
  );
};

export default CancerCard;