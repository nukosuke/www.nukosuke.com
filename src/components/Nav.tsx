import * as React from 'react';
import { Box, HStack, Text, SkipNavLink } from '@chakra-ui/react';

type NavProps = {
  sticky: boolean;
  items: { key: string; value: React.ReactNode }[];
};

const Nav: React.FC<NavProps> = ({ sticky, items }) => (
  <Box as="nav" w="full" bg="yellow.60">
    <HStack spacing="spc.16">
      {items.map((item, idx) => (
        <SkipNavLink key={idx} id={item.key}>
          <Text>{item.value}</Text>
        </SkipNavLink>
      ))}
    </HStack>
  </Box>
);

export default Nav;
