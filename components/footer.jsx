/**
 * @fileoverview Footer Component
 * @description The footer of the website.
 */

export default function Footer() {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-dark-500 text-light-500'>
      {/* Footer main section */}
      <div className='max-w-screen-2xl mx-auto px-6 py-12'>
        {/* Grid layout for footer sections */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Brand and mission statement */}
          <div>
            <h2 className='text-xl font-semibold text-primary-300 mb-4'>
              Cloud Coders
            </h2>
            <p className='text-sm text-light-700'>
              Empowering students through coding and creativity.
            </p>
          </div>

          {/* Quick Links section */}
          <div>
            <h2 className='text-xl font-semibold text-primary-300 mb-4'>
              Quick Links
            </h2>
            <ul className='space-y-2'>
              <li>
                <a
                  href='/about'
                  className='text-sm text-light-500 hover:text-primary-300 transition'
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href='/projects'
                  className='text-sm text-light-500 hover:text-primary-300 transition'
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href='/contact'
                  className='text-sm text-light-500 hover:text-primary-300 transition'
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h2 className='text-xl font-semibold text-primary-300 mb-4'>
              Follow Us
            </h2>
            <ul className='space-y-2'>
              <li>
                <a
                  href='https://x.com/clders'
                  className='text-sm text-light-500 hover:text-accent-400 transition'
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href='https://instagram.com/cldcode'
                  className='text-sm text-light-500 hover:text-accent-400 transition'
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href='https://github.com/clders'
                  className='text-sm text-light-500 hover:text-accent-400 transition'
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer bottom bar */}
      <div className='border-t border-light-600'>
        <div className='py-4 text-center'>
          {/* Display dynamic year */}
          <p className='text-sm text-light-700'>
            © {currentYear} Cloud Coders. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
