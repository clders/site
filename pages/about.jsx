/**
 * @fileoverview About Page
 * @description The about page of the website.
 */

import Link from 'next/link';
import Map from '../components/map';

export default function AboutPage() {
  return (
    <div className='p-8'>
      {/* Page Header */}
      <h1 className='text-3xl font-bold mb-6 text-primary'>
        About Cloud Coders
      </h1>
      <p className='text-md mb-8 text-gray-700'>
        Cloud Coders is a student-led organization at Maranatha High School
        focused on empowering students to learn programming and explore the
        world of technology. Our mission is to create an inclusive environment
        where students of all experience levels can develop their coding skills,
        collaborate with peers, and engage in tech-driven activities.
      </p>

      {/* Section: Goals and Activities */}
      <section className='mb-12'>
        <h2 className='text-2xl font-semibold text-primary mb-4'>What We Do</h2>
        <p className='text-md mb-4 text-gray-700'>
          We participate in various challenges and competitions, including the
          Congressional App Challenge, USACO, hackathons, and events hosted by
          HackClub. Cloud Coders welcomes all students, whether you're just
          starting or already have programming experience. Our activities are
          designed to be engaging and educational, fostering a sense of
          community and collaboration.
        </p>
        <p className='text-md mb-4 text-gray-700'>
          Members take on diverse roles, from management and planning to
          hands-on development. Together, we strive to make programming
          accessible and enjoyable for everyone at Maranatha High School.
        </p>
        <p className='text-md mb-4 text-gray-700'>
          If you're looking for a place to grow your coding skills, collaborate
          on exciting projects, or simply meet like-minded peers, Cloud Coders
          is the community for you.
        </p>
      </section>

      {/* Section: Contact */}
      <section className='mb-12'>
        <h2 className='text-2xl font-semibold text-primary mb-4'>
          Get in Touch
        </h2>
        <p className='text-md mb-4 text-gray-700'>
          Have questions or want to learn more? Visit our contact page to find
          out how to reach us.
        </p>
        <Link
          href='/contact'
          className='inline-block text-accent hover:text-accent-600 transition font-semibold'
        >
          Contact Us &rarr;
        </Link>
      </section>

      {/* Section: Location */}
      <section className='mb-12'>
        <h2 className='text-2xl font-semibold text-primary mb-4'>
          Visit Us at Maranatha High School
        </h2>
        <p className='text-md text-gray-700 mb-6'>
          <strong>169 S St John Ave, Pasadena, CA 91105</strong>.
        </p>
        <div className='w-full h-96'>
          <Map
            address='169 S St John Ave, Pasadena, CA 91105'
            coordinates={{ lat: 34.14349, lng: -118.16476 }}
          />
        </div>
      </section>
    </div>
  );
}
