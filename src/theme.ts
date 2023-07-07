import { extendTheme } from '@chakra-ui/react';
import ColorSchemeToggle from './service/colorToggle';

const theme = extendTheme({
  config: { initialColorMode: 'dark' },
  styles: {
    global: () => ({
      body: {
        bg: ColorSchemeToggle(),
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
