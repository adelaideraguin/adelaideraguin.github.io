import React from 'react';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, Grid, IconButton, styled, Typography } from "@mui/material";

import GlycogenCard from '../components/research_cards/glycogenCard';
import TransportCard from '../components/research_cards/transportCard';
import BiosynthesisCard from '../components/research_cards/biosynthesisCard';
import ProteinSynthesisCard from '../components/research_cards/proteinsynthesisCard';
import FattyAcidsCard from '../components/research_cards/fattyacidsCard';
import StarchCard from '../components/research_cards/starchCard';
import background from '../components/images/background.png';



function Research(){
    return(
        <section>
        <div class="container-fluid">
            <Card sx={{ margin: "2em", marginTop: "1em", position:"relative" }}>
                <CardMedia
                    height="300"
                    component="h1"
                    sx={{ color: "white", textAlign: "center", padding: "1.5em", fontSize: "4em", margin: "0" }}
                    image={background}
                    alt="A field of corn"
                    ><Typography variant="h2"> 
                        Research Activity
                        </Typography>
                </CardMedia>

            </Card> 
            <Card sx={{ margin: "2em", position:"relative"  }}>
                <Typography variant="h5" sx={{ textAlign: "center", margin: "1em" }}>
                We develop computational and mathematical methods to study the dynamics of complex biological systems at the sub-cellular scale. 
                Our main expertise are stochastic simulations 
                that we use to investigate the synthesis or degradation of large polymeric systems, and collective transport processes in one dimension.
                </Typography>
            </Card>

                <Grid container justifyContent="space-around" spacing={1} marginTop={"3em"}>
                    <Grid item xs={5.5} >
                        <BiosynthesisCard/>
                    </Grid>
                    <Grid item xs={5.5} >
                        <StarchCard/>
                    </Grid>
                </Grid>
                <Grid container justifyContent="space-around" spacing={1} marginTop={"3em"} >
                    <Grid item xs={5.5} >
                    <ProteinSynthesisCard/>                       
                    </Grid>
                    <Grid item xs={5.5} >
                        <TransportCard/>
                    </Grid>
                </Grid>
                <Grid container justifyContent="space-around" spacing={1} marginTop={"3em"} marginBottom={'4em'} >
                    <Grid item xs={5.5} >
                        <GlycogenCard/>
                    </Grid>

                    <Grid item xs={5.5} >
                        <FattyAcidsCard/>
                    </Grid>
                </Grid>







        </div>
        </section>
    );


}

export default Research;