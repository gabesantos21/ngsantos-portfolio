import { Box } from '@chakra-ui/react';
import Nav from './components/navbar/navbar';
import config from './config/config';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
import InitialTransition from './animation/introAnimation';

function App() {
  return (
    <>
      <InitialTransition />
      <Box m={config.style.margin}>
        <Nav />
        <Home />
        <About />
        <Projects />
        <Contact />
      </Box>
    </>
  );
}

export default App;
