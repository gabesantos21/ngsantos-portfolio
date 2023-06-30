import { Box } from '@chakra-ui/react';
import Nav from './components/navbar/navbar';
import BottomNav from './components/navbar/bottomNavbar';
import Home from './components/Home/home';
import config from './config/config';
import { useState } from 'react';

function App() {
  const [active, setActive] = useState('Home');

  console.log(active);

  return (
    <>
      <Box m={config.margin}>
        <Nav />
        <BottomNav active={active} onSelectNav={(nav) => setActive(nav)} />
        <Home />
      </Box>
    </>
  );
}

export default App;
