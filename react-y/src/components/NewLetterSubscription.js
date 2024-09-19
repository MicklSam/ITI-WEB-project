import React from 'react';
import './NewsLetterSubscription.css'; // For styles
import "../resp.css"
const NewsletterSubscription = () => {
  return (
    <div className="newsletter-section">
      <div className="newsletter-container">
        <h2>Stay Up to Date About Our Latest Offers</h2>
        <div className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email address"
            aria-label="Email address"
            className="newsletter-input"
          />
          <button className="newsletter-button">Subscribe to Newsletter</button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscription;
