import * as React from 'react';
import { useEffect } from 'react';
import smoothscroll from 'smoothscroll-polyfill';

type ScrollProps = {
  type: string;
  element: string;
  offset: number;
  timeout: null | undefined;
  children: React.ReactNode;
};

const Scroll: React.FC<ScrollProps> = (props) => {
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    let elem: Element | null = null;
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
    scroll
      ? scrollTo(elem!, offset, timeout)
      : console.log(`Element not found: ${element}`); // eslint-disable-line
  };

  const scrollTo = (element: Element, offSet = 0, timeout = null) => {
    const elemPos = element
      ? element.getBoundingClientRect().top + window.pageYOffset
      : 0;
    if (timeout) {
      setTimeout(() => {
        window.scroll({ top: elemPos + offSet, left: 0, behavior: 'smooth' });
      }, timeout);
    } else {
      window.scroll({ top: elemPos + offSet, left: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {typeof props.children === 'object' ? (
        React.Children.map(
          props.children as React.ReactElement[],
          (child: React.ReactElement) =>
            React.cloneElement(child, { onClick: handleClick })
        )
      ) : (
        <span onClick={handleClick}>{props.children}</span>
      )}
    </>
  );
};

export default Scroll;
