import React from 'react';

export default function Sidebar(props) {
  const { widgetImage, header, body, title } = props;
  return (
    <div className="sidebar__widget">
      {header && <h2 className="widget__header">{header}</h2>}
      <div className="widget__content">
        {title && <h3 className="widget__title">{title}</h3>}
        <img src={widgetImage} alt="" className="widget__image" />
        {body && <p className="widget__body">{body}</p>}
      </div>
    </div>
  );
}
