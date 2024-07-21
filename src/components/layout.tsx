import * as React from 'react';
import { useState, useEffect } from 'react';
import '../assets/scss/main.scss';
import { Center, Box } from '@chakra-ui/react';

type TemplateProps = {
  children: React.ReactNode;
};

const Template: React.FC<TemplateProps> = ({ children }) => {
  const [loading, setLoading] = useState('is-loading');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading('');
    }, 100);
    return () => clearTimeout(timeoutId);
  }, [setLoading]);

  return (
    <Center className={`body ${loading}`}>
      <Box w={{ base: 'full', md: 'calc(100% - 4em)' }}>{children}</Box>
    </Center>
  );
};

export default Template;
