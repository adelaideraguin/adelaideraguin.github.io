import React from 'react';
import { Card, CardMedia, Grid, Typography } from '@mui/material';
import LianneCard from '../components/people_cards/lianneCard';
import AdelaideCard from '../components/people_cards/adelaideCard';
import MerleCard from '../components/people_cards/merleCard';
import JasminCard from '../components/people_cards/jasminCard';
import AsmaCard from '../components/people_cards/asmaCard';
import ParthoCard from '../components/people_cards/parthoCard';
import TorbenCard from '../components/people_cards/torbenCard';

import background from '../components/images/background.png';
import groupphoto from  '../components/images/group2.jpg';

function GroupMembers(){
    return(
        <section>
            <div class="container-fluid">

                <Card sx={{ marginTop: "1em", position:"relative" }}>
                    <CardMedia
                        height="300"
                        component="h1"
                        sx={{ color: "white", textAlign: "center", padding: "1.5em", fontSize: "4em", margin: "0" }}
                        image={background}
                        alt="binary"
                    >
                        <Typography variant="h2"> 
                        Group Members
                        </Typography>
                    </CardMedia>
                </Card>

                <Card sx={{ marginTop: "2em", position:"relative", display: { xs: "none", sm: "none", md: "flex" } }}>
                    <CardMedia
                        sx={{ display: 'flex', color: "white", textAlign: "center", padding: "2.75em", margin: "0" }}
                        image={groupphoto}>
                        <Typography variant="h4" sx={{ textAlign: "center", paddingTop: "3em", paddingBottom: "1em", margin: "1em" }}>
                            <p>
                                If you are interested in working with us then please get in touch! 
                            </p>
                            <p>
                            Master's degree students from Physics, Computer Sciences, and Quantitative Biology that are interested in an internship are encouraged to contact Dr Adélaïde Raguin.
                            </p>
                        </Typography>
                    </CardMedia>

                </Card>

                <Card sx={{ marginTop: "2em", position:"relative", display: { xs: "stretch", sm: "stretch", md: "none" } }}>
                    <CardMedia
                        height="400"
                        component="h1"
                        sx={{ color: "white", textAlign: "center", padding: "1.5em",  margin: "0" }}
                        image={groupphoto}
                        alt="binary"
                    >
                    </CardMedia>
                </Card>
            
                <p>
                    <AdelaideCard />
                </p>

              
                <Grid container justifyContent="space-around" spacing={3} sx={{position:"relative", marginTop:"2em"}} >
                    <Grid item xs={12} sm={12} md={6}>
                        <ParthoCard />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <LianneCard />
                    </Grid>
                </Grid>

               
                <Grid container justifyContent="space-around" spacing={3} sx={{position:"relative", marginTop:"2em"}} >
                    <Grid item xs={12} sm={12} md={6}>
                        <MerleCard />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                    <TorbenCard />
                    </Grid>
                </Grid>

        
                <Grid container justifyContent="space-around" marginBottom={"2em"} spacing={3} sx={{position:"relative", marginTop:"2em"}} >
                    <Grid item xs={12} sm={12} md={6}>
                        <JasminCard />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <AsmaCard />
                    </Grid>
                </Grid>



           
            </div>
        </section>
    );


}

export default GroupMembers;