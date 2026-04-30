import React from 'react';
import { Card, CardMedia, Typography, Box } from '@mui/material';

import ANRCard from '../components/funders_cards/ANRCard';
import BioSCCard from '../components/funders_cards/BioSCCard';
import DFGCard from '../components/funders_cards/DFGCard';
import CEPLASCard from '../components/funders_cards/CEPLASCard';
import BMBFCard from '../components/funders_cards/bmbfCard';

import background from '../components/images/background.png';

function Funding() {
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

        {/* RESPONSIVE GRID */}
        <Box
          sx={{
            display: "grid",
            gap: 3,

            // default (mobile)
            gridTemplateColumns: "1fr",

            // small screens
            "@media (min-width:600px)": {
              gridTemplateColumns: "repeat(2, 1fr)"
            },

            // medium screens
            "@media (min-width:900px)": {
              gridTemplateColumns: "repeat(3, 1fr)"
            },

            // large screens
            "@media (min-width:1200px)": {
              gridTemplateColumns: "repeat(5, 1fr)"
            }
          }}
        >

          <ANRCard />
          <DFGCard />
          <BioSCCard />
          <BMBFCard />
          <CEPLASCard />

        </Box>

      </div>
    </section>
  );
}

export default Funding;