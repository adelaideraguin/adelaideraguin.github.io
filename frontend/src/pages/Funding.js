import React from 'react';
import { Card, CardMedia, Grid, Typography } from '@mui/material';
import BioSCCard from '../components/funders_cards/BioSCCard';
import DFGCard from '../components/funders_cards/DFGCard';
import CEPLASCard from '../components/funders_cards/CEPLASCard';
import background from '../components/images/background.png';



function Funding(){
    return(

        <section>
        <div class="container-fluid">

            <Card sx={{ marginTop: "1em", marginBottom: "2em", position:"relative"}}>
                    <CardMedia
                        height="300"
                        component="h1"
                        sx={{ color: "white", textAlign: "center", padding: "1.5em", fontSize: "4em", margin: "0" }}
                        image={background}
                    ><Typography variant="h2"> 
                        Our work is supported by ...
                        </Typography></CardMedia>

            </Card>

       
            <Grid container justifyContent="space-around" spacing={3} sx={{ marginBottom: "2em"}} >
                <Grid item xs={12} sm={12} md={4}>
                    <DFGCard />
                </Grid>
                <Grid item xs={12} sm={12} md={4} >
                    <BioSCCard />

                </Grid>
                <Grid item xs={12} sm={12} md={4} >
                    <CEPLASCard />
                </Grid>
            </Grid>   
       
        </div>
        </section>
    );


}

export default Funding;