import React from 'react';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, Grid, IconButton, Paper, styled, Typography } from "@mui/material";

import Carousel from 'react-material-ui-carousel';
import ArrowBack from '@mui/icons-material/ArrowBackIos';
import ArrowForward from '@mui/icons-material/ArrowForwardIos';

import MerleSanDiego from '../components/images/Merle_BPS.jpg';
import AsmaPhoto from '../components/people_cards/Asma-portraitformat.jpg';
import MerlePhoto from '../components/people_cards/Merle-portraitformat.jpg';
import LiannePhoto from '../components/people_cards/Lianne-portraitformat.jpg';
import TorbenPhoto from '../components/people_cards/torben.jpg';
import HeidelbergPhoto from '../components/images/Heidelberg2023.jpg';
import ManchesterPhoto from '../components/images/Manchester.jpg';
import ElvadasPhoto from '../components/images/elvadas.jpeg';




const LatestNewsCard = () => {

    return (
<Card padding="2em" navButtonsAlwaysVisible="True" sx={{ margin: "3em", position: "relative" }}  >
                    <Typography variant="h4">
                    Latest Lab Updates
                    </Typography>
                    <Divider />
                    <Carousel animation="slide" sx={{ margin: "2em"}}>
                    <Grid container justifyContent="space-around" spacing={1} sx={{marginBottom: "2em"}} >
                        <Grid item xs={2} sm={6} md={3.5}>
                            <Card style={{ display: 'flex', minHeight: "550px", justifyContent: 'space-between', flexDirection: 'column' }} elevation={5} >
                                <CardMedia sx={{
                                    margin: "0 auto", maxHeight: 300,
                                    width: "auto",
                                    height: "auto",
                                    
                                }}
                                    component="img"
                                    image={ManchesterPhoto}
                                    alt="A photo of canal street in Manchester"
                                />
                                <CardContent>
                                    <Typography align='left' padding="1em" variant="h5" >
                                    April 2023: Lianne Gahan presented her PhD research at the Manchester Multiscale Modelling conference                            </Typography>
                                </CardContent>
                            </Card >
                        </Grid>
                        <Grid item xs={2} sm={6} md={3.5} >
                        <Card style={{ display: 'flex', minHeight: "550px", justifyContent: 'space-between', flexDirection: 'column' }} elevation={5} >
                        <CardMedia sx={{
                            margin: "0 auto", maxHeight: 300,
                            width: "auto",
                            height: "auto",
                            
                        }}
                            component="img" 
                            image={HeidelbergPhoto}
                            alt="A photo of Partho Sahka De meeting some colleagues at the EMBO workshop"
                        />
                        <CardContent>
                            <Typography align='left' padding="1em" variant="h5" >
                            Feb 2023: Partho Sakha De attended the EMBO Workshop: In situ structural biology: from cryo-EM to multi-scale modelling in Heidelberg
                            </Typography>
                        </CardContent>

                    </Card >

                        </Grid>
                        <Grid item xs={2} sm={6} md={3.5} >
                        <Card style={{ display: 'flex', minHeight: "550px", justifyContent: 'space-between', flexDirection: 'column' }} elevation={5} >
                        <CardMedia sx={{
                            margin: "0 auto", maxHeight: 300,
                            width: "auto",
                            height: "auto",
                            
                        }}
                            component="img"
                            image={ElvadasPhoto}
                            alt="A photo of Elvadas from his linked in profile"
                        />
                        <CardContent>
                            <Typography align='left' padding="1em" variant="h5" >
                            Feb 2023: We welcome Evaldas Simanavicius from Manchester University for an internship in the group!
                            </Typography>
                        </CardContent>
                    </Card >
                        </Grid>
                    </Grid>   



                    <Grid container justifyContent="space-around" spacing={1} sx={{marginBottom: "2em"}} >
                        <Grid item xs={3} sm={6} md={3.5}>
                            <Card style={{ display: 'flex', minHeight: "550px", justifyContent: 'space-between', flexDirection: 'column' }} elevation={5} >
                                <CardMedia sx={{
                                    margin: "0 auto", maxHeight: 300,
                                    width: "auto",
                                    height: "auto",
                                    
                                }}
                                    component="img"
                                    image={MerleSanDiego}
                                    alt="Merle Stein at the Annual Biophysical Society Meeting"
                                />
                                <CardContent>
                                    <Typography align='left' padding="1em" variant="h5" >
                                    Feb 2023: Merle Stein is attending the Annual Biophysical Society Meeting in San Diego, to discuss her research on protein production regulation in plants
                                    </Typography>
                                </CardContent>
                            </Card >
                        </Grid>
                        <Grid item xs={2} sm={6} md={3.5} >
                            <Card style={{ display: 'flex', minHeight: "550px", justifyContent: 'space-between', flexDirection: 'column' }} elevation={5} >
                                <CardMedia sx={{
                                    margin: "0 auto", maxHeight: 300,
                                    width: "auto",
                                    height: "auto",
                                    
                                }}
                                    component="img" 
                                    image={LiannePhoto}
                                    alt="A portrait of Lianne Gahan"
                                />
                                <CardContent>
                                    <Typography align='left' padding="1em" variant="h5" >
                                    Jan 2023: Lianne Gahan joined the group as a post doctoral researcher after defending her PhD at the University of Sheffield, UK
                                    </Typography>
                                </CardContent>

                            </Card >

                        </Grid>
                        <Grid item xs={2} sm={6} md={3.5} >
                            <Card style={{ display: 'flex', minHeight: "550px", justifyContent: 'space-between', flexDirection: 'column' }} elevation={5} >
                                <CardMedia sx={{
                                    margin: "0 auto", maxHeight: 300,
                                    width: "auto",
                                    height: "auto",
                                    
                                }}
                                    component="img" 
                                    image={MerlePhoto}
                                    alt="A portrait of Merle Stein"
                                />
                                <CardContent>
                                    <Typography align='left' padding="1em" variant="h5" >
                                    Oct 2022: Merle Stein joined our group as a CEPLAS graduate school PhD student
                                    </Typography>
                                </CardContent>

                            </Card >
                        </Grid>
                    </Grid>   
                    
                    
                    <Grid container justifyContent="space-around" spacing={1} sx={{marginBottom: "2em"}} >
                        <Grid item xs={2} sm={6} md={3.5}>
                            <Card style={{ display: 'flex', minHeight: "550px", justifyContent: 'space-between', flexDirection: 'column' }} elevation={5} >
                                <CardMedia sx={{
                                    margin: "0 auto", maxHeight: 300,
                                    width: "auto",
                                    height: "auto",
                                    
                                }}
                                    component="img" 
                                    image={TorbenPhoto}
                                    alt="A portrait of Torben Glass"
                                />
                                <CardContent>
                                    <Typography align='left' padding="1em" variant="h5" >
                                    Oct 2022: Torben Glass joined our group as a research assistant to build an interface for our PREDIG software
                                    </Typography>
                                </CardContent>

                            </Card >
                        </Grid>
                        <Grid item xs={2} sm={6} md={3.5} >
                            <Card style={{ display: 'flex', minHeight: "550px", justifyContent: 'space-between', flexDirection: 'column' }} elevation={5} >
                                <CardMedia sx={{
                                    margin: "0 auto", maxHeight: 300,
                                    width: "auto",
                                    height: "auto",
                                    
                                }}
                                    component="img" 
                                    image={AsmaPhoto}
                                    alt="A portrait of Asma Ben Janette"
                                />
                                <CardContent>
                                    <Typography align='left' padding="1em" variant="h5" >
                                    Oct 2022: Asma Ben Janete joined our group as a Master's student to research cytoskeletal transport
                                    </Typography>
                                </CardContent>

                            </Card >

                        </Grid>
                        <Grid item xs={2} sm={6} md={3.5} >
                            <Card style={{ display: 'flex', minHeight: "550px", justifyContent: 'space-between', flexDirection: 'column' }} elevation={5} >
                                <CardMedia sx={{
                                    margin: "0 auto", maxHeight: 300,
                                    width: "auto",
                                    height: "auto",
                                    
                                }}
                                    component="img" 
                                    image="https://www.cs.hhu.de/fileadmin/_processed_/a/e/csm_Partho_2022_da300fefee.jpg"
                                    alt="A portrait of Partho Sahka De"
                                />
                                <CardContent>
                                    <Typography align='left' padding="1em" variant="h5" >
                                    April 2022: Dr Partho Sakha De joined the group as a postdoctoral researcher
                                    </Typography>
                                </CardContent>

                            </Card >
                        </Grid>
                    </Grid>
                
                
                    
                
                </Carousel>
                </Card>
    );
}
export default LatestNewsCard;

