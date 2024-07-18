import * as React from 'react';
import { useState, useEffect } from 'react';
import '../assets/scss/main.scss';

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
    <div className={`body ${loading}`}>
      <div id="wrapper">{children}</div>
    </div>
  );
};

export default Template;
