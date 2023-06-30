import {
  Box,
  Highlight,
  useColorMode,
  Text,
  Flex,
  Spacer,
  Button,
} from '@chakra-ui/react';
import config from '../config/config';
import { BottomNavBarInterface } from '../components/navbar/bottomNavbar';

export default function Home({ onSelectNav }: BottomNavBarInterface) {
  const { colorMode } = useColorMode();

  return (
    <Box marginTop={'120px'}>
      <Highlight
        query="Nathaniel Gabriel Santos"
        styles={{
          px: '5px',
          py: '7px',
          bg: colorMode === 'light' ? config.black : config.white,
          color: colorMode === 'light' ? config.white : config.black,
          fontSize: '24px',
        }}
      >
        Nathaniel Gabriel Santos
      </Highlight>
      <Box marginTop={'66px'}>
        <Text fontSize={'128px'} fontWeight="700">
          Software Engineer;
        </Text>
      </Box>
      <Box marginTop={'66px'}>
        <Flex justifyContent={'space-between'}>
          <Box w={400}>
            <Text fontSize={'16px'} fontWeight="500">
              Welcome to my online portfolio! I'm a software engineer with a
              passion for crafting innovative solutions. Let's build something
              great together!
            </Text>
          </Box>
          <Spacer />
          <Button
            whiteSpace="normal"
            textAlign="left"
            variant="ghost"
            _hover={{
              bg: colorMode === 'light' ? config.white : config.black,
              color: colorMode === 'light' ? config.black : config.white,
            }}
            style={{
              padding: '24px 49px',
              borderRadius: 0,
              fontSize: '16px',
              background: colorMode === 'light' ? config.black : config.white,
              color: colorMode === 'light' ? config.white : config.black,
            }}
            onClick={() => onSelectNav('/About')}
          >
            About Me
          </Button>
          <Button
            whiteSpace="normal"
            textAlign="left"
            _hover={{
              bg: colorMode === 'light' ? config.black : config.white,
              color: colorMode === 'light' ? config.white : config.black,
            }}
            marginLeft={'25px'}
            style={{
              padding: '24px 49px',
              borderRadius: 0,
              border: `1px solid ${
                colorMode === 'light' ? config.black : config.white
              }`,
              fontSize: '16px',
            }}
            onClick={() => onSelectNav('/Projects')}
          >
            Projects
          </Button>
          <Spacer />
        </Flex>
      </Box>
    </Box>
  );
}
