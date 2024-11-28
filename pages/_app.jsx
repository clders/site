/**
 * @fileoverview App
 * @description The entry point of every page in the website.
 */

import '../styles/main.css';
var React = require('react');

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
