import React, { useState } from 'react';
import tab1Image from '../../assets/images/illustration-features-tab-1.svg';
import tab2Image from '../../assets/images/illustration-features-tab-2.svg';
import tab3Image from '../../assets/images/illustration-features-tab-3.svg';

const Features = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabsData = [
        {
            id: 0,
            title: 'Simple Bookmarking',
            heading: 'Bookmark in one click',
            description: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.',
            image: tab1Image
        },
        {
            id: 1,
            title: 'Speedy Searching',
            heading: 'Intelligent search',
            description: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
            image: tab2Image
        },
        {
            id: 2,
            title: 'Easy Sharing',
            heading: 'Share your bookmarks',
            description: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
            image: tab3Image
        }
    ];

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <section className="features" id="features">
            <div className="container">
                <div className="features__intro">
                    <h2 className="features__title">Features</h2>
                    <p className="features__description">
                        Our aim is to make it quick and easy for you to access your favorite websites.
                        Your bookmarks sync between your devices so you can access them on the go.
                    </p>
                </div>

                <div className="features__tabs">
                    <div className="features__tab-list">
                        {tabsData.map(tab => (
                            <button
                                key={tab.id}
                                className={`features__tab-button ${activeTab === tab.id ? 'active' : ''}`}
                                onClick={() => handleTabClick(tab.id)}
                            >
                                {tab.title}
                            </button>
                        ))}
                    </div>

                    <div className="features__tab-content">
                        <div className="features__tab-image">
                            <img src={tabsData[activeTab].image} alt={tabsData[activeTab].title} />
                        </div>

                        <div className="features__tab-info">
                            <h2 className="features__tab-heading">{tabsData[activeTab].heading}</h2>
                            <p className="features__tab-description">{tabsData[activeTab].description}</p>
                            <button className="features__more-info">More Info</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;