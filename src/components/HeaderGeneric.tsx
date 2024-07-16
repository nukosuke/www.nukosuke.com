import React from 'react';

const HeaderGeneric = (props) => (
  <header id="header">
    <h1>{props.title}</h1>
    <p>{props.subtitle}</p>
  </header>
);

export default HeaderGeneric;
