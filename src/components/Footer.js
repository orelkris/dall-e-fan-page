import React from 'react';

export default function Footer(props) {
  return (
    <footer className="footer__container">
      <p className="footer__body">
        Krisassaurus Productions &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
}
