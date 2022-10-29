import React from 'react';

export default function Image(props) {
  const { image, title, body } = props;
  return (
    <article className="article__image-container">
      {title && (
        <div className="image__main">
          <h2 className="image__title">{title}</h2>
          <p className="image__body">{body}</p>
        </div>
      )}
      <div className="image__secondary">
        <img src={image} alt="" className="image" />
      </div>
    </article>
  );
}
