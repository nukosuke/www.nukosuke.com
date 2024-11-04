import { createSystem, defaultConfig } from '@chakra-ui/react';

export const system = createSystem(defaultConfig, {
  globalCss: {
    body: {
      background:
        'linear-gradient(-45deg, #73d2f3 25%, #26baee 25%, #26baee 50%, #73d2f3 50%, #73d2f3 75%,	#26baee 75%, #26baee) !important',
      backgroundSize: '50px 50px !important',
    },
  },
  theme: {
    tokens: {
      colors: {
        yellow: {
          50: { value: '#ffe867' },
          60: { value: '#fff4e0' },
        },
        blue: {
          30: { value: '#9bb2e1' },
          50: { value: '#8cc9f0' },
        },
        purple: {
          50: { value: '#a89cc8' },
          60: { value: '#c79cc8' },
        },
        orange: {
          50: { value: '#efa8b0' },
          60: { value: '#e37682' },
        },
        gray: {
          10: { value: '#dddddd' },
          80: { value: '#636363' },
          90: { value: '#5f4d93' },
        },
      },
      spacing: {
        'spc.4': { value: '0.25rem' },
        'spc.6': { value: '0.375rem' },
        'spc.8': { value: '0.5rem' },
        'spc.12': { value: '0.75rem' },
        'spc.16': { value: '1rem' },
        'spc.32': { value: '2rem' },
      },
      sizes: {
        'size.8': { value: '.5rem' },
      },
    },
  },
});
