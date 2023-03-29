
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
            <Card sx={{ margin: "2em", marginTop: "1em", position:"relative" }}>
                    <CardMedia
                        height="300"
                        component="h1"
                        sx={{ color: "white", textAlign: "center", padding: "1.5em", fontSize: "4em", margin: "0" }}
                        image={background}
                        alt="Wavey Binary"
                    ><Typography variant="h2"> 
                        Contact and Social Media
                        </Typography></CardMedia>

            </Card>
            

            <Grid container justifyContent="space-around" spacing={1} sx={{position:"relative"}} marginBottom="2em" >
                <Grid item xs={8} sm={6} md={3.5} >
                    <LinkedInCard/>
                </Grid>
                <Grid item xs={8} sm={6} md={3.5} >
                   <EmailCard/>
                </Grid>
                <Grid item xs={8} sm={6} md={3.5}>
                    <AboutUsCard />
                </Grid>
            </Grid>
            <Card sx={{ margin: "2em", position:"relative" }}>
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