import React from 'react';
import { Scrollspy } from '@makotot/ghostui';
import Scroll from './Scroll';

type NavProps = {
  sticky: boolean
  items: { key: string, value: string }[]
}

const Nav: React.FC<NavProps> = (props) => (
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
