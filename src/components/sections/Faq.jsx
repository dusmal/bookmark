import React, { useState } from 'react';
import arrowIcon from '../../assets/images/icon-arrow.svg';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            id: 1,
            question: "What is Bookmark?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
        },
        {
            id: 2,
            question: "How can I request a new browser?",
            answer: "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet."
        },
        {
            id: 3,
            question: "Is there a mobile app?",
            answer: "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum."
        },
        {
            id: 4,
            question: "What about other Chromium browsers?",
            answer: "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit."
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq" id="faq">
            <div className="container">
                <div className="faq__intro">
                    <h2 className="faq__title">Frequently Asked Questions</h2>
                    <p className="faq__description">
                        Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.
                    </p>
                </div>

                <div className="faq__accordion">
                    {faqs.map((faq, index) => (
                        <div className="faq__item" key={faq.id}>
                            <button
                                className={`faq__question ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={activeIndex === index}
                            >
                                <span>{faq.question}</span>
                                <img
                                    src={arrowIcon}
                                    alt="Toggle"
                                    className={`faq__arrow ${activeIndex === index ? 'rotate' : ''}`}
                                />
                            </button>
                            <div
                                className={`faq__answer ${activeIndex === index ? 'active' : ''}`}
                            >
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="faq__cta">
                    <button className="faq__more-info">More Info</button>
                </div>
            </div>
        </section>
    );
};

export default Faq;