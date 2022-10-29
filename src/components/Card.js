import React, { useState } from 'react';
import Popup from './Popup';
import { Link } from 'react-router-dom';

export default function Card(props) {
  const { cardImage, title, body, date, numOfComments } = props;

  const [viewPopup, setViewPopup] = useState(false);

  const clickViewPopup = () => {
    setViewPopup(true);
  };

  const clickClosePopup = () => {
    setViewPopup(false);
  };

  return (
    <article className="article__card-container">
      <div className="card__main">
        <h2 className="card__title">{title}</h2>
        <p className="card__body">{body}</p>
        <a onClick={clickViewPopup} className="card__read-more">
          See Larger Version
        </a>
      </div>
      <div className="card__secondary">
        <img src={cardImage} alt="" className="card__image" />
        <p className="card__info">
          {date} | {numOfComments} comments
        </p>
      </div>
      {viewPopup && <Popup image={cardImage} close={clickClosePopup} />}
    </article>
  );
}
