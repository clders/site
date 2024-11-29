/**
 * @fileoverview Home Page
 * @description The home page of the website.
 */

export default function Home() {
  return (
    <>
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
