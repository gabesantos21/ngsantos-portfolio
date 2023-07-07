import { Box, Flex, useColorMode, Image } from '@chakra-ui/react';
import logo from '../../assets/logo.png';
import logoDark from '../../assets/logo-dark.png';
import moon from '../../assets/toggle-color-mode-switch-light.png';
import sun from '../../assets/toggle-color-mode-switch-dark.png';
import Animation from '../../animation/revealAnimation';

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex justifyContent={'space-between'} id="Home">
      <Animation>
        <Box>
          <Image src={colorMode === 'light' ? logo : logoDark} alt="ngsantos" />
        </Box>
      </Animation>
      <Animation>
        <button onClick={toggleColorMode}>
          {colorMode === 'light' ? <Image src={moon} /> : <Image src={sun} />}
        </button>
      </Animation>
    </Flex>
  );
}
