import React from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from './Scroll';

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['intro', 'career', 'links', 'contact'] } currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="intro">
                    <a href="#">自己紹介</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="career">
                    <a href="#">経歴</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="links">
                    <a href="#">リンク</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="contact">
                    <a href="#">お問い合わせ</a>
                </Scroll>
            </li>
        </Scrollspy>
    </nav>
);

export default Nav;
