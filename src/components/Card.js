import React from 'react';
import { Link } from 'react-router-dom';

export default function Card(props) {
  const { cardImage, title, body, date, numOfComments } = props;
  return (
    <article className="article__card-container">
      <div className="card__main">
        <h2 className="card__title">{title}</h2>
        <p className="card__body">{body}</p>
        <Link to="/dall-e-fan-page/continue" className="card__read-more">
          See Larger Version
        </Link>
      </div>
      <div className="card__secondary">
        <img src={cardImage} alt="" className="card__image" />
        <p className="card__info">
          {date} | {numOfComments} comments
        </p>
      </div>
    </article>
  );
}
