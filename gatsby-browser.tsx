import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { chakraTheme } from './src/theme';

export const wrapRootElement = ({ element }) => (
  <ChakraProvider theme={chakraTheme}>{element}</ChakraProvider>
);
