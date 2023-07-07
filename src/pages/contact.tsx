import { Box, Button, Flex, HStack, Link, Text } from '@chakra-ui/react';
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
import data from '../config/data';

export default function Contact() {
  return (
    <Box id="Contact" minH={'100vh'}>
      <Box mt={config.style.marginSmall}>
        <Animation>
          <Text
            fontSize={config.style.font_header}
            fontWeight="700"
            data-value={'Contact;'}
            // px={5}
            // _hover={{
            //   bg: ColorSchemeToggle('inverse'),
            //   color: ColorSchemeToggle(),
            // }}
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
            fontSize={config.style.font_text}
            fontWeight={300}
            textAlign={'center'}
            lineHeight={10}
          >
            Feel free to drop me an email or sms if you'd like to connect.
            Alternatively, you can find me on{' '}
            <Link fontWeight={500} href={data.credentials.linkedIn} isExternal>
              LinkedIn <ExternalLinkIcon />{' '}
            </Link>{' '}
            or{' '}
            <Link fontWeight={500} href={data.credentials.github} isExternal>
              Github <ExternalLinkIcon />
            </Link>{' '}
            for a quicker response. I look forward to hearing from you!
          </Text>
        </Animation>
        <Flex
          bg={ColorSchemeToggle('inverse')}
          justify="center"
          align="center"
          direction={{
            base: 'column',
            md: 'column',
            lg: 'row',
            xl: 'row',
            '2xl': 'row',
          }}
          mt={'40px'}
          fontSize={{
            base: '1.4em',
            sm: '1.4em',
            md: '1em',
            lg: '1em',
            xl: '1.5em',
            '2xl': '1.5em',
          }}
        >
          <Animation>
            <Flex
              align={'center'}
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
              <Text color={ColorSchemeToggle()}>gabesantos726@gmail.com</Text>
            </Flex>
          </Animation>
          <Animation>
            <Flex
              align={'center'}
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
              <Text color={ColorSchemeToggle()}>+63 (905) 406-5822</Text>
            </Flex>
          </Animation>
        </Flex>
      </Flex>
    </Box>
  );
}
