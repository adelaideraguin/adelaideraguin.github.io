import React from 'react';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, Grid, IconButton, styled, Typography } from "@mui/material";
import ResearchPaperCard from '../components/ResearchPaperCard';
import { List, ListItem, ListItemText } from '@mui/material';
import MeetUsCard from '../components/MeetUsCard';
import SoftwareCard from './research/softwareCard';
import image from '../components/people_cards/group.jpg';
import background from '../components/images/background.png';
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
            
            <Card sx={{marginTop: "1em", position:"relative", color: "white",}}>
                   
                    <Typography padding="2em"  align='justify' paragraph variant="h5" sx={{ margin: "1em", color: "black" }}>
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

                <Card padding="2em" sx={{ margin: "3em", position: "relative" }}>
                    <Typography variant="h4">
                    Latest Lab Updates
                    </Typography>

                    
                    <Divider />
                    <List sx={{ width: '100%' }}>
                        <ListItem>
                            <Typography variant="h5">
                                March 2023: The first group seminar of the year, everyone presented their research and we shared some lovely homecooked snacks!
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant="h5">
                                Feb 2023: Lianne Gahan will present her PhD research at the Manchester Multiscale Modelling conference in April
                            </Typography> 
                        </ListItem>
                        <ListItem>
                            <Typography variant="h5">
                                Feb 2023: We welcome Evaldas Simanavicius from Manchester University for an internship in the group!
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant="h5">
                            Feb 2023: Merle Stein is attending the Annual Biophysical Society Meeting in San Diego (USA), to discuss her research on protein production regulation in plants
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant="h5">
                             Jan 2023: Lianne Gahan joined the group as a post doctoral researcher after successfully defending her PhD at the University of Sheffield, UK
                             </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant="h5">
                                Oct 2022: Merle Stein joined our group as a CEPLAS graduate school PhD student
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant="h5">
                                Oct 2022: Torben Glass joined our group as a research assistant to build an interface for our PREDIG software
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant="h5">
                                Oct 2022: Asma Ben Janete joined our group as a Master's student to research cytoskeletal transport
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant="h5">
                            April 2022: Dr Partho Sakha De joined the group as a postdoctoral researcher
                            </Typography>
                        </ListItem>
                    </List>

                </Card>
                </Card>
                </Box>
            </div>
        </section>
    );
}

export default Home;

