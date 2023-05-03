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

            <Card sx={{ margin: "2em", marginTop: "1em", position:"relative"}}>
                    <CardMedia
                        height="300"
                        component="h1"
                        sx={{ color: "white", textAlign: "center", padding: "1.5em", fontSize: "4em", margin: "0" }}
                        image={background}
                    ><Typography variant="h2"> 
                        Our work is supported by ...
                        </Typography></CardMedia>

            </Card>

        <div>
            <Grid container justifyContent="space-around" spacing={1} sx={{marginBottom: "2em"}} >
                <Grid item xs={10} sm={6} md={3.5}>
                    <DFGCard />
                </Grid>
                <Grid item xs={10} sm={6} md={3.5} >
                    <BioSCCard />

                </Grid>
                <Grid item xs={10} sm={6} md={3.5} >
                    <CEPLASCard />
                </Grid>
            </Grid>   
        </div>
        </div>
        </section>
    );


}

export default Funding;