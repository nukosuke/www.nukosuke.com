import * as React from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';

type HeaderProps = {
  title: string;
  description: string;
};

const Header: React.FC<HeaderProps> = ({ title, description }) => (
  <Box as="header" className="alt">
    <VStack transition="opacity 3s ease" transitionDelay="0.4s" opacity={1}>
      <Heading as="h1" fontSize="3.25rem" fontWeight="bold">
        {title}
      </Heading>
      <Text fontSize="1.25rem" fontWeight="bold" letterSpacing="-0.025em">
        {description}
      </Text>
    </VStack>
  </Box>
);

export default Header;
