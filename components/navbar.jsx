/**
 * @fileoverview Navbar Component
 * @description The navigation bar of the website.
 */

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='sticky top-0 w-full bg-dark-500 text-white shadow-md z-50'>
      <div className='max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex items-center'>
            {/* Maranatha High School Logo */}
            <div className='flex-shrink-0'>
              <Link
                href='https://maranathahighschool.org'
                target='_blank'
                rel='noopener'
              >
                <Image
                  src='/images/maranatha-logo.png'
                  alt='School Logo'
                  width={60}
                  height={40}
                  className='object-contain'
                />
              </Link>
            </div>

            {/* Slash separator */}
            <div className='flex-shrink-0'>
              <svg
                height='55'
                width='55'
                viewBox='0 0 32 32'
                className='stroke-current text-white'
              >
                <path
                  d='M22 5L9 28'
                  stroke='currentColor'
                  strokeWidth='1'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                ></path>
              </svg>
            </div>

            {/* Cloud Coders Logo */}
            <div className='flex-shrink-0'>
              <Link href='https://clders.com'>
                <Image
                  src='/images/logo-l.png'
                  alt='Cloud Coders Logo'
                  width={200}
                  height={40}
                  className='object-contain'
                />
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex space-x-6'>
            <Link href='/' className='hover:text-accent-300'>
              Home
            </Link>
            <Link href='/about' className='hover:text-accent-300'>
              About
            </Link>
            <Link href='/events' className='hover:text-accent-300'>
              Events
            </Link>
            <Link href='/projects' className='hover:text-accent-300'>
              Projects
            </Link>
            <Link href='/contact' className='hover:text-accent-300'>
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden text-white focus:outline-none'
          >
            {isOpen ? (
              <span>&#10005;</span> // Close icon
            ) : (
              <span>&#9776;</span> // Hamburger icon
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className='md:hidden bg-primary-600'>
          <div className='flex flex-col space-y-4 p-4'>
            <Link href='/' className='hover:text-accent-300'>
              Home
            </Link>
            <Link href='/about' className='hover:text-accent-300'>
              About
            </Link>
            <Link href='/events' className='hover:text-accent-300'>
              Events
            </Link>
            <Link href='/projects' className='hover:text-accent-300'>
              Projects
            </Link>
            <Link href='/contact' className='hover:text-accent-300'>
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
