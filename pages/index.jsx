/**
 * @fileoverview Home Page
 * @description The home page of the website.
 */

import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>A Student-Led Coding Club at Maranatha High School</title>
        <meta
          name='description'
          content='Cloud Coders is a student-led coding club at Maranatha High School, part of Hack Club, focused on learning, creating, and building projects in tech.'
        />
      </Head>

      {/* Hack Club Flag */}
      <a href='https://hackclub.com/'>
        <img
          style={{
            position: 'fixed',
            top: 64,
            left: '10px',
            border: 0,
            width: '100px',
            zIndex: 999,
          }}
          src='https://assets.hackclub.com/flag-orpheus-top.svg'
          alt='Hack Club'
        />
      </a>
    </>
  );
}
