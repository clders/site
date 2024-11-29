/**
 * @fileoverview Contact Page
 * @description The contact page of the website.
 */

import Map from '../components/map';

export default function ContactPage() {
  return (
    <div className='p-8'>
      {/* Page Header */}
      <h1 className='text-3xl font-bold mb-6 text-primary'>Contact Us</h1>
      <p className='text-md mb-8 text-gray-700'>
        We'd love to hear from you! Whether you have a question, want to
        collaborate, or just want to say hi, feel free to reach out through any
        of the channels below.
      </p>

      {/* Contact Information */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
        {/* Team Email */}
        <div className='flex items-start p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
          <div className='text-primary font-bold text-2xl mr-4'>&#9993;</div>
          <div>
            <h3 className='text-xl font-semibold mb-1'>Team Email</h3>
            <a
              href='mailto:team@clders.com'
              className='text-accent hover:text-accent-600 transition'
            >
              team@clders.com
            </a>
          </div>
        </div>

        {/* Development Team */}
        <div className='flex items-start p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
          <div className='text-primary font-bold text-2xl mr-4'>&#128187;</div>
          <div>
            <h3 className='text-xl font-semibold mb-1'>Development Team</h3>
            <a
              href='mailto:dev@clders.com'
              className='text-accent hover:text-accent-600 transition'
            >
              dev@clders.com
            </a>
          </div>
        </div>

        {/* GitHub */}
        <div className='flex items-start p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
          <div className='text-primary font-bold text-2xl mr-4'>&#128736;</div>
          <div>
            <h3 className='text-xl font-semibold mb-1'>GitHub</h3>
            <a
              href='https://github.com/clders'
              target='_blank'
              rel='noopener noreferrer'
              className='text-accent hover:text-accent-600 transition'
            >
              github.com/clders
            </a>
          </div>
        </div>

        {/* X (formerly Twitter) */}
        <div className='flex items-start p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
          <div className='text-primary font-bold text-2xl mr-4'>&#128081;</div>
          <div>
            <h3 className='text-xl font-semibold mb-1'>Follow Us on X</h3>
            <a
              href='https://x.com/clders'
              target='_blank'
              rel='noopener noreferrer'
              className='text-accent hover:text-accent-600 transition'
            >
              x.com/clders
            </a>
          </div>
        </div>

        {/* Instagram */}
        <div className='flex items-start p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
          <div className='text-primary font-bold text-2xl mr-4'>&#127909;</div>
          <div>
            <h3 className='text-xl font-semibold mb-1'>
              Follow Us on Instagram
            </h3>
            <a
              href='https://instagram.com/cldcode'
              target='_blank'
              rel='noopener noreferrer'
              className='text-accent hover:text-accent-600 transition'
            >
              instagram.com/cldcode
            </a>
          </div>
        </div>

        {/* Discord */}
        <div className='flex items-start p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
          <div className='text-primary font-bold text-2xl mr-4'>&#128172;</div>
          <div>
            <h3 className='text-xl font-semibold mb-1'>Join Us on Discord</h3>
            <a
              href='https://discord.com/invite/reNDecxJ9Q'
              target='_blank'
              rel='noopener noreferrer'
              className='text-accent hover:text-accent-600 transition'
            >
              discord.com/invite/reNDecxJ9Q
            </a>
          </div>
        </div>
      </div>

      {/* Address Section */}
      <div className='mt-12'>
        <h2 className='text-2xl font-bold mb-4 text-primary'>Visit Us</h2>
        <p className='text-md text-gray-700 mb-6'>
          Our location: <strong>169 S St John Ave, Pasadena, CA 91105</strong>
        </p>
        <div className='w-full h-96'>
          {/* Embed Map Component */}
          <Map
            address='169 S St John Ave, Pasadena, CA 91105'
            coordinates={{ lat: 34.14349, lng: -118.16476 }}
          />
        </div>
      </div>
    </div>
  );
}
