import React from 'react';
import Widget from './Widget';
import widgetData from '../data/widget-data';

export default function Sidebar(props) {
  const widgetElements = widgetData.map((item) => (
    <Widget
      key={item.id}
      widgetImage={item.image}
      header={item.header}
      title={item.title}
      body={item.body}
    />
  ));

  const recentPosts = widgetElements.filter((item) => item.props.body === '');

  return (
    <aside className="sidebar__container">
      <div className="sidebar__widget">{widgetElements[0]}</div>
      {recentPosts}
    </aside>
  );
}
