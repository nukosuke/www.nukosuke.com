import React from 'react';

const Header = (props) => (
  <header id="header" className="alt">
    <h1>
      <b>{props.title}</b>
    </h1>
    <p>
      <b>{props.description}</b>
    </p>
  </header>
);

export default Header;
