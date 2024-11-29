/**
 * @fileoverview Home Page
 * @description The home page of the website.
 */

import Head from 'next/head';
import TypingEffect from 'react-typing-effect';
import { motion } from 'framer-motion';

export default function HomePage() {
  // Animation for fade-in effect
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

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

      {/* Club Name with Typing Effect */}
      <div className='hero-section flex items-center justify-center h-screen bg-gradient-to-r from-primary-500 to-secondary-500 text-white'>
        <div className='text-center'>
          <h1 className='text-5xl md:text-7xl font-bold mb-6'>
            <TypingEffect
              text={[
                'Welcome to Cloud Coders',
                'A student-led coding club at Maranatha High School',
              ]}
              speed={150}
              eraseSpeed={100}
              eraseDelay={2000}
              typingDelay={500}
              loop={true}
            />
          </h1>
          <p className='text-xl md:text-2xl mb-4'>
            Join us in learning, creating, and building exciting projects in the
            world of technology!
          </p>
        </div>
      </div>

      {/* Page Link Sections with Animations */}
      <div className='links-section py-16 px-8 bg-light-100'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* About Section */}
          <motion.div
            className='link-item bg-primary-500 text-white rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl'
            initial='hidden'
            animate='visible'
            variants={fadeIn}
          >
            <h3 className='text-2xl font-semibold mb-4'>About</h3>
            <p className='text-md mb-4'>
              Learn more about Cloud Coders, our mission, and the team behind
              this awesome student-led coding club.
            </p>
            <a href='/about' className='text-accent hover:text-accent-600'>
              Learn More
            </a>
          </motion.div>

          {/* Events Section */}
          <motion.div
            className='link-item bg-secondary-500 text-white rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl'
            initial='hidden'
            animate='visible'
            variants={fadeIn}
          >
            <h3 className='text-2xl font-semibold mb-4'>Events</h3>
            <p className='text-md mb-4'>
              Stay updated with upcoming events, hackathons, and meetings hosted
              by Cloud Coders and Hack Club.
            </p>
            <a href='/events' className='text-accent hover:text-accent-600'>
              Learn More
            </a>
          </motion.div>

          {/* Projects Section */}
          <motion.div
            className='link-item bg-accent-500 text-white rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl'
            initial='hidden'
            animate='visible'
            variants={fadeIn}
          >
            <h3 className='text-2xl font-semibold mb-4'>Projects</h3>
            <p className='text-md mb-4'>
              Explore our projects, built by students for students, ranging from
              apps to games and more!
            </p>
            <a href='/projects' className='text-light hover:text-light-600'>
              Learn More
            </a>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            className='link-item bg-dark-500 text-white rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl'
            initial='hidden'
            animate='visible'
            variants={fadeIn}
          >
            <h3 className='text-2xl font-semibold mb-4'>Contact</h3>
            <p className='text-md mb-4'>
              Get in touch with us for inquiries, collaborations, or if you want
              to join Cloud Coders.
            </p>
            <a href='/contact' className='text-accent hover:text-accent-600'>
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>

      {/* Social Media Links Section */}
      <div className='social-media-section py-8 px-8 bg-light-100'>
        <div className='container mx-auto text-center'>
          <h2 className='text-3xl font-semibold mb-4'>Follow Us</h2>
          <div className='flex justify-center space-x-8'>
            {/* Social Media Links */}
            <motion.a
              href='https://twitter.com/clders'
              target='_blank'
              className='text-2xl text-blue-600 hover:text-blue-800 transition duration-300'
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              Twitter
            </motion.a>
            <motion.a
              href='https://instagram.com/cldcode'
              target='_blank'
              className='text-2xl text-purple-600 hover:text-purple-800 transition duration-300'
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              Instagram
            </motion.a>
            <motion.a
              href='https://github.com/clders'
              target='_blank'
              className='text-2xl text-gray-800 hover:text-gray-600 transition duration-300'
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              GitHub
            </motion.a>
          </div>
        </div>
      </div>
    </>
  );
}
