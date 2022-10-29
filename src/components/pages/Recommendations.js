import React from 'react';
import Image from '../Image';
import imageData from '../../data/recommendations';

export default function Recommendations(props) {
  const imageElements = imageData.map((item) => (
    <Image key={item.id} image={item.image} />
  ));
  return <main className="recommend__container">{imageElements}</main>;
}
