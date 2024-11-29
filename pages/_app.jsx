/**
 * @fileoverview App
 * @description The entry point of every page in the website.
 */

import '../styles/main.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function App({ Component, pageProps }) {
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
