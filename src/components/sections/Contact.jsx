import React, { useState } from 'react';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [submitted, setSubmitted] = useState(false);

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
                    <p className="contact__joined">35,000+ ALREADY JOINED</p>
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
                                        <span className="contact__error-icon">!</span>
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