import { Box, Text } from '@chakra-ui/react';
import config from '../config/config';
import Animation from '../animation/revealAnimation';
import TextFlip from '../animation/textFlip';
import ColorSchemeToggle from '../service/colorToggle';

export default function Projects() {
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
              bg: ColorSchemeToggle('inverse'),
              color: ColorSchemeToggle(),
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
