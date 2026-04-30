import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  styled,
  Typography
} from "@mui/material";

import { useState } from "react";

import LinkedInIcon from '@mui/icons-material/LinkedIn';

import photo from "./PSD.jpg";

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

const ParthoCard = () => {

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      style={{
        position: "relative",
        minHeight: "500px",
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column'
      }}
      elevation={5}
    >

      <Box>
        <CardHeader
          title="Dr Partho Sakha De"
        />
        <Divider />
      </Box>

      <CardContent>

        <Grid
          container
          spacing={1}
          alignItems="flex-start"
          justifyContent="space-around"
        >

          {/* IMAGE */}
          <Grid item xs={7} sm={12} md={3.5}>

            <CardMedia
              sx={{
                padding: "1em",
                maxWidth: 350,
                marginTop: 0,
                alignSelf: "flex-start"
              }}
              component="img"
              image={photo}
              alt="A smart photo of Dr Partho Sakha De"
            />

          </Grid>

          {/* TEXT */}
          <Grid item xs={12} sm={12} md={7}>

            <Typography
              variant="body1"
              align='left'
              sx={{
                marginTop: 0
              }}
            >
              Partho is a postdoctoral researcher with a PhD in biophysics. Before joining the research group, he completed his PhD at the Indian Institute of Science Education and Research Kolkata, India. During his PhD, Partho worked on mathematical and computational modelling of the dynamics at the leading edge of a crawling eukaryotic cell, with a special focus on the emergent 'stick-slip' phenomena. He is now working on coarse-grained biophysical modelling of the degradation and synthesis of complex biopolymers in the plant cell wall, with a focus on quantitatively reproducing experimental data.
            </Typography>

            {/* BUTTONS */}
            <Grid
              container
              spacing={1}
              alignItems="center"
              justifyContent="center"
              marginTop={"1em"}
            >

              <Grid item>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<LinkedInIcon />}
                  href="https://www.linkedin.com/in/partho-sakha-de-phd-3a332ba6/"
                >
                  LinkedIn
                </Button>
              </Grid>

              <Grid item>
                <Button
                  variant="outlined"
                  size="large"
                  href="https://www.researchgate.net/profile/Parthosakha-De"
                >
                  Research Gate
                </Button>
              </Grid>

            </Grid>

          </Grid>

        </Grid>

      </CardContent>

    </Card>
  );
};

export default ParthoCard;