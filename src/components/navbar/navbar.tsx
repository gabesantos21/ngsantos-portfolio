import { Box, Flex, useColorMode, Image, Link } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-scroll';
import logo from '../../assets/logo.png';
import logoDark from '../../assets/logo-dark.png';
import moon from '../../assets/toggle-color-mode-switch-light.png';
import sun from '../../assets/toggle-color-mode-switch-dark.png';
import Animation from '../../animation/revealAnimation';
import { motion } from 'framer-motion';

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex justifyContent={'space-between'} id="Home">
      <Animation>
        <Box>
          <Link as={ReachLink} to="#Home">
            <Image
              src={colorMode === 'light' ? logo : logoDark}
              alt="ngsantos"
            />
          </Link>
        </Box>
      </Animation>
      <Animation>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
          <button onClick={toggleColorMode}>
            {colorMode === 'light' ? <Image src={moon} /> : <Image src={sun} />}
          </button>
        </motion.button>
      </Animation>
    </Flex>
  );
}
