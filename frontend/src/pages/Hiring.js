import React from 'react';
import { Card, CardMedia, Grid, Typography } from '@mui/material';
import background from '../components/images/background.png';


function Hiring(){
    return(
        <section>
            <div class="container-fluid">

                <Card sx={{  marginTop: "1em", position:"relative" }}>
                    <CardMedia
                        height="300"
                        component="h1"
                        sx={{ color: "white", textAlign: "center", padding: "1.5em",  margin: "0" }}
                        image={background}
                        alt="A field of corn"
                    ><Typography variant="h2"> 
                        Join Us!
                        </Typography></CardMedia>

                </Card>

                <Card sx={{ marginTop: "2em", position:"relative" }}>
                    <Typography variant="h5" sx={{ textAlign: "left", margin: "1em", display: { xs: "none", sm: "none", md: "block" } }}>
                    <p>
                        Hiring opportunities will be posted here as they become available. 
                    </p>
                    <p>
                    Master's students from physics, computer science, and quantitative biology that are interested in an internship are encouraged to contact Dr Adélaïde Raguin.
                    </p>
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: "left", margin: "1em", display: { xs: "block", sm: "block", md: "none" } }}>
                    <p>
                        Hiring opportunities will be posted here as they become available. 
                    </p>
                    <p>
                    Master's students from physics, computer science, and quantitative biology that are interested in an internship are encouraged to contact Dr Adélaïde Raguin.
                    </p>
                    </Typography>
                </Card>

                <Card sx={{ marginTop: "2em", position:"relative" }}>
                    <Typography variant="h5" sx={{ textAlign: "left", margin: "1em" }}>
                    PhD Candidate for EtransColi: A multidisciplinary study of Escherichia coli’s trans-translation regulation under stress conditions [POSITION FILLED]

                    </Typography>
                    <Typography  paragraph variant="body1" sx={{ textAlign: "left", margin: "1em" }}>
                    <p> Dr Adélaïde Raguin and Prof. Zoya Ignatova (University of Hamburg) are seeking to strengthen 
                    their collaboration with a person who holds a Master or equivalent degree in Molecular Life Sciences, 
                    Biochemistry, Molecular Biology, Biological Chemistry or equivalent, to pursue a PhD. </p>

                    <p>The project is on the interface of quantitative biology, molecular biology, and computational biophysics
                     to assess crucial questions on how bacteria alter translation to mitigate stress using cell-wide high-throughput 
                     approaches (e.g. RNA-Seq, Ribo-Seq, qPCR, and microarray techniques). During the PhD, you will be developing tailored 
                     experimental approaches to address translation alterations in stress. While you will collect experimental data in the 
                     laboratory of Prof. Ignatova, their analysis will be done applying the innovative approaches from the group of Dr Raguin.
                      You will thereby be embedded in a highly interdisciplinary team of theoreticians and experimentalists, and thus have the
                       unique opportunity to interact with wet lab and computer scientists.
                    </p>

                    <p>
                    To apply please send your motivation letter and detailed CV including the names of two persons (who would be willing to 
                    submit references upon request) to:     
                    </p>

                    <p>
                    Dr Adélaïde Raguin: 
                    adelaide.raguin@hhu.de
                    </p>



                    </Typography>
                </Card>

                <Card sx={{ marginTop: "2em", position:"relative" }}>
                    <Typography variant="h5" sx={{ textAlign: "left", margin: "1em" }}>
                    Research Assistant Position: Simulating biomolecules [POSITION FILLED]

                    </Typography>
                    <Typography  paragraph variant="body1" sx={{ textAlign: "left", margin: "1em" }}>
                    <p> The research teams of Dr Raguin and Prof. Dr Holger Gohlke are looking for an enthusiastic and self motivated candidate to
                     learn how, and conduct molecular dynamics 
                    simulations of plant carbohydrates and water molecules to investigate the behaviour and properties of these complex biomolecules.  </p>

                    <Typography variant="h6"> Key Responsibilities:</Typography>
                    <Typography variant="body1"> 
                    <p>- Design and set up molecular dynamics simulations of plant carbohydrates and water molecules</p>
                    <p>- Run simulations and analyse resulting data to gain insights into structural and dynamic properties of these molecules</p>
                    <p>- Work closely with the research team to interpret and present findings</p>
                    <p>- Assist with the preparation of research publications and presentations</p>
                    <p>- Stay up-to-date with developments in the field of molecular dynamics simulations and related areas of research</p></Typography>

                    <Typography variant="h6"> Candidate Profile:</Typography>
                    <Typography variant="body1"> 
                    <p>- Bachelor's or Master's degree in biochemistry, biophysics, or related fields</p>
                    <p>- Experience with software packages commonly used in molecular dynamics simulations, such as GROMACS, NAMD, or AMBER</p>
                    <p>- Strong analytical and problem-solving skills</p>
                    <p>- Excellent written and oral communication skills</p>
                    <p>- Ability to work independently and as part of a team</p></Typography>


                    
                    <Typography variant="h6">How to apply:</Typography>

                    <p>
                    Interested candidates should contact Dr Adélaïde Raguin. 
                    </p>

                    <p>
                    Dr Adélaïde Raguin: 
                    adelaide.raguin@hhu.de
                    </p>



                    </Typography>
                </Card>
            </div>
        </section> 

    );


}

export default Hiring;