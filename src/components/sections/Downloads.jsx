import React from 'react';
import chromeIcon from '../../assets/images/logo-chrome.svg';
import firefoxIcon from '../../assets/images/logo-firefox.svg';
import operaIcon from '../../assets/images/logo-opera.svg';
import bgDots from '../../assets/images/bg-dots.svg';

const Downloads = () => {
    const browsers = [
        {
            id: 1,
            name: 'Chrome',
            icon: chromeIcon,
            version: '62',
            offset: 0,
        },
        {
            id: 2,
            name: 'Firefox',
            icon: firefoxIcon,
            version: '55',
            offset: 2,
        },
        {
            id: 3,
            name: 'Opera',
            icon: operaIcon,
            version: '46',
            offset: 4,
        }
    ];

    return (
        <section className="downloads" id="downloads">
            <div className="container">
                <div className="downloads__intro">
                    <h2 className="downloads__title">Download the extension</h2>
                    <p className="downloads__description">
                        We've got more browsers in the pipeline. Please do let us know if you've
                        got a favourite you'd like us to prioritize.
                    </p>
                </div>

                <div className="downloads__cards">
                    {browsers.map((browser) => (
                        <div
                            className="downloads__card"
                            key={browser.id}
                            style={{ marginTop: `${browser.offset}rem`, marginBottom: `-${browser.offset}rem` }}
                        >
                            <div className="downloads__card-content">
                                <img
                                    src={browser.icon}
                                    alt={`${browser.name} logo`}
                                    className="downloads__browser-icon"
                                />
                                <h3 className="downloads__browser-name">Add to {browser.name}</h3>
                                <p className="downloads__browser-version">Minimum version {browser.version}</p>

                                <div className="downloads__dots">
                                    <img src={bgDots} alt="Dots separator" />
                                </div>

                                <button className="downloads__install-button">
                                    Add & Install Extension
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Downloads;