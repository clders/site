/**
 * @fileoverview Google Analytics Tracking
 * @description Google Analytics tracking for the website.
 */

// Google Analytics Tracking ID
export const GA_TRACKING_ID = 'G-ZBC67PFDC8';

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined') {
    // Load the Google Analytics script dynamically
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    script.async = true;
    document.head.appendChild(script);

    // Configure Google Analytics after the script is loaded
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', GA_TRACKING_ID);
    };
  }
};
