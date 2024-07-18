import * as React from 'react';

type HeaderProps = {
  title: string;
  description: string;
};

const Header: React.FC<HeaderProps> = ({ title, description }) => (
  <header id="header" className="alt">
    <h1>
      <b>{title}</b>
    </h1>
    <p>
      <b>{description}</b>
    </p>
  </header>
);

export default Header;
