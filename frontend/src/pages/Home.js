import React from 'react';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, Grid, IconButton, Paper, styled, Typography } from "@mui/material";
import ResearchPaperCard from '../components/ResearchPaperCard';
import { List, ListItem, ListItemText } from '@mui/material';
import MeetUsCard from '../components/MeetUsCard';
import SoftwareCard from './research/softwareCard';
import background from '../components/images/background.png';
import LatestNewsCard from '../components/news_carousel';


function Home(){
    return(
        <section>
            <div class="container-fluid">
            <Box
            sx={{zIndex: "-1"}}>
            <Box sx={{
              position: "sticky",
              top: "0",
              paddingTop: "1em",
              paddingBottom: "1em",
              paddingLeft: "2em",
              paddingRight: "2em",
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              
            }} >
                <Card sx={{position:"relative" }}>
                    <Box sx={{ position: 'relative' }}>
                        <CardMedia
                                    height="300"
                                    component="h1"
                                    sx={{ color: "white", 
                                    textAlign: "center", 
                                    padding: "5em", 
                                    fontSize: "4em", 
                                    margin: "0", 
                                    position:"relative" }}
                                    image={background}
                                    alt="A field of corn"
                                >
                        </CardMedia>
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                color: 'white',
                            }}
                            >
                        <Typography variant="h1" sx={{ textAlign: "center", margin: "1em", color:"white", position:"relative" }}>
                            Adélaïde Raguin's 
                            <p>Research Team</p>
                        </Typography>
                        <Typography variant="h2" sx={{ textAlign: "center", margin: "1em", color: "white", position:"relative" }}>
                            Computational and Theoretical Biophysics
                        </Typography>
                    </Box>
                </Box>
                </Card>

            </Box>
            
            <Card sx={{marginTop: "1em", marginLeft: "2em", marginRight: "2em", position:"relative", color: "white", paddingLeft: "2em",
              paddingRight: "2em",}}>
                   
                    <Typography padding="2em"  align='left' paragraph variant="h5" sx={{ margin: "1em", color: "black" }}>
                        <p>We develop computational and mathematical methods to study the dynamics of complex biological systems 
                        at the sub-cellular scale. Our main expertise are stochastic simulations that we use to investigate the 
                        synthesis or degradation of large polymeric systems, and collective transport processes in one dimension. Some of the scientific questions we investigate are: </p>

                        <p>How does the three-dimensional structure of large macromolecules 
                        (e.g. starch, glycogen, lignocellulose) interplays with its dynamics?</p>
                        <p> What is the impact of ribosome interactions and 
                        traffic along the mRNA on protein synthesis regulation?</p> 
                        <p>How do microtubule junctions contribute to control the cytoskeletal transport?</p>
                    </Typography>

                <Grid container justifyContent="space-around" spacing={1} sx={{position:"relative"}} >
                    <Grid item xs={8} sm={6} md={3.5}>
                        <MeetUsCard/>
                    </Grid>
                    <Grid item xs={8} sm={6} md={3.5} >
                        <ResearchPaperCard />
                    </Grid>
                    <Grid item xs={8} sm={6} md={3.5} >
                        <SoftwareCard/>
                    </Grid>

                </Grid>

                <LatestNewsCard/>
                </Card>
               
                </Box>
               
                
            </div>
        </section>
    );
}
export default Home;

