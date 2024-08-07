import React from 'react';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, Grid, IconButton, Paper, styled, Typography } from "@mui/material";
import ResearchPaperCard from '../components/ResearchPaperCard';
import { List, ListItem, ListItemText } from '@mui/material';
import MeetUsCard from '../components/MeetUsCard';
import SoftwareCard from './research/softwareCard';
import background from '../components/images/background.png';
import LatestNewsCard from '../components/latest_news';


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
            
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              
            }} >
                <Card sx={{position:"relative" }}>
                    <Box sx={{  position: 'relative' }}>
                        <CardMedia
                                    width="100%"
                                    component="h1"
                                    sx={{ color: "white", 
                                    textAlign: "center", 
                                    padding: "0.25em", 
                                    margin: "0",
                                    position:"relative" }}
                                    image={background}
                                    alt="A field of corn"
                                ><Typography variant="h1" sx={{ textAlign: "center", margin: "1em", color:"white", position:"relative" }}>
                            Adélaïde Raguin's 
                            <p>Research Team</p>
                        </Typography>
                        <Typography variant="h2" sx={{ textAlign: "center", margin: "1em", color: "white", position:"relative" }}>
                            Computational and Theoretical Biophysics
                        </Typography>
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
                        
                    </Box>
                </Box>
                </Card>

            </Box>
            <Card sx={{marginTop: "1em",  position:"relative", color: "white", paddingLeft: "1em",
              paddingRight: "1em"}}>
                   <Typography paddingLeft="0.25em" paddingRight="0.25em"  align='left' paddingLeft="2em" paddingRight="2em" variant="h5" sx={{ marginTop: "2em", marginBottom: "2em", color: "black", display: { xs: "none", sm: "none", md: "block" } }}>
                        <p>We develop computational and mathematical methods to study the dynamics of complex biological systems 
                        at the sub-cellular scale. Our main expertise are stochastic simulations that we use to investigate the 
                        synthesis or degradation of large polymeric systems, and collective transport processes in one dimension. Some of the scientific questions we investigate are: </p>

                        <p>How does the three-dimensional structure of large macromolecules 
                        (e.g. starch, glycogen, lignocellulose) interplays with its dynamics?</p>
                        <p> What is the impact of ribosome interactions and 
                        traffic along the mRNA on protein synthesis regulation?</p> 
                        <p>How do microtubule junctions contribute to control the cytoskeletal transport?</p>
                    </Typography>
                    <Typography paddingLeft="0.25em" paddingRight="0.25em"  align='left' paragraph variant="body1" sx={{ marginTop: "2em", marginBottom: "2em", color: "black", display: { xs: "block", sm: "block", md: "none" } }}>
                        <p>We develop computational and mathematical methods to study the dynamics of complex biological systems 
                        at the sub-cellular scale. Our main expertise are stochastic simulations that we use to investigate the 
                        synthesis or degradation of large polymeric systems, and collective transport processes in one dimension. Some of the scientific questions we investigate are: </p>

                        <p>How does the three-dimensional structure of large macromolecules 
                        (e.g. starch, glycogen, lignocellulose) interplays with its dynamics?</p>
                        <p> What is the impact of ribosome interactions and 
                        traffic along the mRNA on protein synthesis regulation?</p> 
                        <p>How do microtubule junctions contribute to control the cytoskeletal transport?</p>
                    </Typography>
                    

                <Grid container  spacing={3}  sx={{marginBottom:"2em", position:"relative", display: 'flex', alignItems: 'stretch'}}  >
                    <Grid item xs={12} sm={12} md={4} >
                        <ResearchPaperCard />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <MeetUsCard/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} >
                        <SoftwareCard/>
                    </Grid>

                </Grid>

                <LatestNewsCard sx={{marginTop:"2em", marginBottom:"3em"}}/>
                <p></p>
                
                
                </Card>
                </Box>
               
                
            </div>
        </section>
    );
}
export default Home;

