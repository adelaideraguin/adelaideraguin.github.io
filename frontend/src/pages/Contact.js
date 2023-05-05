
import React from 'react';
import AboutUsCard from '../components/AboutUsCard';
import LinkedInCard from '../components/LinkedInCard';
import EmailCard from '../components/EmailCard';
import { Card, CardMedia, Grid, Typography } from '@mui/material';
import background from '../components/images/background.png';


function Contact(){
    return(
        <section>
        <div class="container-fluid">
            <Card sx={{  marginTop: "1em", marginBottom: "2em", position:"relative"}}>
                    <CardMedia
                        height="300"
                        component="h1"
                        sx={{ color: "white", textAlign: "center", padding: "1.5em", margin: "0" }}
                        image={background}
                        alt="Wavey Binary"
                    ><Typography variant="h2"> 
                        Contact and Social Media
                        </Typography></CardMedia>

            </Card>
            

            <Grid container justifyContent="space-around" spacing={3} sx={{position:"relative"}} marginBottom="2em" >
                <Grid item xs={12} sm={12} md={4} >
                    <LinkedInCard/>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <AboutUsCard />
                </Grid>
                <Grid item xs={12} sm={12} md={4} >
                   <EmailCard/>
                </Grid>
                
            </Grid>
            <Card sx={{ position:"relative" }}>
                <Typography variant="h5" sx={{ textAlign: "center", margin: "1em" }}>
                        You can find us in the Computational Cell Biology Institute at Heinrich-Heine University
                </Typography>
                <Typography variant="h5" sx={{ textAlign: "center", margin: "1em" }}>
                
                Building 25.02, Level 02,
                Universitätsstraße 1,
                40225 Düsseldorf
                </Typography>
            </Card>    
        </div>
        </section>
    );


}

export default Contact;