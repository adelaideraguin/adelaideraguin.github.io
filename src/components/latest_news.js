import React from 'react';
import {
  Card, CardHeader, CardContent, Divider,
  Typography, Box, Chip
} from "@mui/material";

import Carousel from 'react-material-ui-carousel';

// 🧠 DATA
const newsItems = [
  {
    title: (
      <>
        We are delighted that the MODINVAD project coordinated by Adélaïde Raguin has been funded by the{" "}
        <a
          href="https://entreprises.nouvelle-aquitaine.fr/que-fait-la-region-pour-les-entreprises/innovation-dans-les-entreprises/enseignement-superieur-recherche-et-innovation"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#000", textDecoration: "none" }}
          onMouseOver={(e) => (e.currentTarget.style.textDecoration = "underline")}
          onMouseOut={(e) => (e.currentTarget.style.textDecoration = "none")}
        >
          Région Nouvelle-Aquitaine
        </a>
        . We are looking forward to collaborate with the{" "}
        <a
          href="https://www.bricbordeaux.com/en/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#000", textDecoration: "none" }}
          onMouseOver={(e) => (e.currentTarget.style.textDecoration = "underline")}
          onMouseOut={(e) => (e.currentTarget.style.textDecoration = "none")}
        >
          Bordeaux Institute of Oncology (BRIC)
        </a>
        , the{" "}
        <a
          href="https://arna.cnrs.fr/en/home-page/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#000", textDecoration: "none" }}
          onMouseOver={(e) => (e.currentTarget.style.textDecoration = "underline")}
          onMouseOut={(e) => (e.currentTarget.style.textDecoration = "none")}
        >
          Nucleic Acids lab (ARNA)
        </a>
        , the{" "}
        <a
          href="https://team.inria.fr/storm/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#000", textDecoration: "none" }}
          onMouseOver={(e) => (e.currentTarget.style.textDecoration = "underline")}
          onMouseOut={(e) => (e.currentTarget.style.textDecoration = "none")}
        >
          STORM team at Inria
        </a>
        , and the biotechnology companies{" "}
        <a
          href="https://www.byorna.bio/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#000", textDecoration: "none" }}
          onMouseOver={(e) => (e.currentTarget.style.textDecoration = "underline")}
          onMouseOut={(e) => (e.currentTarget.style.textDecoration = "none")}
        >
          bYoRNA
        </a>
        {" "}and{" "}
        <a
          href="https://novaptech.com/en/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#000", textDecoration: "none" }}
          onMouseOver={(e) => (e.currentTarget.style.textDecoration = "underline")}
          onMouseOut={(e) => (e.currentTarget.style.textDecoration = "none")}
        >
          Novaptech
        </a>
        .
      </>
    )
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

// 🧠 COMPONENT
const LatestNewsCard = () => {
  const latest = newsItems.slice(0, 3);

  const LinkText = ({ href, children }) => (
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
      return <LinkText href={item.link}>{item.title}</LinkText>;
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
                  <Chip label="New Publication" color="primary" />
                )}
              </Box>

              {/* TITLE */}
              <Typography variant="h6" sx={{ mb: 1 }}>
                {renderTitle(item)}
              </Typography>

              {/* DATE */}
              {item.date && item.type !== "paper" && (
                <Typography variant="body2" color="text.secondary">
                  {item.date}
                </Typography>
              )}
            </Box>
          ))}
        </Carousel>
      </CardContent>
    </Card>
  );
};

export default LatestNewsCard;