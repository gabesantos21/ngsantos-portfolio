import {
  Box,
  Center,
  Flex,
  HStack,
  Icon,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import config from '../config/config';
import data from '../config/data';
import Animation from '../animation/revealAnimation';

export default function Skills() {
  return (
    <Box minH={'65vh'} mt={['0', '10vh']}>
      <Center>
        <VStack>
          <Animation>
            <Text fontSize={config.style.font_text} mb={'5vh'}>
              Take a look at the tech I have been working with recently...
            </Text>
          </Animation>
          <SimpleGrid columns={[1, 2, 2, 3, 4]} spacing={'5px 10px'} mt={'5'}>
            {data.techStack.map((item) => (
              <Flex p={5} m={5} key={item.id}>
                <Animation>
                  <HStack>
                    <Icon as={item.logo} boxSize={8} mx={3} />
                    <Text size={config.style.font_smallText}>{item.name}</Text>
                  </HStack>
                </Animation>
              </Flex>
            ))}
          </SimpleGrid>
        </VStack>
      </Center>
    </Box>
  );
}
