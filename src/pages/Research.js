import React from 'react';

import {
  Box,
  Card,
  CardMedia,
  Typography,
  Grid,
  Divider
} from "@mui/material";

import GlycogenCard from '../components/research_cards/glycogenCard';
import TransportCard from '../components/research_cards/transportCard';
import BiosynthesisCard from '../components/research_cards/biosynthesisCard';
import ProteinSynthesisCard from '../components/research_cards/proteinsynthesisCard';
import FattyAcidsCard from '../components/research_cards/fattyacidsCard';
import StarchCard from '../components/research_cards/starchCard';
import MulticellCard from '../components/research_cards/multicellCard';
import CancerCard from '../components/research_cards/cancer';

import background from '../components/images/background.png';

function SectionHeader({ title }) {
  return (
    <Box sx={{ mt: 5, mb: 2 }}>
      <Typography variant="h4" sx={{ fontWeight: 600 }}>
        {title}
      </Typography>
      <Divider sx={{ mt: 1 }} />
    </Box>
  );
}

function Research() {
  return (
    <section>
      <div className="container-fluid">

        {/* HEADER */}
        <Card sx={{ marginTop: "1em" }}>
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
              Research Activity
            </Typography>
          </CardMedia>
        </Card>

        {/* INTRO */}
        <Card sx={{ marginTop: "2em" }}>
          <Typography
            variant="h5"
            sx={{
              textAlign: "left",
              margin: "1em",
              display: { xs: "none", md: "block" }
            }}
          >
            We develop digital twins based on biophysical and mathematical principles to study the dynamics of complex biological systems at the cellular and sub-cellular scales. Our main expertise lies on stochastic simulations, that we apply to a variety of systems, including the synthesis and degradation of large polymeric 3D structures, cytoskeletal transport, and protein expression. We are currently focussing on modelling cancer development and therapy, deciphering the interplay between genetics and mechanics across scales.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              textAlign: "left",
              margin: "1em",
              display: { xs: "block", md: "none" }
            }}
          >
            We develop digital twins based on biophysical and mathematical principles to study the dynamics of complex biological systems at the cellular and sub-cellular scales. Our main expertise lies on stochastic simulations, that we apply to a variety of systems, including the synthesis and degradation of large polymeric 3D structures, cytoskeletal transport, and protein expression. We are currently focussing on modelling cancer development and therapy, deciphering the interplay between genetics and mechanics across scales.
          </Typography>
        </Card>

        {/* =============================== */}
        {/* MULTICELLULAR SYSTEMS */}
        {/* =============================== */}
        <SectionHeader title="Dynamics of multicellular systems" />

        <Grid container spacing={3} alignItems="stretch">

          <Grid item xs={12} md={6} sx={{ display: "flex" }}>
            <Box sx={{ width: "100%", display: "flex" }}>
              <MulticellCard />
            </Box>
          </Grid>

          <Grid item xs={12} md={6} sx={{ display: "flex" }}>
            <Box sx={{ width: "100%", display: "flex" }}>
              <CancerCard />
            </Box>
          </Grid>

        </Grid>

        {/* =============================== */}
        {/* 1D TRANSPORT */}
        {/* =============================== */}
        <SectionHeader title="1-Dimensional transport" />

        <Grid container spacing={3} alignItems="stretch">

          <Grid item xs={12} md={6} sx={{ display: "flex" }}>
            <Box sx={{ width: "100%", display: "flex" }}>
              <ProteinSynthesisCard />
            </Box>
          </Grid>

          <Grid item xs={12} md={6} sx={{ display: "flex" }}>
            <Box sx={{ width: "100%", display: "flex" }}>
              <TransportCard />
            </Box>
          </Grid>

        </Grid>

        {/* =============================== */}
        {/* PHYSICS OF BIOPOLYMERS */}
        {/* =============================== */}
        <SectionHeader title="Physics of biopolymers" />

        <Grid container spacing={3} alignItems="stretch">

          <Grid item xs={12} md={6} sx={{ display: "flex" }}>
            <Box sx={{ width: "100%", display: "flex" }}>
              <BiosynthesisCard />
            </Box>
          </Grid>

          <Grid item xs={12} md={6} sx={{ display: "flex" }}>
            <Box sx={{ width: "100%", display: "flex" }}>
              <StarchCard />
            </Box>
          </Grid>

          <Grid item xs={12} md={6} sx={{ display: "flex" }}>
            <Box sx={{ width: "100%", display: "flex" }}>
              <GlycogenCard />
            </Box>
          </Grid>

          <Grid item xs={12} md={6} sx={{ display: "flex" }}>
            <Box sx={{ width: "100%", display: "flex" }}>
              <FattyAcidsCard />
            </Box>
          </Grid>

        </Grid>

      </div>
    </section>
  );
}

export default Research;