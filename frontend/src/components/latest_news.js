import React from 'react';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, Grid, IconButton, Paper, styled, Typography } from "@mui/material";
import {List, ListItem, ListItemText, ListItemAvatar, Avatar} from "@mui/material"
import Carousel from 'react-material-ui-carousel';

import ArrowBack from '@mui/icons-material/ArrowBackIos';
import ArrowForward from '@mui/icons-material/ArrowForwardIos';

import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';


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
            <Groups2OutlinedIcon />
            </ListItemAvatar>
            <ListItemText primary="The BioSC funded OptiCellu project has begun! Click to read more." secondary="April 2024" />
            <Button variant="contained"  href="https://www.biosc.de/OptiCellu_EN">
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
            <Groups2OutlinedIcon />
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
            <PersonAddAltOutlinedIcon />
            </ListItemAvatar>
            <ListItemText primary="Marco Lapsien joins the group as a Master's student to use molecular dynamics for simulations of lignin" secondary="September 2023" />
        </ListItem>

        <ListItem>
            <ListItemAvatar>
            <Groups2OutlinedIcon />
            </ListItemAvatar>
            <ListItemText primary="Lianne speaks at the Soapbox Rheinland event in Düsseldorf" secondary="August 2023" />
        </ListItem>

        <ListItem>
            <ListItemAvatar>
            <Groups2OutlinedIcon />
            </ListItemAvatar>
            <ListItemText primary='Adélaïde and Merle attend the "RNA meets protein decay" EMBO workshop in Cavtat, Croatia' secondary="May 2023" />
        </ListItem>

        <ListItem>
            <ListItemAvatar>
            <Groups2OutlinedIcon />
            </ListItemAvatar>
            <ListItemText primary='Lianne Gahan presented her PhD research at the Manchester Multiscale Modelling conference' secondary="April 2023" />
        </ListItem>

        <ListItem>
            <ListItemAvatar>
            <Groups2OutlinedIcon />
            </ListItemAvatar>
            <ListItemText primary='Partho Sakha De attended the EMBO Workshop on Cryo-EM in Heidelberg' secondary="February 2023" />
        </ListItem>

        <ListItem>
            <ListItemAvatar>
            <Groups2OutlinedIcon />
            </ListItemAvatar>
            <ListItemText primary='Merle Stein is attending the Annual Biophysical Society Meeting in San Diego' secondary="February 2023" />
        </ListItem>

        <ListItem>
            <ListItemAvatar>
            <PersonAddAltOutlinedIcon />
            </ListItemAvatar>
            <ListItemText primary='We welcome Evaldas Simanavicius from Manchester University for an internship in the group!' secondary="February 2023" />
        </ListItem>

        <ListItem>
            <ListItemAvatar>
            <PersonAddAltOutlinedIcon />
            </ListItemAvatar>
            <ListItemText primary='Dr Lianne Gahan joined the group as a post doctoral researcher after defending her PhD at the University of Sheffield, UK' secondary="January 2023" />
        </ListItem>

        <ListItem>
            <ListItemAvatar>
            <PersonAddAltOutlinedIcon />
            </ListItemAvatar>
            <ListItemText primary=' Merle Stein joined our group as a CEPLAS graduate school PhD student' secondary="October 2022" />
        </ListItem>

        <ListItem>
            <ListItemAvatar>
            <PersonAddAltOutlinedIcon />
            </ListItemAvatar>
            <ListItemText primary='Torben Glass joined our group as a research assistant to build an interface for our PREDIG software' secondary="October 2022" />
        </ListItem>


        <ListItem>
            <ListItemAvatar>
            <PersonAddAltOutlinedIcon />
            </ListItemAvatar>
            <ListItemText primary="Asma Ben Janete joined our group as a Master's student to research cytoskeletal transport" secondary="October 2022" />
        </ListItem>


        <ListItem>
            <ListItemAvatar>
            <PersonAddAltOutlinedIcon />
            </ListItemAvatar>
            <ListItemText primary='Dr Partho Sakha De joined the group as a postdoctoral researcher' secondary="April 2022" />
        </ListItem>


       
        </List>








    </Card>



      
    );
};
export default LatestNewsCard;


