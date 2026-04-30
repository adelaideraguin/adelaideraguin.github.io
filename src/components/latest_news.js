import React, { useState } from 'react';
import {
  Card, CardHeader, CardContent, Divider,
  Typography, Button, Collapse, IconButton, Box, Chip
} from "@mui/material";

import Carousel from 'react-material-ui-carousel';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// 🧠 Data
const newsItems = [
  {
    title: "Stochastic model highlights the impact of crystallinity on saccharification dynamics depending on plant chemotype and pre-treatment",
    link: "https://doi.org/10.1371/journal.pone.0322367",
    type: "paper"
  },
  {
    title: "Transport at a complex multiple-input-multiple-output TASEP junction",
    link: "https://doi.org/10.1016/j.physa.2026.131466",
    type: "paper"
  },
  {
    title: "After many years in the UK and Germany, we are back to France, at CNRS in Bordeaux!"
  },
  {
    title: "OptiCellu project has begun – sustainable production of cellulose fibres",
    date: "April 2024",
    link: "https://www.biosc.de/OptiCellu_EN",
    type: "project"
  },
  {
    title: "Sensitivity analysis of enzymatic saccharification",
    date: "January 2024",
    link: "https://doi.org/10.1016/j.csbj.2024.01.006",
    type: "paper"
  },
  {
    title: "Group attends Cell Physics conference",
    date: "October 2023"
  },
  {
    title: "Master's thesis completed",
    date: "October 2023"
  }
];

const LatestNewsCard = () => {
  const [expanded, setExpanded] = useState(false);

  const latest = newsItems.slice(0, 3);
  const older = newsItems.slice(3);

  return (
    <Card elevation={0} sx={{ borderRadius: 3 }}>
      <CardHeader title="Latest Lab Updates" />
      <Divider />

      {/* 🎠 CAROUSEL */}
      <CardContent>
        <Carousel
          autoPlay
          interval={5000}
          animation="slide"
          indicators
          navButtonsAlwaysVisible
        >
          {latest.map((item, index) => (
            <Box
              key={index}
              sx={{
                minHeight: 240,
                display: "flex",
                flexDirection: "column",
                position: "relative"
              }}
            >

              {/* 🧠 CENTERED CONTENT */}
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  px: 2
                }}
              >

                {/* CHIP */}
                <Box sx={{ minHeight: 32, mb: 1 }}>
                  {item.type === "paper" && (
                    <Chip
                      label="New Publication"
                      color="primary"
                      size="normal"
                    />
                  )}
                </Box>

                {/* TITLE */}
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {item.title}
                </Typography>

                {/* DATE */}
                <Box sx={{ minHeight: 24 }}>
                  {item.type !== "paper" && item.date && (
                    <Typography variant="body2" color="text.secondary">
                      {item.date}
                    </Typography>
                  )}
                </Box>

              </Box>

              {/* 🔘 BUTTON (BOTTOM LEFT) */}
              {item.link && (
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 8,
                    left: 16
                  }}
                >
                  <Button
                    variant="contained"
                    size="small"
                    href={item.link}
                  >
                    Learn More
                  </Button>
                </Box>
              )}

            </Box>
          ))}
        </Carousel>
      </CardContent>

    </Card>
  );
};

export default LatestNewsCard;