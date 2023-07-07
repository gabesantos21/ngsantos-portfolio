import { useColorMode } from '@chakra-ui/react';
import config from '../config/config';

export default function ColorSchemeToggle(type: 'element' | 'inverse' = 'element') {
  const { colorMode } = useColorMode();
  return type === 'inverse'
    ? colorMode === 'dark'
      ? config.white
      : config.black
    : colorMode === 'dark'
    ? config.black
    : config.white;
}
