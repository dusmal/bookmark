import React, { useState, useEffect } from 'react';
import BookmarkLogo from './BookmarkLogo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
        document.body.style.overflow = '';
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          <a href="#hero" className="header__logo">
            <BookmarkLogo isMenuOpen={isMenuOpen} />
          </a>
        </div>

        <button
          className={`header__toggle ${isMenuOpen ? 'is-active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className="header__toggle-line"></span>
          <span className="header__toggle-line"></span>
          <span className="header__toggle-line"></span>
        </button>

        <nav className={`header__nav ${isMenuOpen ? 'is-active' : ''}`}>
          <ul className="header__menu">
            <li className="header__item">
              <a href="#features" className="header__link" onClick={closeMenu}>Features</a>
            </li>
            <li className="header__item">
              <a href="#downloads" className="header__link" onClick={closeMenu}>Pricing</a>
            </li>
            <li className="header__item">
              <a href="#contact" className="header__link" onClick={closeMenu}>Contact</a>
            </li>
            <li className="header__item">
              <button className="header__button header__button--login">Login</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;