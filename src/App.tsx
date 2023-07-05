import { Box } from '@chakra-ui/react';
import Nav from './components/navbar/navbar';
import config from './config/config';

import Home from './pages/home';
import Error from './pages/error';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
import BottomNavBar from './components/navbar/bottomNavbar';

function App() {
  return (
    <>
      <Box m={config.margin}>
        <Nav />
        <Home />
        <About />
        <Projects />
        <Contact />
        <BottomNavBar />
      </Box>
    </>
  );
}

export default App;
