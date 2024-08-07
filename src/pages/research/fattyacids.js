import React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import BioSCCard from '../../components/funders_cards/BioSCCard_noexpand';
import background from '../../components/images/background.png';

//https://oup.silverchair-cdn.com/oup/backfile/Content_public/Journal/nar/48/6/10.1093_nar_gkaa055/1/gkaa055fig5.jpeg


function FattyAcids(){
    return(

        <section>
        <div class="container-fluid">
            <Card sx={{ margin: "2em", marginTop: "1em", position:"relative" }}>
                    <CardMedia
                        height="300"
                        component="h1"
                        sx={{ color: "white", textAlign: "center", padding: "1em", fontSize: "4em", margin: "0" }}
                        image={background}
                    alt="A field of corn"
                    >
                    <Typography variant="h2">
                    Fatty Acid Synthesis
                    </Typography>
                    </CardMedia>

            </Card>
            <Card sx={{ margin: "2em", marginTop: "1em", position:"relative" }}>
            <CardContent>
                <Typography variant="body 1" >
                The synthesis and modification of fatty acids from carbohydrates are paramount for the production of lipids. Simultaneously, 
                lipids are pivotal energy storage in human health. They are associated with various metabolic diseases and their production 
                pathways are for instance candidate therapeutic targets for cancer treatments. To study the dynamics of fatty acid   <Typography style={{display:'inline-flex'}} sx={{fontStyle: 'italic'}}>de novo </Typography> synthesis and 
                the subsequent microsomal modifications, we develop a deterministic approach based on Ordinary Differential Equations. 
           
                </Typography>
            </CardContent>
            </Card>
            <Card sx={{ margin: "2em", marginTop: "1em" }}>

            <Grid container justifyContent="space-around" spacing={1} padding="2em" sx={{position:"relative"}} alignItems="center"  >
                <Grid item xs={4}>           
                        <CardContent>
                            <Typography variant="h5" align='justify' >
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed neque ipsum. 
                            Donec tincidunt tellus ac eros mattis laoreet. Mauris neque dolor, sollicitudin at faucibus eu,
                            finibus a leo. Nam tempus hendrerit lobortis. Suspendisse et ornare magna. Aliquam imperdiet rutrum massa,
                            id suscipit erat faucibus vitae. Vivamus congue aliquet ligula, a gravida orci lobortis quis. Etiam risus libero, 
                            lacinia a elementum at, sodales at purus. Fusce eget neque finibus, porttitor tellus vitae, maximus purus. Mauris eu ex ac purus suscipit viverra.</p>
                            
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed neque ipsum. 
                            Donec tincidunt tellus ac eros mattis laoreet. Mauris neque dolor, sollicitudin at faucibus eu,
                            finibus a leo. Nam tempus hendrerit lobortis. Suspendisse et ornare magna. Aliquam imperdiet rutrum massa,
                            id suscipit erat faucibus vitae. Vivamus congue aliquet ligula, a gravida orci lobortis quis. Etiam risus libero, 
                            lacinia a elementum at, sodales at purus. Fusce eget neque finibus, porttitor tellus vitae, maximus purus. Mauris eu ex ac purus suscipit viverra.</p>
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item xs={6} >
                    <Card sx={{ margin: "2em", marginTop: "1em", colour: "transparent", position:"relative" }}>

                    
                        <CardMedia sx={{
                        padding: "1em", maxWidth: 600,
                        margin: "0 auto",
                    }}
                        component="img"
                        image="https://port.silverchair-cdn.com/port/content_public/journal/biochemsoctrans/45/4/10.1042_bst20160407/2/bst-2016-0407c_01.jpeg?Expires=1679403550&Signature=2ZywAODcs9FV2FLzsbqCw21opO3A7F70Ey8PY-la2hrF-1Hu0qmbsicdTx8enZTtqR4NJbI0sn32uqqz4AYGgfWz10KAzNWP1NHC-yg~pMMQXFl0sbBWIK4zl8Czq5OXRDEr2NcDWL4VtS1lnRq0PkJO-AMqlr-raTPkNFq7JX3E8PCSV0g7iIoSgkpr1f-DoID5lHleOc4dpxAYv7vgoGgRslDBf7Vjd~sOSOpXEmsfvlNY~5f72upKltMUILnYmjfpI6NcpuzyU4gM5v7JJIo~g2uDoyS9zwUGxG6cRcJ3SjJKYKxkT4eByOWFVXpBTtBT4bRuFLrqrPuIZlj9IA__&Key-Pair-Id=APKAIE5G5CRDK6RD3PGA"
                        alt="Structure and components of starch granules: amylopectin and amylose."
                    />
                    </Card>
                    <BioSCCard/>
                    </Grid>

                </Grid>

</Card>
        
            </div>
        </section>
    );


}

export default FattyAcids;