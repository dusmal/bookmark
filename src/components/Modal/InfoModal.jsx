import React from 'react';

const InfoModal = ({ feature }) => {
    if (!feature) return null;

    return (
        <div className="info-modal">
            <h2 className="info-modal__title">{feature.heading}</h2>
            <div className="info-modal__content">
                <div className="info-modal__image">
                    <img src={feature.image} alt={feature.title} />
                </div>
                <div className="info-modal__details">
                    <p className="info-modal__description">{feature.description}</p>
                    <a href="#features" className="info-modal__button">Learn More</a>
                </div>
            </div>
        </div>
    );
};

export default InfoModal;