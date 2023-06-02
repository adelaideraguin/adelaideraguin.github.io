import React, { Component } from 'react';
import { HashRouter as Router, Routes, Route, Switch, Link} from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Container } from '@mui/material';
import './App.css';
//import Navbar from './components/scroll_navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import GroupMembers from './pages/GroupMembers';
import Research from './pages/Research';
import Software from './pages/Software';
import Funding from './pages/Funding';
import Hiring from './pages/Hiring';
import Contact from './pages/Contact';
import Publications from './pages/Publications';
import ScrollToTop from './components/ScrolltoTop';
import Navbar from './components/Reactive_navbar';
const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});





const dark2Theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#8adeba',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      // light: will be calculated from palette.primary.main,
      main: '#ffd54f',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    text: {
      // light: will be calculated from palette.primary.main,
      secondary: '#81c784',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },


  },
  typography: {
    a: {
      fontFamily: [
      'Merriweather Sans',
      'sans-serif',
    ].join(',')}
  },
});


dark2Theme.typography.h1 = {
  
  '@media (min-width:600px)': {
    fontSize: '5rem', fontFamily: 'Merriweather Sans'
  }
 }

 dark2Theme.typography.h2 = {
  
  '@media (min-width:600px)': {
    fontSize: '4rem', fontFamily: 'Merriweather Sans'
  }
 }


//"linear-gradient(to right, rgb(182, 244, 146), rgb(51, 139, 147));"
class App extends Component {
  render() {
    return (
      <Router>

        <ScrollToTop />

        <div className="App">

            <ThemeProvider theme={dark2Theme}>
            <CssBaseline sx={{zIndex: "1"}}/>
            <Navbar sx={{zIndex: "1"}}/>
            <Box paddingBottom="1em" paddingTop="1em" sx={{
            minHeight: "calc(100vh - 164px)",
            backgroundImage: "linear-gradient(to bottom, rgb(9, 29, 71), rgb(176, 247, 217));",
            width: "100%"

          }} >
            <Container maxWidth="xl">

          
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route exact path="/group" element={<GroupMembers/>} />
              <Route exact path="/research" element={<Research/>} />
              <Route exact path="/software" element={<Software/>} />
              <Route exact path="/hiring" element={<Hiring/>} />
              <Route exact path="/funding" element={<Funding/>} />
              <Route exact path="/contact-us" element={<Contact/>}/>
              <Route exact path="/publications" element={<Publications/>}/>
            </Routes>
            </Container>

            </Box>
          <Footer />
        </ThemeProvider>
       
        </div>
      </Router>
    );
  }
}

export default App;
