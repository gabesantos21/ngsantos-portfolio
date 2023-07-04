import { Box } from '@chakra-ui/react';
import Nav from './components/navbar/navbar';
import config from './config/config';
import { useState } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Home from './pages/home';
import Error from './pages/error';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
import BottomNavBar from './components/navbar/bottomNavbar';

function App() {
  const navigate = useNavigate();
  const [active, setActive] = useState('/');

  const onNavigate = (navItem: string) => {
    setActive(navItem);
    navigate(navItem, { replace: true });
  };

  return (
    <>
      <Box m={config.margin}>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={<Home onSelectNav={(nav) => onNavigate(nav)} />}
          />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/404" element={<Error />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
        <BottomNavBar
          active={active}
          onSelectNav={(nav: string) => onNavigate(nav)}
        />
      </Box>
    </>
  );
}

export default App;
