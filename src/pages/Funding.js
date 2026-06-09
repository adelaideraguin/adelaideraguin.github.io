import React from 'react';
import { Card, CardMedia, Typography, Box } from '@mui/material';

import ANRCard from '../components/funders_cards/ANRCard';
import BioSCCard from '../components/funders_cards/BioSCCard';
import DFGCard from '../components/funders_cards/DFGCard';
import CEPLASCard from '../components/funders_cards/CEPLASCard';
import BMBFCard from '../components/funders_cards/bmbfCard';
import RNACard from '../components/funders_cards/RNACard';

import background from '../components/images/background.png';

function Funding() {

  // 👉 EASY TO ADD MORE CARDS HERE
  const funders = [
    { id: "ANR", component: <ANRCard /> },
    { id: "RNA", component: <RNACard /> },
    { id: "DFG", component: <DFGCard /> },
    { id: "BioSC", component: <BioSCCard /> },
    { id: "BMBF", component: <BMBFCard /> },
    { id: "CEPLAS", component: <CEPLASCard /> },
  ];

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

        {/* SCROLLABLE SINGLE ROW LAYOUT */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            gap: 3,
            overflowX: "auto",
            paddingBottom: 2,
            alignItems: "stretch",

            // optional nicer scroll behavior
            scrollBehavior: "smooth",

            // hides ugly scrollbar (optional)
            "&::-webkit-scrollbar": {
              height: 8
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#ccc",
              borderRadius: 4
            }
          }}
        >
          {funders.map((funder) => (
            <Box
              key={funder.id}
              sx={{
                flex: "0 0 250px",   // 👈 fixed card width
                display: "flex"
              }}
            >
              {funder.component}
            </Box>
          ))}
        </Box>

      </div>
    </section>
  );
}

export default Funding;