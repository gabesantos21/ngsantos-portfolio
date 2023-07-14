import { Box, Highlight, Text, Flex, Button } from '@chakra-ui/react';
import config from '../config/config';
import { Link } from 'react-scroll';
import Animation from '../animation/revealAnimation';
import TextFlip from '../animation/textFlip';
import ColorSchemeToggle from '../service/colorToggle';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <Box mt={config.style.marginBig} minH={'80vh'} id="Home">
      <Animation>
        <Highlight
          query="Nathaniel Gabriel Santos"
          styles={{
            px: '5px',
            py: '7px',
            bg: ColorSchemeToggle('inverse'),
            color: ColorSchemeToggle(),
            fontSize: config.style.font_text,
          }}
        >
          Nathaniel Gabriel Santos
        </Highlight>
      </Animation>
      <Box mt={config.style.marginSmall}>
        <Animation>
          <Text
            fontSize={config.style.font_header}
            fontWeight="700"
            data-value="Software Engineer;"
            // TODO remove text animation on hover
            onMouseOver={(e) => TextFlip(e)}
          >
            Software Engineer;
          </Text>
        </Animation>
      </Box>
      <Box mt={config.style.marginSmall}>
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
                fontSize={config.style.font_smallText}
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
              mb={config.style.marginSection}
              gap={5}
            >
              <Button
                fontSize={config.style.font_smallText}
                py={config.style.buttonPy}
                px={config.style.buttonPx}
                borderRadius={0}
                style={{
                  background: `${ColorSchemeToggle('inverse')}`,
                  color: `${ColorSchemeToggle()}`,
                }}
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1 }}
                >
                  <Link smooth spy to={'About'} offset={-100} duration={500}>
                    About Me
                  </Link>
                </motion.button>
              </Button>
              <Button
                fontSize={config.style.font_smallText}
                _hover={{
                  bg: ColorSchemeToggle('inverse'),
                  color: ColorSchemeToggle(),
                }}
                ml={{ base: '0px', xl: '25px', '2xl': '25px' }}
                py={config.style.buttonPy}
                px={config.style.buttonPx}
                style={{
                  borderRadius: 0,
                  border: `1px solid ${ColorSchemeToggle('inverse')}`,
                }}
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1 }}
                >
                  <Link smooth spy to={'Projects'} offset={-100} duration={500}>
                    Projects
                  </Link>
                </motion.button>
              </Button>
            </Flex>
          </Animation>
        </Flex>
      </Box>
    </Box>
  );
}
