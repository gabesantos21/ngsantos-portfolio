import config from '../config/config';
import { Box, Flex, Text, Image, Button } from '@chakra-ui/react';
import memoji from '../assets/memoji.png';
import { Link } from 'react-scroll';
import Animation from '../animation/revealAnimation';
import TextFlip from '../animation/textFlip';
import ColorSchemeToggle from '../service/colorToggle';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <Box id="About" minH={'80vh'}>
      <Box mt={config.style.marginSmall}>
        <Animation>
          <Text
            fontSize={config.style.font_header}
            fontWeight="700"
            data-value="About me;"
            // px={5}
            // _hover={{
            //   bg: ColorSchemeToggle('inverse'),
            //   color: ColorSchemeToggle(),
            // }}
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
            <Text fontSize={config.style.font_text} fontWeight={400}>
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
              fontSize={config.style.font_smallText}
              py={config.style.buttonPy}
              px={config.style.buttonPx}
              borderRadius={0}
              style={{
                background: ColorSchemeToggle('inverse'),
                color: ColorSchemeToggle(),
              }}
              mb={config.style.marginSection}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
              >
                <Link smooth spy to={'Contact'} offset={-100} duration={500}>
                  Let's Connect
                </Link>
              </motion.button>
            </Button>
          </Animation>
        </Flex>
      </Flex>
    </Box>
  );
}
