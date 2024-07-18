import * as React from 'react';

type HeaderGenericProps = {
  title: string;
  subtitle: string;
};

const HeaderGeneric: React.FC<HeaderGenericProps> = ({ title, subtitle }) => (
  <header id="header">
    <h1>{title}</h1>
    <p>{subtitle}</p>
  </header>
);

export default HeaderGeneric;
