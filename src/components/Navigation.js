import React, { useState } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

export default function Navigation(props) {
  const [currentPage, setCurrentPage] = useState('home');

  const changePage = (event) => {
    const pageUrl = event.target.getAttribute('href');

    if (pageUrl === '/dall-e-fan-page/') {
      setCurrentPage('home');
    } else if (pageUrl === '/dall-e-fan-page/about') {
      setCurrentPage('about');
    } else if (pageUrl === '/dall-e-fan-page/recommendations') {
      setCurrentPage('recommendations');
    }
  };

  return (
    <nav className="nav__container">
      <Link
        to="/dall-e-fan-page/"
        className={currentPage === 'home' ? 'current-page' : ''}
        onClick={changePage}
      >
        Home
      </Link>
      <Link
        to="/dall-e-fan-page/about"
        className={currentPage === 'about' ? 'current-page' : ''}
        onClick={changePage}
      >
        About Me
      </Link>
      <Link
        to="/dall-e-fan-page/recommendations"
        className={currentPage === 'recommendations' ? 'current-page' : ''}
        onClick={changePage}
      >
        Recommendations
      </Link>
    </nav>
  );
}
