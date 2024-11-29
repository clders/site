/**
 * @fileoverview App
 * @description The entry point of every page in the website.
 */

import { useEffect } from 'react';
import { initGA } from '../lib/gtag';
import '../styles/main.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Initialize Google Analytics when the app is loaded
    initGA();
  }, []);

  return (
    <>
      {/* Navbar component */}
      <Navbar />

      {/* Main content */}
      <Component {...pageProps} />

      {/* Footer component */}
      <Footer />
    </>
  );
}
