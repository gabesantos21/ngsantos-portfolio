import {
  Box,
  Highlight,
  useColorMode,
  Text,
  Flex,
  Button,
} from '@chakra-ui/react';
import config from '../config/config';
import { BottomNavBarInterface } from '../components/navbar/bottomNavbar';

export default function Home({ onSelectNav }: BottomNavBarInterface) {
  const { colorMode } = useColorMode();
  return (
    <Box mt={config.marginBig}>
      <Highlight
        query="Nathaniel Gabriel Santos"
        styles={{
          px: '5px',
          py: '7px',
          bg: colorMode === 'light' ? config.black : config.white,
          color: colorMode === 'light' ? config.white : config.black,
          fontSize: config.font_text,
        }}
      >
        Nathaniel Gabriel Santos
      </Highlight>
      <Box mt={config.marginSmall}>
        <Text fontSize={config.font_header} fontWeight="700">
          Software Engineer;
        </Text>
      </Box>
      <Box mt={config.marginSmall}>
        <Flex
          justifyContent={'space-between'}
          direction={{
            base: 'column',
            md: 'column',
            lg: 'row',
            xl: 'row',
            '2xl': 'row',
          }}
          w={'70%'}
        >
          <Box pr={5}>
            <Text
              fontSize={config.font_smallText}
              fontWeight="500"
              justifyContent="justified"
            >
              Welcome to my online portfolio! I'm a software engineer with a
              passion for crafting innovative solutions. Let's build something
              great together!
            </Text>
          </Box>
          <Flex
            mt={{
              sm: '50px',
              base: '50px',
              md: '50px',
              lg: '0px',
              xl: '0px',
              '2xl': '0px',
            }}
            justify={'start'}
            mb={{
              sm: '100px',
              base: '100px',
              md: '100px',
              lg: '0px',
              xl: '0px',
              '2xl': '0px',
            }}
            gap={5}
          >
            <Button
              fontSize={config.font_smallText}
              _hover={{
                bg: colorMode === 'light' ? config.white : config.black,
                color: colorMode === 'light' ? config.black : config.white,
              }}
              py={config.buttonPy}
              px={config.buttonPx}
              borderRadius={0}
              style={{
                background: colorMode === 'light' ? config.black : config.white,
                color: colorMode === 'light' ? config.white : config.black,
              }}
              onClick={() => onSelectNav('/About')}
            >
              About Me
            </Button>
            <Button
              fontSize={config.font_smallText}
              _hover={{
                bg: colorMode === 'light' ? config.black : config.white,
                color: colorMode === 'light' ? config.white : config.black,
              }}
              ml={{ base: '0px', xl: '25px', '2xl': '25px' }}
              py={config.buttonPy}
              px={config.buttonPx}
              style={{
                borderRadius: 0,
                border: `1px solid ${
                  colorMode === 'light' ? config.black : config.white
                }`,
              }}
              onClick={() => onSelectNav('/Projects')}
            >
              Projects
            </Button>
          </Flex>
          {/* <Spacer /> */}
        </Flex>
      </Box>
    </Box>
  );
}
