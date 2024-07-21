import { extendTheme } from '@chakra-ui/react';

export const chakraTheme = extendTheme({
  colors: {
    yellow: {
      50: '#ffe867',
      60: '#fff4e0',
    },
    blue: {
      30: '#9bb2e1',
      50: '#8cc9f0',
    },
    purple: {
      50: '#a89cc8',
      60: '#c79cc8',
    },
    orange: {
      50: '#efa8b0',
      60: '#e37682',
    },
    gray: {
      10: '#dddddd',
      80: '#636363',
      90: '#5f4d93',
    },
  },
  spacing: {
    'spc.4': '.25rem',
    'spc.6': '.375rem',
    'spc.8': '.5rem',
    'spc.12': '.75rem',
    'spc.16': '1rem',
    'spc.32': '2rem',
  },
  sizes: {
    'size.8': '.5rem',
  },
  components: {
    Text: {
      variants: {
        'body.1': {},
      },
    },
  },
});
