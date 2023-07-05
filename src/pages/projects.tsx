import { Box, Text, useColorMode } from '@chakra-ui/react';
import config from '../config/config';
import Animation from '../animation/animationWrapper';
import TextFlip from '../animation/textFlip';

export default function Projects() {
  const { colorMode } = useColorMode();

  return (
    <Box id="Projects" minH={'100vh'}>
      <Box mt={config.marginSmall}>
        <Animation>
          <Text
            fontSize={config.font_header}
            fontWeight="700"
            data-value={'Projects;'}
            px={5}
            _hover={{
              bg: colorMode === 'dark' ? config.white : config.black,
              color: colorMode === 'light' ? config.white : config.black,
            }}
            onMouseOver={(event) => TextFlip(event)}
          >
            Projects;
          </Text>
        </Animation>
      </Box>
    </Box>
  );
}
