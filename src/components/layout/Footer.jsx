import React from 'react';
import logo from '../../assets/images/logo-bookmark.svg';
import facebookIcon from '../../assets/images/icon-facebook.svg';
import twitterIcon from '../../assets/images/icon-twitter.svg';
import BookmarkLogo from './BookmarkLogo';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__logo-section">
                        <a href="/" className="footer__logo-link">
                            <BookmarkLogo
                                textColor="#FFFFFF"
                                circleColor="#5368df"
                                bookmarkColor="#FFFFFF"
                            />
                        </a>
                        <nav className="footer__nav">
                            <ul className="footer__nav-list">
                                <li className="footer__nav-item">
                                    <a href="#features" className="footer__nav-link">Features</a>
                                </li>
                                <li className="footer__nav-item">
                                    <a href="#downloads" className="footer__nav-link">Pricing</a>
                                </li>
                                <li className="footer__nav-item">
                                    <a href="#contact" className="footer__nav-link">Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="footer__social">
                        <a href="https://facebook.com" className="footer__social-link" aria-label="Facebook">
                            <img src={facebookIcon} alt="" className="footer__social-icon" />
                        </a>
                        <a href="https://twitter.com" className="footer__social-link" aria-label="Twitter">
                            <img src={twitterIcon} alt="" className="footer__social-icon" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;