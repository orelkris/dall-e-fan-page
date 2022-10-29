import React from 'react';
import { Link } from 'react-router-dom';

export default function Popup(props) {
  const { image, close } = props;
  return (
    <article className="popup__container">
      <div className="popup__content">
        <div onClick={close} className="popup__close">
          &times;
        </div>
        <img src={image} alt="" className="popup__image" />
      </div>
    </article>
  );
}
