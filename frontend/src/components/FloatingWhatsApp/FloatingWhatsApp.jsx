import React from 'react';
import { track } from '@vercel/analytics';
import './FloatingWhatsApp.css';

const WHATSAPP_URL =
  'https://wa.me/919717817318?text=Namaste%20TMS%2C%20I%20would%20like%20to%20request%20a%20commercial%20security%20quotation%20for%20my%20facility.';

const handleClick = () => {
  track('whatsapp_conversion_click', {
    source: 'floating_widget',
    target: '+919717817318'
  });
};

const FloatingWhatsApp = () => {
  return (
    <div className="floating-whatsapp">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp__link"
        aria-label="Request Quotation on WhatsApp"
        onClick={handleClick}
      >
        <span className="floating-whatsapp__tooltip">Request Quotation</span>

        <span className="floating-whatsapp__pulse" />

        <svg
          className="floating-whatsapp__icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M16.004 2.002A13.94 13.94 0 0 0 2.05 15.95a13.88 13.88 0 0 0 1.87 6.99L2 30l7.278-1.908A13.93 13.93 0 0 0 16.004 30 13.94 13.94 0 0 0 29.95 16.05 13.94 13.94 0 0 0 16.004 2.002Zm0 25.52a11.46 11.46 0 0 1-5.848-1.6l-.42-.25-4.348 1.14 1.16-4.24-.274-.436a11.44 11.44 0 0 1-1.754-6.09 11.52 11.52 0 0 1 23.036-.092 11.52 11.52 0 0 1-11.552 11.568Z"
            fill="#ffffff"
          />
          <path
            d="M23.79 19.594c-.424-.212-2.504-1.234-2.892-1.376-.388-.14-.67-.212-.952.214-.282.424-1.094 1.376-1.34 1.66-.248.282-.494.318-.918.106-.424-.212-1.79-.66-3.41-2.104-1.26-1.122-2.11-2.51-2.358-2.934-.248-.424-.026-.654.186-.866.19-.19.424-.494.636-.742.212-.246.282-.424.424-.706.14-.282.07-.53-.036-.742-.106-.212-.952-2.296-1.306-3.142-.344-.826-.694-.714-.952-.728-.246-.012-.53-.014-.812-.014a1.56 1.56 0 0 0-1.13.53 4.75 4.75 0 0 0-1.482 3.532c0 2.084 1.518 4.098 1.73 4.38.212.284 2.99 4.562 7.242 6.398 1.012.436 1.802.696 2.418.892.816.26 1.56.224 2.146.136.654-.098 2.016-.824 2.3-1.62.284-.796.284-1.478.2-1.62-.086-.142-.318-.248-.742-.46Z"
            fill="#ffffff"
          />
        </svg>
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
