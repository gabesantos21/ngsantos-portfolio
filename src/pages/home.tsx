import { Box, Highlight, Text, Flex, Button } from '@chakra-ui/react';
import config from '../config/config';
import { Link } from 'react-scroll';
import Animation from '../animation/revealAnimation';
import TextFlip from '../animation/textFlip';
import ColorSchemeToggle from '../service/colorToggle';

export default function Home() {
  return (
    <Box mt={config.marginBig} minH={'100vh'}>
      <Animation>
        <Highlight
          query="Nathaniel Gabriel Santos"
          styles={{
            px: '5px',
            py: '7px',
            bg: ColorSchemeToggle('inverse'),
            color: ColorSchemeToggle(),
            fontSize: config.font_text,
          }}
        >
          Nathaniel Gabriel Santos
        </Highlight>
      </Animation>
      <Box mt={config.marginSmall}>
        <Animation>
          <Text
            fontSize={config.font_header}
            fontWeight="700"
            data-value="Software Engineer;"
            onMouseOver={(e) => TextFlip(e)}
          >
            Software Engineer;
          </Text>
        </Animation>
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
            <Animation>
              <Text
                fontSize={config.font_smallText}
                fontWeight="500"
                justifyContent="justified"
                w={{ sm: 400, base: 350 }}
              >
                Welcome to my online portfolio! I'm a software engineer with a
                passion for crafting innovative solutions. Let's build something
                great together!
              </Text>
            </Animation>
          </Box>
          <Animation>
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
                py={config.buttonPy}
                px={config.buttonPx}
                borderRadius={0}
                style={{
                  background: `${ColorSchemeToggle('inverse')}`,
                  color: `${ColorSchemeToggle()}`,
                }}
              >
                <Link smooth spy to={'About'} offset={-100} duration={500}>
                  About Me
                </Link>
              </Button>
              <Button
                fontSize={config.font_smallText}
                _hover={{
                  bg: ColorSchemeToggle('inverse'),
                  color: ColorSchemeToggle(),
                }}
                ml={{ base: '0px', xl: '25px', '2xl': '25px' }}
                py={config.buttonPy}
                px={config.buttonPx}
                style={{
                  borderRadius: 0,
                  border: `1px solid ${ColorSchemeToggle('inverse')}`,
                }}
              >
                <Link smooth spy to={'Projects'} offset={-100} duration={500}>
                  Projects
                </Link>
              </Button>
            </Flex>
          </Animation>
        </Flex>
      </Box>
    </Box>
  );
}
