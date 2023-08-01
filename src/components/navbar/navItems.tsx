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
import { Link } from 'react-scroll';
import Animation from '../../animation/revealAnimation';
import ColorSchemeToggle from '../../service/colorToggle';
import data from '../../config/data';
import { BsSun } from 'react-icons/bs';
import { BiSolidMoon } from 'react-icons/bi';
import { motion } from 'framer-motion';
import resume from '../../assets/resume.pdf';

export default function NavItems() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex alignItems="end">
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Flex display={{ base: 'none', sm: 'none', lg: 'flex' }}>
            <DesktopNav />
          </Flex>
        </Flex>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          display={{ base: 'flex', lg: 'none' }}
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
      <Collapse in={isOpen}>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const { colorMode, toggleColorMode } = useColorMode();

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
          <Button
            fontSize={'md'}
            fontWeight={500}
            variant={'ghost'}
            borderRadius={0}
            p={'9px 12px'}
            border={`1px solid ${ColorSchemeToggle('inverse')}`}
            _hover={{
              bg: ColorSchemeToggle('inverse'),
              color: ColorSchemeToggle(),
            }}
          >
            <a href={resume} download="santos-resume.pdf">
              Download CV
            </a>
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
                  offset={navItem.title === 'Home' ? -343 : -70}
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
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
          onClick={toggleColorMode}
        >
          {colorMode === 'light' ? (
            <BiSolidMoon size={25} />
          ) : (
            <BsSun size={25} />
          )}
        </motion.button>
      </Stack>
    </Animation>
  );
};

const MobileNav = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex pb={4} display={{ lg: 'none' }} bg={ColorSchemeToggle()}>
      <Stack>
        <>
          <Button
            fontSize={'md'}
            fontWeight={500}
            variant={'none'}
            m={1.5}
            mt={30}
            borderRadius={0}
            p={'9px 12px'}
            size={config.style.font_text}
            _hover={{
              bg: ColorSchemeToggle('inverse'),
              color: ColorSchemeToggle(),
            }}
            zIndex={999}
          >
            <a href={resume} download="santos-resume.pdf">
              Download CV
            </a>
          </Button>
        </>
        {data.navItems.map((navItem) => (
          <>
            {navItem.title !== 'Download CV' && (
              <Button
                key={navItem.title}
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
                  offset={navItem.title === 'Home' ? -999 : -450}
                  style={{
                    padding: '9px 12px',
                    fontSize: `${config.style.font_text}`,
                    textAlign: 'end',
                  }}
                >
                  {navItem.title}
                </Link>
              </Button>
            )}
          </>
        ))}
        <div style={{ textAlign: 'end', padding: '9px 20px' }}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            onClick={toggleColorMode}
          >
            {colorMode === 'light' ? (
              <BiSolidMoon size={25} />
            ) : (
              <BsSun size={25} />
            )}
          </motion.button>
        </div>
      </Stack>
    </Flex>
  );
};
