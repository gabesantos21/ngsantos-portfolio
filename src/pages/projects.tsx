import { Box, Center, SimpleGrid, Text } from '@chakra-ui/react';
import config from '../config/config';
import Animation from '../animation/revealAnimation';
import TextFlip from '../animation/textFlip';
import Card from '../components/cards/card';
import data from '../config/data';

export default function Projects() {
  return (
    <Box id="Projects" minH={'100vh'} mb={config.style.marginSection}>
      <Box mt={config.style.marginSmall}>
        <Animation>
          <Text
            fontSize={config.style.font_header}
            fontWeight="700"
            data-value={'Projects;'}
            // px={5}
            // _hover={{
            //   bg: ColorSchemeToggle('inverse'),
            //   color: ColorSchemeToggle(),
            // }}
            onMouseOver={(event) => TextFlip(event)}
          >
            Projects
          </Text>
        </Animation>
        <Box as="section" mt={'60px'}>
          <Center>
            <SimpleGrid columns={[1, 1, 1, 2, 3]} spacing="60px">
              {data.projects.map((project) => (
                <Animation key={project.id}>
                  <Card
                    title={project.title}
                    id={project.id}
                    img={project.img}
                    description={project.description}
                    tags={project.tags}
                  />
                </Animation>
              ))}
            </SimpleGrid>
          </Center>
        </Box>
      </Box>
    </Box>
  );
}
