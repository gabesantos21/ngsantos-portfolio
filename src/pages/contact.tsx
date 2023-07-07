import { Box, Flex, HStack, Link, Text} from '@chakra-ui/react';
import config from '../config/config';
import {
  EmailIcon,
  PhoneIcon,
  ExternalLinkIcon,
  CopyIcon,
} from '@chakra-ui/icons';
import Animation from '../animation/revealAnimation';
import TextFlip from '../animation/textFlip';
import ColorSchemeToggle from '../service/colorToggle';

export default function Contact() {
  return (
    <Box id="Contact" minH={'100vh'}>
      <Box mt={config.marginSmall}>
        <Animation>
          <Text
            fontSize={config.font_header}
            fontWeight="700"
            data-value={'Contact;'}
            px={5}
            _hover={{
              bg: ColorSchemeToggle('inverse'),
              color: ColorSchemeToggle(),
            }}
            onMouseOver={(event) => TextFlip(event)}
          >
            Contact;
          </Text>
        </Animation>
      </Box>
      <Flex
        direction="column"
        mt={'160px'}
        justify="center"
        pl={{ base: '10%', md: '20%', lg: '20%', xl: '20%', '2xl': '20%' }}
        pr={{ base: '10%', md: '20%', lg: '20%', xl: '20%', '2xl': '20%' }}
      >
        <Animation>
          <Text
            fontSize={config.font_text}
            fontWeight={300}
            textAlign={'center'}
            lineHeight={10}
          >
            Feel free to drop me an email or sms if you'd like to connect.
            Alternatively, you can find me on{' '}
            <Link fontWeight={500}>
              LinkedIn <ExternalLinkIcon />{' '}
            </Link>{' '}
            or{' '}
            <Link fontWeight={500}>
              Github <ExternalLinkIcon />
            </Link>{' '}
            for a quicker response. I look forward to hearing from you!
          </Text>
        </Animation>
        <Flex
          bg={ColorSchemeToggle('inverse')}
          justifyContent={'space-evenly'}
          alignItems={'center'}
          direction={{
            base: 'column',
            md: 'column',
            lg: 'row',
            xl: 'row',
            '2xl': 'row',
          }}
          mt={'40px'}
        >
          <Animation>
            <HStack
              gap={5}
              p={{
                base: '12px',
                md: '21px',
                lg: '21px',
                xl: '21px',
                '2xl': '21px',
              }}
            >
              <EmailIcon color={ColorSchemeToggle()} />
              <Text color={ColorSchemeToggle()} fontSize={config.font_text}>
                gabesantos726@gmail.com
              </Text>
              <CopyIcon color={ColorSchemeToggle()} />
            </HStack>
          </Animation>
          <Animation>
            <HStack
              gap={5}
              p={{
                base: '12px',
                md: '21px',
                lg: '21px',
                xl: '21px',
                '2xl': '21px',
              }}
            >
              <PhoneIcon color={ColorSchemeToggle()} />
              <Text color={ColorSchemeToggle()} fontSize={config.font_text}>
                +63 (905) 406-5822
              </Text>
              <CopyIcon color={ColorSchemeToggle()} />
            </HStack>
          </Animation>
        </Flex>
      </Flex>
    </Box>
  );
}
