import React, { useState } from 'react';
import { Card, CardMedia, Typography, Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

import ANRCard from '../components/funders_cards/ANRCard';
import BioSCCard from '../components/funders_cards/BioSCCard';
import DFGCard from '../components/funders_cards/DFGCard';
import CEPLASCard from '../components/funders_cards/CEPLASCard';
import BMBFCard from '../components/funders_cards/bmbfCard';
import RNACard from '../components/funders_cards/RNACard';

import background from '../components/images/background.png';

function Funding() {

  const funders = [
    { id: "ANR", component: <ANRCard /> },
    { id: "RNA", component: <RNACard /> },
    { id: "DFG", component: <DFGCard /> },
    { id: "BioSC", component: <BioSCCard /> },
    { id: "BMBF", component: <BMBFCard /> },
    { id: "CEPLAS", component: <CEPLASCard /> },
  ];

  // 🧠 helper: build “virtual infinite slides”
  const getVisible = (index) => {
    const len = funders.length;

    return [
      funders[index % len],
      funders[(index + 1) % len],
      funders[(index + 2) % len],
    ];
  };

  const [index, setIndex] = useState(0);

  const handleNext = () => setIndex((prev) => (prev + 1) % funders.length);
  const handlePrev = () =>
    setIndex((prev) => (prev - 1 + funders.length) % funders.length);

  return (
    <section>
      <div className="container-fluid">

        {/* HEADER */}
        <Card sx={{ marginTop: "1em", marginBottom: "2em" }}>
          <CardMedia
            component="div"
            sx={{
              height: 300,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              backgroundImage: `url(${background})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <Typography variant="h2">
              Our work is supported by ...
            </Typography>
          </CardMedia>
        </Card>

        {/* CAROUSEL */}
        <Carousel
          autoPlay
          interval={3000}
          animation="slide"
          indicators={false}
          navButtonsAlwaysVisible
          next={handleNext}
          prev={handlePrev}
        >
          {/* ONE “SLIDE” ALWAYS SHOWS 3 CARDS */}
          <Box
            sx={{
              display: "flex",
              gap: 3,
              justifyContent: "center",
              padding: 2
            }}
          >
            {getVisible(index).map((funder) => (
              <Box
                key={funder.id}
                sx={{
                  flex: "1 1 0",
                  maxWidth: 350
                }}
              >
                {funder.component}
              </Box>
            ))}
          </Box>
        </Carousel>

      </div>
    </section>
  );
}

export default Funding;