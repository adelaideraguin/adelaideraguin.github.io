import React from 'react';
import {
  Card, CardHeader, CardContent, Divider,
  Typography, Box, Chip
} from "@mui/material";

import Carousel from 'react-material-ui-carousel';
import { Link as RouterLink } from "react-router-dom";

// reusable external link style
const ExternalLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: "#000", textDecoration: "none" }}
    onMouseOver={(e) => (e.currentTarget.style.textDecoration = "underline")}
    onMouseOut={(e) => (e.currentTarget.style.textDecoration = "none")}
  >
    {children}
  </a>
);

// 🧠 DATA
const newsItems = [
    {
    title: (
      <>
        We are looking for a PhD student in Computational Biophysics. Please see the {" "}
        <RouterLink
          to="/hiring"
          style={{ color: "#000", textDecoration: "none" }}
          onMouseOver={(e) => (e.currentTarget.style.textDecoration = "underline")}
          onMouseOut={(e) => (e.currentTarget.style.textDecoration = "none")}
        >
          Join Us
        </RouterLink>
        {" "}page for details.
      </>
    ),
    type: "job"
  },
  {
    title: (
      <>
        We are delighted that the MODINVAD project coordinated by Adélaïde Raguin has been funded by the{" "}
        <ExternalLink href="https://entreprises.nouvelle-aquitaine.fr/que-fait-la-region-pour-les-entreprises/innovation-dans-les-entreprises/enseignement-superieur-recherche-et-innovation">
          Région Nouvelle-Aquitaine
        </ExternalLink>
        . We are looking forward to collaborate with the{" "}
        <ExternalLink href="https://www.bricbordeaux.com/en/">
          Bordeaux Institute of Oncology (BRIC)
        </ExternalLink>
        , the{" "}
        <ExternalLink href="https://arna.cnrs.fr/en/home-page/">
          Nucleic Acids lab (ARNA)
        </ExternalLink>
        , the{" "}
        <ExternalLink href="https://team.inria.fr/storm/">
          STORM team at Inria
        </ExternalLink>
        , and the biotechnology companies{" "}
        <ExternalLink href="https://www.byorna.bio/">
          bYoRNA
        </ExternalLink>
        {" "}and{" "}
        <ExternalLink href="https://novaptech.com/en/">
          Novaptech
        </ExternalLink>.
      </>
    ),
    type: "project"
  },


  {
    title: "Transport at a complex multiple-input-multiple-output TASEP junction",
    link: "https://doi.org/10.1016/j.physa.2026.131466",
    type: "paper"
  },
  {
    title: "Stochastic model highlights the impact of crystallinity on saccharification dynamics depending on plant chemotype and pre-treatment",
    link: "https://doi.org/10.1371/journal.pone.0322367",
    type: "paper"
  },
  {
    title: "After many years in the UK and Germany, we are back to France, at CNRS in Bordeaux."
  }
];

// 🧠 COMPONENT
const LatestNewsCard = () => {

  const latest = newsItems.slice(0, 4);

  const ExternalLink = ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "#000", textDecoration: "none" }}
      onMouseOver={(e) => (e.currentTarget.style.textDecoration = "underline")}
      onMouseOut={(e) => (e.currentTarget.style.textDecoration = "none")}
    >
      {children}
    </a>
  );

  const renderTitle = (item) => {
    if (React.isValidElement(item.title)) return item.title;

    if (item.link && item.type === "paper") {
      return <ExternalLink href={item.link}>{item.title}</ExternalLink>;
    }

    return item.title;
  };

  return (
    <Card elevation={0} sx={{ borderRadius: 3 }}>
      <CardHeader title="Latest Lab Updates" />
      <Divider />

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
                px: { xs: 6, sm: 8, md: 10 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center"
              }}
            >

              {/* CHIP */}
              <Box sx={{ minHeight: 32, mb: 1 }}>
                {item.type === "paper" && (
                  <Chip label="New Publication" color="primary" />
                )}
                {item.type === "project" && (
                  <Chip label="New Project" color="primary" />
                )}
                {item.type === "job" && (
                  <Chip label="Job Opportunity" color="secondary" />
                )}
              </Box>

              {/* TITLE */}
              <Typography variant="h6" sx={{ maxWidth: "85%" }}>
                {renderTitle(item)}
              </Typography>

            </Box>
          ))}
        </Carousel>
      </CardContent>
    </Card>
  );
};

export default LatestNewsCard;