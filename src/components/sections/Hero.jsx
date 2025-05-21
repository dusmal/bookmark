import React from 'react';
import heroImage from '../../assets/images/illustration-hero.svg';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__content">
                    <div className="hero__text">
                        <h1 className="hero__title">A Simple Bookmark Manager</h1>
                        <p className="hero__description">
                            A clean and simple interface to organize your favourite websites. Open a new
                            browser tab and see your sites load instantly. Try it for free.
                        </p>
                        <div className="hero__buttons">
                            <button className="hero__button hero__button--chrome">
                                Get it on Chrome
                            </button>
                            <button className="hero__button hero__button--firefox">
                                Get it on Firefox
                            </button>
                        </div>
                    </div>
                    <div className="hero__image">
                        <img src={heroImage} alt="Bookmark manager dashboard" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;