import React from 'react'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1><b>じぶん α ver</b></h1>
        <p><b>nukosuke's web</b></p>
    </header>
)

export default Header
