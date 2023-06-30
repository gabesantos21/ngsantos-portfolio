import { ThemeComponentProps, extendTheme } from '@chakra-ui/react';
import config from './config/config';

const theme = extendTheme({
  config: { initialColorMode: 'dark' },
  styles: {
    global: ({ colorMode }: ThemeComponentProps) => ({
      body: {
        bg: colorMode === 'dark' ? config.black : config.white,
      },
    }),
  },
  fonts: {
    // body: 'Georgia, sans-serif',
    // heading: 'Georgia, serif',
    // TODO Add proxima nova font
  },
});

export default theme;
