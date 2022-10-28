import React from 'react';
import { Link } from 'react-router-dom';

export default function FeaturedPost(props) {
  const { featuredImage, title, body, date, numOfComments } = props;

  return (
    <article className="article__featured-container">
      <h2 className="featured__title">{title}</h2>
      <img src={featuredImage} alt="" className="featured__image" />
      <p className="featured__info">
        {date} | {numOfComments} comments
      </p>
      <p className="featured__body">{body}</p>
    </article>
  );
}
