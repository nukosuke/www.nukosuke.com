import * as React from 'react';

type TimelineProps = {
  items: {
    title: string;
  }[];
};

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <ul className="ln-timeline">
      {items.map((item, idx) => {
        return (
          <li className="ln-timeline-item" key={idx}>
            <div className="ln-timeline-item-tail"></div>
            <div className="ln-timeline-item-head ln-timeline-item-head-blue"></div>
            <div className="ln-timeline-item-content">{item.title}</div>
          </li>
        );
      })}
    </ul>
  );
};

export default Timeline;
