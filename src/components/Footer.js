
import { Box, Button, Typography, Toolbar } from '@mui/material';

const Footer = () => {

    return (
        <>
            <Toolbar disableGutters  >
            <Typography align="center" variant="body1" margin="1em">
                    Website built and maintained by Raguin
                    </Typography>
                <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: "flex-end", }}>
                    
                    <Button sx={{ color: "black" }} size="small" href="https://www.cnrs.fr/en/legal-notice" variant="outline" color="primary">Impressum</Button>
                    <Button sx={{ color: "black" }} size="small" href="https://www.cnrs.fr/en/rgpd" variant="outline" color="primary">Data Privacy</Button>
                </Box>
            </Toolbar>
        </>

    )

}

export default Footer;