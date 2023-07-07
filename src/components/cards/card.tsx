import {
  Badge,
  Box,
  Button,
  Center,
  Heading,
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
        alt="Svartifoss Waterfall"
        objectFit="cover"
        mx="auto"
      />
      <SimpleGrid columns={4} spacing={'5px 10px'} mt={'5'}>
        {data.tags.map((item) => (
          <Badge
            borderColor={ColorSchemeToggle('inverse')}
            border={'1px solid'}
            color={ColorSchemeToggle()}
            bg={ColorSchemeToggle('inverse')}
            fontSize={{ base: 12, md: 8, lg: 12 }}
            borderRadius="none"
          >
            {item}
          </Badge>
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
