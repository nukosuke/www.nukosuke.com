import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
//import { customTheme } from './src/theme'

export const wrapRootElement = ({ element }) => (
  <ChakraProvider>{element}</ChakraProvider>
);
