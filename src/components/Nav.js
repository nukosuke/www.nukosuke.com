import React from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from './Scroll';

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={props.items.map(item => item.key)} currentClassName="is-active" offset={-300}>
          {
            props.items.map(item => {
              return (
                <li>
                  <Scroll type="id" element={item.key}>
                    <a href={`#${item.key}`}>{item.value}</a>
                  </Scroll>
                </li>   
              );
            })
          }
        </Scrollspy>
    </nav>
);

export default Nav;
