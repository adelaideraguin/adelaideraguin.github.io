import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Grid,
  Typography
} from "@mui/material";

import { useState } from "react";

import LinkedInIcon from '@mui/icons-material/LinkedIn';

import image from './olivier.png';

const OlivierCard = () => {

  const [expanded, setExpanded] = useState(false);

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
        <CardHeader title="Olivier Riverrain" />
        <Divider />
      </Box>

      <CardContent sx={{ flexGrow: 1 }}>
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
                margin: "0 auto",
                display: "flex",
                alignItems: "flex-start"
              }}
              component="img"
              image={image}
              alt="Photo of Olivier"
            />
          </Grid>

          {/* TEXT + BUTTON */}
          <Grid item xs={12} sm={12} md={7}>

            <Typography
              variant="body1"
              align='left'
            >
              Olivier is a PhD student focussing on modelling cancer tumour growth in close collaboration with the Bordeaux Institute of Oncology (BRIC). A major aim of his PhD thesis is to model the growth of cancerous organoids in contact with healthy cells, taking into account the mechanical, biophysical, and biochemical properties of the cells, using a multi-scale model spanning from protein expression to multi-cellularity. He holds a Master’s degree in Computer Science, specialising in 2D and 3D image processing, from the University of Bordeaux. During his Master thesis, he developed and parallelised an extension of the software 3DSlicer, enabling the rapid conversion of large 2D images into 3D models, from experimental data collected at Grenoble's Synchrotron.
            </Typography>

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
                  href="https://fr.linkedin.com/in/olivier-riverain-b21b81159"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Button>
              </Grid>
            </Grid>

          </Grid>

        </Grid>
      </CardContent>

    </Card>
  );
};

export default OlivierCard;