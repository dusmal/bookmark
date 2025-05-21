import React, { useState } from 'react';
import featuresData from '../../components/utilities/features'

const Features = () => {
    const [activeTab, setActiveTab] = useState(0);
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
                        {featuresData.map(tab => (
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
                            <img src={featuresData[activeTab].image} alt={featuresData[activeTab].title} />
                        </div>

                        <div className="features__tab-info">
                            <h2 className="features__tab-heading">{featuresData[activeTab].heading}</h2>
                            <p className="features__tab-description">{featuresData[activeTab].description}</p>
                            <button className="features__more-info">More Info</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;