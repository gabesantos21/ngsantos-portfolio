import {
  Box,
  Flex,
  IconButton,
  Stack,
  Collapse,
  useDisclosure,
  Button,
  useColorMode,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import config from '../../config/config';

export default function BottomNavBar({
  active,
  onSelectNav,
}: BottomNavBarInterface) {
  const { isOpen, onToggle } = useDisclosure();
  // const { colorMode } = useColorMode();

  return (
    <Box position={'fixed'} right={config.margin} bottom={config.margin}>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav active={active} onSelectNav={onSelectNav} />
      </Collapse>
      <Flex alignItems="end">
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Flex display={{ base: 'none', md: 'flex' }}>
            <DesktopNav active={active} onSelectNav={onSelectNav} />
          </Flex>
        </Flex>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          display={{ base: 'flex', md: 'none' }}
          justifyContent="end"
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? (
                <CloseIcon
                  // _hover={{
                  //   bg: colorMode === 'light' ? config.black : config.white,
                  //   color: colorMode === 'light' ? config.white : config.black,
                  // }}
                  w={7}
                  h={7}
                />
              ) : (
                <HamburgerIcon
                  // _hover={{
                  //   bg: colorMode === 'light' ? config.black : config.white,
                  //   color: colorMode === 'light' ? config.white : config.black,
                  // }}
                  w={9}
                  h={9}
                />
              )
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
      </Flex>
    </Box>
  );
}

const DesktopNav = ({ active, onSelectNav }: BottomNavBarInterface) => {
  const { colorMode } = useColorMode();

  return (
    <Stack
      direction={'row'}
      gap={'25px'}
      justifyContent={'end'}
      bg={colorMode === 'dark' ? config.black : config.white}
      p={2}
    >
      <Box>
        <Button
          p={'7px 12px'}
          fontSize={'md'}
          fontWeight={500}
          variant={'ghost'}
          borderRadius={0}
          border={`1px solid ${
            colorMode === 'light' ? config.black : config.white
          }`}
          onClick={() => onSelectNav('#')}
          _hover={{
            bg: colorMode === 'light' ? config.black : config.white,
            color: colorMode === 'light' ? config.white : config.black,
          }}
          _active={{
            bg: colorMode === 'light' ? config.black : config.white,
            color: colorMode === 'light' ? config.white : config.black,
          }}
        >
          Download CV
        </Button>
      </Box>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.title}>
          {navItem.title !== 'Download CV' && (
            <Button
              p={'7px 12px'}
              fontSize={'md'}
              fontWeight={500}
              variant={'ghost'}
              borderRadius={0}
              onClick={() => onSelectNav(navItem.href)}
              isActive={active === navItem.href}
              _hover={{
                bg: colorMode === 'light' ? config.black : config.white,
                color: colorMode === 'light' ? config.white : config.black,
              }}
              _active={{
                bg: colorMode === 'light' ? config.black : config.white,
                color: colorMode === 'light' ? config.white : config.black,
              }}
            >
              {navItem.title}
            </Button>
          )}
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = ({ active, onSelectNav }: BottomNavBarInterface) => {
  const { colorMode } = useColorMode();

  return (
    <Stack pb={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <Stack>
          <Button
            justifyContent={'end'}
            borderRadius={0}
            fontWeight={500}
            m={1.5}
            variant={'none'}
            onClick={() => onSelectNav(navItem.href)}
            isActive={active === navItem.href}
            _hover={{
              bg: colorMode === 'light' ? config.black : config.white,
              color: colorMode === 'light' ? config.white : config.black,
            }}
            _active={{
              bg: colorMode === 'light' ? config.black : config.white,
              color: colorMode === 'light' ? config.white : config.black,
            }}
          >
            {navItem.title}
          </Button>
        </Stack>
      ))}
    </Stack>
  );
};

export interface BottomNavBarInterface {
  active?: string;
  onSelectNav: (nav: string) => void;
}

interface NavItem {
  title: string;
  href: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    title: 'Download CV',
    href: '#',
  },
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/About',
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
