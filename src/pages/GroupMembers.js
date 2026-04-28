import React from 'react';
import {
  Card, CardHeader, CardMedia, Divider,
  Grid, Typography, List, ListItem,
  ListItemText, ListItemAvatar
} from '@mui/material';

import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';

// 👥 Current member cards
import AdelaideCard from '../components/people_cards/adelaideCard';
import ParthoCard from '../components/people_cards/parthoCard';
import AsmaCard from '../components/people_cards/asmaCard';
import GabrielCard from '../components/people_cards/gabrielCard';
import MarcoCard from '../components/people_cards/marcoCard';

// 🖼️ Images
import background from '../components/images/background.png';

function GroupMembers() {

  // 🎓 Alumni data (clean + maintainable)
  const alumni = [
    "Paul Soudon",
    "Jagjot Arora",
    "Merle Stein",
    "Lianne Gahan",
    "Jasmin Theilmann",
    "Torben Glass",
    "Eric Behle",
    "Laura Randarevitch"
  ];

  return (
    <section>
      <div className="container-fluid">

        {/* 🔝 HEADER */}
        <Card sx={{ mt: 2 }}>
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
              Group Members
            </Typography>
          </CardMedia>
        </Card>

        {/* 👥 CURRENT MEMBERS */}
        <Grid
          container
          spacing={3}
          sx={{ mt: 3, mb: 4 }}
          alignItems="stretch"
        >

          <Grid item xs={12}>
            <AdelaideCard />
          </Grid>

          <Grid item xs={12} md={6} sx={{ display: "flex" }}>
            <ParthoCard />
          </Grid>

          <Grid item xs={12} md={6} sx={{ display: "flex" }}>
            <AsmaCard />
          </Grid>

          <Grid item xs={12} md={6} sx={{ display: "flex" }}>
            <GabrielCard />
          </Grid>

          <Grid item xs={12} md={6} sx={{ display: "flex" }}>
            <MarcoCard />
          </Grid>

        </Grid>

        {/* 🎓 ALUMNI */}
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Alumni" />
          <Divider />

          <List sx={{ bgcolor: 'background.paper' }}>
            {alumni.map((name, index) => (
              <ListItem key={index}>
                <ListItemAvatar>
                  <PersonAddAltOutlinedIcon />
                </ListItemAvatar>
                <ListItemText primary={name} />
              </ListItem>
            ))}
          </List>
        </Card>

        {/* 👤 VISITING RESEARCHERS */}
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Visiting Researchers" />
          <Divider />

          <List sx={{ bgcolor: 'background.paper' }}>
            <ListItem>
              <ListItemAvatar>
                <PersonAddAltOutlinedIcon />
              </ListItemAvatar>
              <ListItemText
                primary="Evaldas Simanavicius, University of Manchester, United Kingdom"
                secondary="February 2023"
              />
            </ListItem>
          </List>
        </Card>

      </div>
    </section>
  );
}

export default GroupMembers;