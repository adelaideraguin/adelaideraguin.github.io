import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, IconButton, Stack, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import DescriptionIcon from '@mui/icons-material/Description';

import ComputerIcon from '@mui/icons-material/GitHub';
import Raguin2023Card from '../paper_cards/Raguin2023';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


const ExpressInHostCard = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ marginTop: "1em" }} style={{ position:"relative", minHeight: "10px", display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }} elevation={5} >
            <Box>
                <CardHeader align="left"
                    title="ExpressInHost: A codon tuning tool for the expression of heterologous
proteins in host microorganisms"
                />
                <Divider />
            </Box>
            
            <Box>
            <Divider/>
                <CardActions >
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} useFlexGap flexWrap="wrap">
                <Button variant="contained" startIcon={<DescriptionIcon />}  href="https://doi.org/10.5334/jors.385">
                        Publication
                </Button>
                <Button variant="contained" startIcon={<ComputerIcon />} href="https://gitlab.com/a.raguin/expressinhost">
                        GitHub
                </Button>
                </Stack>
                <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>

                </CardActions>
            </Box>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
             
                <Raguin2023Card/>
                </CardContent>
            </Collapse>

        
        </Card >
    );
};

export default ExpressInHostCard;