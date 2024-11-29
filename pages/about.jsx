/**
 * @fileoverview About Page
 * @description The about page of the website.
 */

import Link from 'next/link';
import Map from '../components/map';

export default function About() {
  return (
    <div className='bg-light-500 py-12'>
      <div className='max-w-6xl mx-auto px-6'>
        {/* Section 1: Introduction */}
        <section className='mb-12'>
          <h1 className='text-3xl font-semibold text-primary-300 mb-4'>
            About Cloud Coders
          </h1>
          <p className='text-lg text-light-800 mb-6'>
            Cloud Coders is a student-led organization at Maranatha High School
            focused on helping students learn programming and providing
            resources and opportunities to grow in technology. Our goal is to
            create an inclusive environment where students can develop their
            coding skills, collaborate with peers, and engage in tech-related
            activities.
          </p>
          <p className='text-lg text-light-800 mb-6'>
            We participate in various exciting challenges and competitions,
            including the Congressional App Challenge, USACO, hackathons, and
            events hosted by HackClub. Cloud Coders welcomes all students,
            whether you have prior coding experience or not. Everyone has a
            place in our community.
          </p>
          <p className='text-lg text-light-800 mb-6'>
            Our members take on different roles, from management and planning to
            hands-on development. Together, we work towards making programming
            accessible and enjoyable for everyone at Maranatha High School.
          </p>
          {/* Contact Link */}
          <div className='mt-8 hover:text-primary-500'>
            <Link
              href='/contact'
              className='text-lg text-primary-300 hover:text-primary-500'
            >
              Contact Us
            </Link>
          </div>
        </section>

        {/* Section 2: Interactive Map */}
        <section>
          <h2 className='text-2xl font-semibold text-primary-300 mb-4'>
            Find Us at Maranatha High School
          </h2>
          <div className='mb-6'>
            {/* Map is only rendered on the client-side */}
            <Map />
          </div>
        </section>
      </div>
    </div>
  );
}
