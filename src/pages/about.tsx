import config from '../config/config';
import { Box, Flex, Text, Image, Button, useColorMode } from '@chakra-ui/react';
import memoji from '../assets/memoji.png';
import { Link } from 'react-scroll';
import Animation from '../animation/animationWrapper';
import TextFlip from '../animation/textFlip';

export default function About() {
  const { colorMode } = useColorMode();

  return (
    <Box id="About" minH={'100vh'}>
      <Box mt={config.marginSmall}>
        <Animation>
          <Text
            fontSize={config.font_header}
            fontWeight="700"
            data-value="About me;"
            px={5}
            _hover={{
              bg: colorMode === 'dark' ? config.white : config.black,
              color: colorMode === 'light' ? config.white : config.black,
            }}
            onMouseOver={(event) => TextFlip(event)}
          >
            About me;
          </Text>
        </Animation>
      </Box>
      <Flex
        justify={'space-evenly'}
        direction={{ base: 'column', md: 'row' }}
        mt={'60px'}
      >
        <Flex flex={'1 1 0'} m={30} justifyContent={'center'}>
          <Image
            // border={'1px'}
            // borderColor={'solid red'}
            src={memoji}
            alt="memoji"
            w={'350px'}
            alignSelf={'center'}
          />
        </Flex>
        <Flex
          direction={'column'}
          // border={'1px'}
          // borderColor={'solid red'}
          flex={'1 1 0'}
        >
          <Animation>
            <Text fontSize={config.font_text} fontWeight={400}>
              Hello there! <br /> <br /> I'm a passionate and skilled software
              engineer well-versed in Javascript, Python, and Java. With a
              strong knack for problem-solving, I strive to deliver efficient
              solutions while ensuring effective communication throughout the
              process. <br /> <br /> As a collaborative team player, I take
              pride in driving successful project outcomes. Let's work together
              to create something amazing
            </Text>
          </Animation>
          <Animation>
            <Button
              mt={'50px'}
              alignSelf={'Start'}
              fontSize={config.font_smallText}
              _hover={{
                bg: colorMode === 'light' ? config.black : config.white,
                color: colorMode === 'light' ? config.white : config.black,
              }}
              py={config.buttonPy}
              px={config.buttonPx}
              borderRadius={0}
              style={{
                background: colorMode === 'light' ? config.black : config.white,
                color: colorMode === 'light' ? config.white : config.black,
              }}
              mb={{
                sm: '100px',
                base: '100px',
                md: '100px',
                lg: '0px',
                xl: '0px',
                '2xl': '0px',
              }}
            >
              <Link smooth spy to={'Contact'} offset={-100} duration={500}>
                Let's Connect
              </Link>
            </Button>
          </Animation>
        </Flex>
      </Flex>
    </Box>
  );
}
