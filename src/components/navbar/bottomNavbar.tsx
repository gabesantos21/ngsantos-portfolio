import {
  Box,
  Flex,
  IconButton,
  Stack,
  Collapse,
  useDisclosure,
  Button,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import config from '../../config/config';
import { Link } from 'react-scroll';
import Animation from '../../animation/revealAnimation';
import ColorSchemeToggle from '../../service/colorToggle';
import data from '../../config/data';

export default function BottomNavBar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      position={'fixed'}
      right={config.style.margin}
      bottom={config.style.margin}
    >
      <Collapse in={isOpen}>
        <MobileNav />
      </Collapse>
      <Flex alignItems="end">
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Flex display={{ base: 'none', md: 'flex' }}>
            <DesktopNav />
          </Flex>
        </Flex>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          display={{ base: 'flex', md: 'none' }}
          justifyContent="end"
        >
          <Animation>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={7} h={7} />
                ) : (
                  <HamburgerIcon w={9} h={9} />
                )
              }
              variant={'none'}
              aria-label={'Toggle Navigation'}
            />
          </Animation>
        </Flex>
      </Flex>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Animation>
      <Stack
        direction={'row'}
        gap={'25px'}
        justifyContent={'end'}
        bg={ColorSchemeToggle()}
        p={2}
      >
        <Box>
          {/* <Button
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
        </Button> */}
          <Button
            fontSize={'md'}
            fontWeight={500}
            variant={'ghost'}
            borderRadius={0}
            p={0}
            _hover={{
              bg: ColorSchemeToggle('inverse'),
              color: ColorSchemeToggle(),
            }}
          >
            <Link
              activeClass="active"
              activeStyle={{
                background: ColorSchemeToggle('inverse'),
                color: ColorSchemeToggle(),
                fontSize: `${config.style.font_text}`,
              }}
              smooth
              spy
              to={'#'}
              offset={-100}
              duration={500}
              style={{
                padding: '9px 12px',
                border: `1px solid ${ColorSchemeToggle('inverse')}`,
              }}
            >
              Download CV
            </Link>
          </Button>
        </Box>
        {data.navItems.map((navItem) => (
          <Box key={navItem.title}>
            {navItem.title !== 'Download CV' && (
              <Button
                fontSize={'md'}
                fontWeight={500}
                variant={'ghost'}
                borderRadius={0}
                p={0}
                _hover={{
                  bg: ColorSchemeToggle('inverse'),
                  color: ColorSchemeToggle(),
                }}
              >
                <Link
                  activeClass="active"
                  activeStyle={{
                    background: ColorSchemeToggle('inverse'),
                    color: ColorSchemeToggle(),
                    fontSize: `${config.style.font_text}`,
                    width: '100%',
                  }}
                  smooth
                  spy
                  to={navItem.title}
                  offset={-100}
                  duration={500}
                  style={{
                    padding: '9px 12px',
                  }}
                >
                  {navItem.title}
                </Link>
              </Button>
            )}
          </Box>
        ))}
      </Stack>
    </Animation>
  );
};

const MobileNav = () => {
  return (
    <Stack pb={4} display={{ md: 'none' }} bg={ColorSchemeToggle()}>
      {data.navItems.map((navItem) => (
        <Stack key={navItem.title}>
          <Button
            justifyContent={'end'}
            fontSize={'md'}
            fontWeight={500}
            variant={'none'}
            m={1.5}
            borderRadius={0}
            p={0}
            _hover={{
              bg: ColorSchemeToggle('inverse'),
              color: ColorSchemeToggle(),
            }}
            zIndex={999}
          >
            <Link
              activeClass="active"
              activeStyle={{
                background: ColorSchemeToggle('inverse'),
                color: ColorSchemeToggle(),
              }}
              smooth
              spy
              to={navItem.title}
              duration={500}
              style={{
                padding: '9px 12px',
                fontSize: `${config.style.font_text}`,
                width: '100%',
                textAlign: 'end',
              }}
            >
              {navItem.title}
            </Link>
          </Button>
        </Stack>
      ))}
    </Stack>
  );
};
