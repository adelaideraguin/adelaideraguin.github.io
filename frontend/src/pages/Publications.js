import React from 'react';
import { Card, CardMedia, CardContent, Grid, Typography } from '@mui/material';
import Behle2021Card from '../components/paper_cards/Behle2021';
import Pfister2020Card from '../components/paper_cards/Pfister2020';
import Raguin2017Card from '../components/paper_cards/Raguin2017';
import McFarland2020Card from '../components/paper_cards/McFarland2020';
import Raguin2020Card from "../components/paper_cards/Raguin2020";
import Raguin2013Card from "../components/paper_cards/Raguin2013";
import Foko2023Card from '../components/paper_cards/Foko2023';
import Raguin2023Card from '../components/paper_cards/Raguin2023';
import Rousset2023Card from '../components/paper_cards/Rousset2023';
import SakhaDe2023Card from '../components/paper_cards/Sakhade2023';
import SakhaDeB2023Card from '../components/paper_cards/SakhaDe_B2023';
import background from '../components/images/background.png';
import BenJanete2024Card from '../components/paper_cards/BenJanete2024';
import SakhaDe2024Card from '../components/paper_cards/SakhaDe2024';


function Publications(){
    return(

        <section>
        <div class="container-fluid">
        <Card sx={{ marginTop: "1em", marginBottom:"2em", position:"relative" }}>
                    <CardMedia
                        component="h1"
                        sx={{ color: "white", textAlign: "center", padding: "1.5em", margin: "0" }}
                        image={background}
                        alt="A field of corn"
                    ><Typography variant="h2"> 
                        Publications List
                        </Typography></CardMedia>

            </Card>
            <p>
                <SakhaDe2024Card/>
            </p> 
            <p>
                <BenJanete2024Card/>
            </p>
            <p>
                <SakhaDeB2023Card/>
            </p>
            <p> 
                <SakhaDe2023Card/>
            </p>
            <p>
                <Rousset2023Card/>
            </p>
            <p>
            <Raguin2023Card/>
            </p>
            <p>
            <Foko2023Card/>
            </p>
            <p>    
            <Behle2021Card />
            </p>
            <p>
            <Pfister2020Card />
            </p>
            <p>
            <McFarland2020Card />
            </p>
            <p>
            <Raguin2020Card />
            </p>
            <p>
            <Raguin2017Card />
            </p>
            <p>
            <Raguin2013Card />
            </p>

        </div>
        </section>
    );


}

export default Publications;