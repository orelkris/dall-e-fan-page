import React from 'react';
import FeaturedPost from './FeaturedPost';
import Card from './Card';
import cardData from '../data/card-data';
import featuredData from '../data/featured-data';

export default function Main(props) {
  const featuredPostElement = featuredData.map((item) => (
    <FeaturedPost
      key={item.id}
      title={item.title}
      body={item.body}
      featuredImage={item.image}
      date={item.date}
      numOfComments={item.numOfComments}
    />
  ));

  const cardElements = cardData.map((item) => (
    <Card
      key={item.id}
      cardImage={item.image}
      title={item.title}
      body={item.body}
      date={item.date}
      numOfComments={item.numOfComments}
    />
  ));

  return (
    <main className="main__container">
      {featuredPostElement}
      {cardElements}
    </main>
  );
}
