/**
 * @fileoverview Custom Document
 * @description The custom document of the website.
 */

import { Html, Head, Main, NextScript } from 'next/document';

// Schema.org JSON-LD for SEO
const org = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Cloud Coders',
  url: 'https://clders.com/',
  logo: 'https://clders.com/images/logo.png',
  sameAs: [
    'https://x.com/clders',
    'https://github.com/clders',
    'https://www.instagram.com/cldcode',
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      email: 'team@clders.com',
      contactType: 'Customer Service',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '169 S. St. John Ave',
    addressLocality: 'Pasadena',
    addressRegion: 'CA',
    postalCode: '91105',
    addressCountry: 'United States',
  },
};

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta
          name='description'
          content='Cloud Coders is a student-led coding club at Maranatha High School, part of Hack Club, focused on learning, creating, and building projects in tech.'
        />
        <meta name='author' content='Cloud Coders' />
        <link rel='icon' href='/favicon.ico' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
