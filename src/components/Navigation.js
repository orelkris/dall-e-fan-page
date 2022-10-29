import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navigation(props) {
  const [currentPage, setCurrentPage] = useState('home');
  const [toggleClicked, settoggleClicked] = useState(true);

  useEffect(() => {
    changePageUrl();
  }, [toggleClicked]);

  const changePageUrl = () => {
    const fullPageUrl = window.location.href.split(['/']);
    const pageUrl = fullPageUrl[fullPageUrl.length - 1];

    if (pageUrl === '') {
      setCurrentPage('home');
    } else if (pageUrl === 'about') {
      setCurrentPage('about');
    } else if (pageUrl === 'recommendations') {
      setCurrentPage('recommendations');
    }
  };

  const updateCurrentPage = () => {
    settoggleClicked((prevState) => !prevState);
  };

  return (
    <nav className="nav__container">
      <Link
        to="/dall-e-fan-page/"
        className={currentPage === 'home' ? 'current-page' : ''}
        onClick={updateCurrentPage}
      >
        Home
      </Link>
      <Link
        to="/dall-e-fan-page/about"
        className={currentPage === 'about' ? 'current-page' : ''}
        onClick={updateCurrentPage}
      >
        About Me
      </Link>
      <Link
        to="/dall-e-fan-page/recommendations"
        className={currentPage === 'recommendations' ? 'current-page' : ''}
        onClick={updateCurrentPage}
      >
        Recommendations
      </Link>
    </nav>
  );
}
