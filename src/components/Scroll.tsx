import smoothscroll from 'smoothscroll-polyfill';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Element = (props) => { return (props.children); };

type ScrollProps = {
  type: string
  element: string
  offset: number
  timeout: number
  children: any
}

const Scroll: React.FC<ScrollProps> = (props) => {
  useEffect(() => {
    smoothscroll.polyfill();
  }, [])

  const handleClick = (e: Event) => {
    e.preventDefault();
    let elem: Element?= null;
    let scroll = true;
    const { type, element, offset, timeout } = props;
    if (type && element) {
      switch (type) {
        case 'class':
          elem = document.getElementsByClassName(element)[0];
          scroll = elem ? true : false;
          break;
        case 'id':
          elem = document.getElementById(element);
          scroll = elem ? true : false;
          break;
        default:
      }
    }
    scroll ? (this.scrollTo(elem, offset, timeout)) : console.log(`Element not found: ${element}`); // eslint-disable-line
  }

  const scrollTo = (element: Element, offSet = 0, timeout = null) => {
    const elemPos = element ? element.getBoundingClientRect().top + window.pageYOffset : 0;
    if (timeout) {
      setTimeout(() => { window.scroll({ top: elemPos + offSet, left: 0, behavior: 'smooth' }); }, timeout);
    } else {
      window.scroll({ top: elemPos + offSet, left: 0, behavior: 'smooth' });
    }
  }

  return (
    <Element>
      {typeof (this.props.children) === 'object' ? (
        React.cloneElement(this.props.children, { onClick: this.handleClick })
      ) : (
        <span onClick={this.handleClick}>{this.props.children}</span>
      )}
    </Element>
  );
}

export default Scroll;
