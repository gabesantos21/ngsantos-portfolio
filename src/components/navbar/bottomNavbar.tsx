import { Flex, Button, HStack, Spacer, useColorMode } from '@chakra-ui/react';
import config from '../../config/config';

interface Props {
  active: string;
  onSelectNav: (nav: string) => void;
}

export default function BottomNav({ active, onSelectNav }: Props) {
  const { colorMode } = useColorMode();
  const navItems = [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'About',
      href: '/About',
    },
    {
      title: 'Skills',
      href: '/Skills',
    },
    {
      title: 'Projects',
      href: '/Projects',
    },
    {
      title: 'Contact',
      href: '/Contact',
    },
  ];

  // TODO transfer all styles to seperate stylesheet file and use className Attribute

  return (
    <Flex
      justifyContent={'space-between'}
      style={{ position: 'fixed', right: config.margin, bottom: config.margin }}
    >
      <Spacer />
      <HStack>
        <Button
          whiteSpace="normal"
          textAlign="left"
          _hover={{
            bg: colorMode === 'light' ? config.black : config.white,
            color: colorMode === 'light' ? config.white : config.black,
          }}
          m={'0 0 0 25px'}
          style={{
            padding: '7px 12px',
            borderRadius: 0,
            border: `1px solid ${
              colorMode === 'light' ? config.black : config.white
            }`,
            fontSize: '20px',
          }}
        >
          Download CV
        </Button>
        {navItems.map((navItem) => (
          <Button
            key={navItem.title}
            whiteSpace="normal"
            textAlign="left"
            variant="ghost"
            _hover={{
              bg: colorMode === 'light' ? config.black : config.white,
              color: colorMode === 'light' ? config.white : config.black,
            }}
            m={'0 0 0 25px'}
            onClick={() => onSelectNav(navItem.title)}
            isActive={active === navItem.title}
            _active={{
              bg: colorMode === 'light' ? config.black : config.white,
              color: colorMode === 'light' ? config.white : config.black,
            }}
            style={{
              padding: '7px 12px',
              borderRadius: 0,
              fontSize: '20px',
            }}
          >
            {navItem.title}
          </Button>
        ))}
      </HStack>
    </Flex>
  );
}