import {
  Box,
  Button,
  Center,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import ColorSchemeToggle from '../../service/colorToggle';
import { CardProps } from '../../config/interface';

export default function Card(data: CardProps) {
  return (
    <Box maxW="420px" bg={ColorSchemeToggle('inverse')} p="6" h={'100%'}>
      <Image
        src={data.img}
        alt={data.title}
        objectFit="cover"
        mx="auto"
        h="300px"
      />
      <SimpleGrid columns={10} spacing={'5px 10px'} mt={'5'}>
        {data.tags.map((item) => (
          <Icon as={item} color={ColorSchemeToggle()} key={data.id} />
        ))}
      </SimpleGrid>
      <Heading my="4" size="lg" color={ColorSchemeToggle()}>
        {data.title}
      </Heading>
      <Text color={ColorSchemeToggle()}>{data.description}</Text>
      <Center mt="6">
        <Button
          bg={ColorSchemeToggle()}
          color={ColorSchemeToggle('inverse')}
          borderRadius={'none'}
        >
          Learn more
        </Button>
      </Center>
    </Box>
  );
}
