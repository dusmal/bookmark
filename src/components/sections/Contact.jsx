import React, { useState, useEffect } from 'react';
import errorIcon from '../../assets/images/icon-error.svg';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [count, setCount] = useState(35000);

    useEffect(() => {
        const duration = 20000;
        const startTime = Date.now();
        const startValue = 35000;

        const interval = setInterval(() => {
            const elapsedTime = Date.now() - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const currentValue = Math.floor(startValue - (startValue * progress));

            setCount(currentValue);

            if (progress === 1) {
                clearInterval(interval);
            }
        }, 16);

        return () => clearInterval(interval);
    }, []);

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email.trim()) {
            setError("Email cannot be empty");
            return;
        }

        if (!validateEmail(email)) {
            setError("Whoops, make sure it's an email");
            return;
        }

        setError('');
        setSubmitted(true);
        setEmail('');

        setTimeout(() => {
            setSubmitted(false);
        }, 3000);
    };

    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="contact__content">
                    <p className="contact__joined">
                        <span className="contact__counter">{count.toLocaleString()}</span> + ALREADY JOINED
                    </p>
                    <h2 className="contact__title">Stay up-to-date with what we're doing</h2>

                    <form className="contact__form" onSubmit={handleSubmit}>
                        <div className="contact__input-group">
                            <div className="contact__input-wrapper">
                                <input
                                    type="text"
                                    className={`contact__input ${error ? 'error' : ''}`}
                                    placeholder="Enter your email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {error && (
                                    <div className="contact__error">
                                        <p>{error}</p>
                                        <img
                                            src={errorIcon}
                                            alt="Error"
                                            className="contact__error-icon"
                                        />
                                    </div>
                                )}
                                {submitted && (
                                    <div className="contact__success">
                                        <p>Thank you for subscribing!</p>
                                    </div>
                                )}
                            </div>
                            <button className="contact__button" type="submit">
                                Contact Us
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;