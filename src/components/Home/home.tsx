import {
  Box,
  Highlight,
  useColorMode,
  Text,
  Flex,
  Spacer,
  Button,
} from '@chakra-ui/react';
import config from '../../config/config';

export default function Home() {
  const { colorMode } = useColorMode();

  return (
    <Box
      m={'120px 0 0 0'}
      // h={'80vh'}
    >
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
      <Box m={'66px 0 0 0'}>
        <Text fontSize={'128px'} fontWeight="700">
          Software Engineer;
        </Text>
      </Box>
      <Box m={'66px 0 0 0'}>
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
            m={'0 0 0 25px'}
            style={{
              padding: '24px 49px',
              borderRadius: 0,
              fontSize: '16px',
              background: colorMode === 'light' ? config.black : config.white,
              color: colorMode === 'light' ? config.white : config.black,
            }}
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
            m={'0 0 0 25px'}
            style={{
              padding: '24px 49px',
              borderRadius: 0,
              border: `1px solid ${
                colorMode === 'light' ? config.black : config.white
              }`,
              fontSize: '16px',
            }}
          >
            Projects
          </Button>
          <Spacer />
        </Flex>
      </Box>
    </Box>
  );
}
