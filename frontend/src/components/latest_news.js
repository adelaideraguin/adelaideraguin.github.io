import React from 'react';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, Grid, IconButton, Paper, styled, Typography } from "@mui/material";
import {List, ListItem, ListItemText, ListItemAvatar, Avatar} from "@mui/material"
import Carousel from 'react-material-ui-carousel';

import ArrowBack from '@mui/icons-material/ArrowBackIos';
import ArrowForward from '@mui/icons-material/ArrowForwardIos';

import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import CelebrationOutlinedIcon from '@mui/icons-material/CelebrationOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';

const LatestNewsCard = () => {

    return (

        <Card style={{ display: 'flex', minHeight: "550px", justifyContent: 'space-between', flexDirection: 'column' }} elevation={5} >

<CardHeader
                       title="Latest Lab Updates"
        />
        <Divider />

        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <ListItem>
            <ListItemAvatar>
            <CampaignOutlinedIcon />
            </ListItemAvatar>
            <ListItemText primary={
                            <React.Fragment>
                                <Typography style={{display:'inline-flex'}} sx={{fontWeight: 'bold'}}>Paper published:  </Typography> {"Stochastic model highlights the impact of crystallinity on saccharification dynamics depending on plant chemotype and pre-treatment" }
            </React.Fragment>}
            secondary="July 2024" />
            <Button variant="contained"  href="http://dx.doi.org/10.13140/RG.2.2.26381.96489">
                        Learn More
                    </Button>
        </ListItem>
        <ListItem>
            <ListItemAvatar>
            <CampaignOutlinedIcon />
            </ListItemAvatar>
            <ListItemText primary={
                            <React.Fragment>
                                <Typography style={{display:'inline-flex'}} sx={{fontWeight: 'bold'}}>Paper published:  </Typography> {"Transport at a complex multiple-input-multiple-output TASEP junction" }
            </React.Fragment>}
            secondary="June 2024" />
            <Button variant="contained"  href="http://dx.doi.org/10.13140/RG.2.2.35661.04326">
                        Learn More
                    </Button>
        </ListItem>
        <ListItem>
            <ListItemAvatar>
            <CampaignOutlinedIcon />
            </ListItemAvatar>
            <ListItemText primary="The BioSC funded OptiCellu project has begun! A multidisciplinary approach towards the sustainable production of cellulose fibres" secondary="April 2024" />
            <Button variant="contained"  href="https://www.biosc.de/OptiCellu_EN">
                        Learn More
                    </Button>
        </ListItem>


        <ListItem>
            <ListItemAvatar>
            <CampaignOutlinedIcon />
            </ListItemAvatar>
            <ListItemText primary={
                            <React.Fragment>
                                <Typography style={{display:'inline-flex'}} sx={{fontWeight: 'bold'}}>Paper published:  </Typography> {"A detailed sensitivity analysis identifies the key factors influencing the enzymatic saccharification of lignocellulosic biomass" }
            </React.Fragment>}
            secondary="January 2024" />
            <Button variant="contained"  href="https://doi.org/10.1016/j.csbj.2024.01.006">
                        Learn More
                    </Button>
        </ListItem>

        <ListItem>
            <ListItemAvatar>
            <Groups2OutlinedIcon />
            </ListItemAvatar>
            <ListItemText primary="CEPLAS funded group members attend the early career researcher retreat in Eifel" secondary="November 2023" />
        </ListItem>


        <ListItem>
            <ListItemAvatar>
            <CelebrationOutlinedIcon />
            </ListItemAvatar>
            <ListItemText primary="Congratulations to Jasmin Theilmann for successfully completing her Master's thesis" secondary="October 2023" />
        </ListItem>

        <ListItem>
            <ListItemAvatar>
            <Groups2OutlinedIcon />
            </ListItemAvatar>
            <ListItemText primary="The group attends the Cell Physics conference in Saarbrücken" secondary="October 2023" />
        </ListItem>


        <ListItem>
            <ListItemAvatar>
            <CampaignOutlinedIcon />
            </ListItemAvatar>
            <ListItemText primary={
                            <React.Fragment>
                                <Typography style={{display:'inline-flex'}} sx={{fontWeight: 'bold'}}> Paper published:  </Typography> { "PREDIG web application to model and predict the enzymatic saccharification of plant cell wall"} 
                            </React.Fragment>}
                                secondary="September 2023" />
            <Button variant="contained"  href="https://doi.org/10.1016/j.csbj.2023.09.026">
                        Learn More
                    </Button>
        </ListItem>

        <ListItem>
            <ListItemAvatar>
            <PersonAddAltOutlinedIcon />
            </ListItemAvatar>
            <ListItemText primary="Marco Lapsien joins the group as a Master's student to use molecular dynamics for simulations of lignin" secondary="September 2023" />
        </ListItem>

        <ListItem>
            <ListItemAvatar>
            <CampaignOutlinedIcon />
            </ListItemAvatar>
            <ListItemText primary="Lianne speaks at the Soapbox Rheinland event in Düsseldorf" secondary="August 2023" />
        </ListItem>

        <ListItem>
            <ListItemAvatar>
            <CampaignOutlinedIcon />
            </ListItemAvatar>
            <ListItemText primary={
                            <React.Fragment>
                                <Typography style={{display:'inline-flex'}} sx={{fontWeight: 'bold'}}>Paper published:  </Typography> {"Kinetic data for modeling the dynamics of the enzymes involved in animal fatty acid synthesis"}
                            </React.Fragment>}
                            secondary="July 2023" />
            <Button variant="contained"  href="https://doi.org/10.1042/BSR20222496">
                        Learn More
                    </Button>
        </ListItem>

        <ListItem>
            <ListItemAvatar>
            <Groups2OutlinedIcon />
            </ListItemAvatar>
            <ListItemText primary='Adélaïde and Merle attend the "RNA meets protein decay" EMBO workshop in Cavtat, Croatia' secondary="May 2023" />
        </ListItem>


        <ListItem>
            <ListItemAvatar>
            <CampaignOutlinedIcon />
            </ListItemAvatar>
            <ListItemText primary={
                            <React.Fragment>
                                <Typography style={{display:'inline-flex'}} sx={{fontWeight: 'bold'}}> Paper published:  </Typography> { "Stochastic modelling of a three-dimensional glycogen granule synthesis and impact of the branching enzyme" }
                            </React.Fragment>}
                                secondary="May 2023" />
            <Button variant="contained"  href="https://doi.org/10.1371/journal.pcbi.1010694">
                        Learn More
                    </Button>
        </ListItem>
        
        <ListItem>
            <ListItemAvatar>
            <CampaignOutlinedIcon />
            </ListItemAvatar>
            <ListItemText primary={
                            <React.Fragment>
                                <Typography style={{display:'inline-flex'}} sx={{fontWeight: 'bold'}}>Paper published:  </Typography> {"ExpressInHost, A Codon Tuning Tool for the Expression of Recombinant Proteins in Host Microorganisms"}
                            </React.Fragment>}
                            secondary="February 2023" />
            <Button variant="contained"  href="https://doi.org/10.5334/jors.385">
                        Learn More
                    </Button>
        </ListItem>




       
        </List>








    </Card>



      
    );
};
export default LatestNewsCard;


