import React from 'react';
import PropTypes from 'prop-types';

class Timeline extends React.Component {
  render() {
    return (
      <>
        <ul className="ln-timeline">
          {this.props.items.map((item) => {
            return (
              <li className="ln-timeline-item">
                <div className="ln-timeline-item-tail"></div>
                <div className="ln-timeline-item-head ln-timeline-item-head-blue"></div>
                <div className="ln-timeline-item-content">{item.title}</div>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default Timeline;
