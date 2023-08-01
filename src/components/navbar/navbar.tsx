import { Box, Flex, useColorMode, Image, Link } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-scroll';
import logo from '../../assets/logo.png';
import logoDark from '../../assets/logo-dark.png';
import Animation from '../../animation/revealAnimation';
import NavItems from './navItems';
import ColorSchemeToggle from '../../service/colorToggle';
import config from '../../config/config';

export default function Nav() {
  const { colorMode } = useColorMode();
  return (
    <Box
      pos={'sticky'}
      top={0}
      py={4}
      left={config.style.margin}
      right={config.style.margin}
      bg={ColorSchemeToggle()}
      zIndex={100}
    >
      <Flex justifyContent={'space-between'} align="center">
        <Animation>
          <Box>
            <Link as={ReachLink} to="Home" smooth spy offset={-250}>
              <Image
                src={colorMode === 'light' ? logo : logoDark}
                // TODO import an better image quality
                alt="ngsantos"
              />
            </Link>
          </Box>
        </Animation>
        <Animation>
          <NavItems />
        </Animation>
      </Flex>
    </Box>
  );
}
