/**
 * @fileoverview Projects Page
 * @description The projects page of the website. (NOTE: Data is imported from data/projects.mjs)
 */

import { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import projectsData from '../data/projects.mjs';

export default function ProjectsPage() {
  const [highlightedProjects, setHighlightedProjects] = useState([]);
  const [otherProjects, setOtherProjects] = useState([]);
  const sliderRef = useRef(null);
  const slideIntervalRef = useRef(null);
  const currentIndex = useRef(0);

  // Separate projects into highlighted and others
  useEffect(() => {
    const highlighted = projectsData.filter((project) => project.isHighlighted);
    const others = projectsData.filter((project) => !project.isHighlighted);
    setHighlightedProjects(highlighted);
    setOtherProjects(others);
  }, []);

  // Auto-scroll highlighted projects every 3 seconds
  useEffect(() => {
    if (highlightedProjects.length > 0) {
      slideIntervalRef.current = setInterval(() => {
        const nextIndex =
          (currentIndex.current + 1) % highlightedProjects.length;
        currentIndex.current = nextIndex;
        sliderRef.current?.scrollTo({
          left: nextIndex * sliderRef.current.clientWidth,
          behavior: 'smooth',
        });
      }, 3000);
    }

    return () => clearInterval(slideIntervalRef.current);
  }, [highlightedProjects]);

  // Scroll to the previous highlighted project
  const handlePrevClick = () => {
    const prevIndex =
      (currentIndex.current - 1 + highlightedProjects.length) %
      highlightedProjects.length;
    currentIndex.current = prevIndex;
    sliderRef.current?.scrollTo({
      left: prevIndex * sliderRef.current.clientWidth,
      behavior: 'smooth',
    });
  };

  // Scroll to the next highlighted project
  const handleNextClick = () => {
    const nextIndex = (currentIndex.current + 1) % highlightedProjects.length;
    currentIndex.current = nextIndex;
    sliderRef.current?.scrollTo({
      left: nextIndex * sliderRef.current.clientWidth,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Head>
        <title>Projects - Cloud Coders</title>
        <meta
          name='description'
          content='Explore the projects created by Cloud Coders, a student-led coding club at Maranatha High School, part of Hack Club.'
        />
      </Head>

      <div className='p-8 max-w-screen-2xl mx-auto'>
        {/* Page Header */}
        <h1 className='text-3xl font-bold mb-6 text-primary'>Projects</h1>

        {/* Highlighted Projects Section */}
        <div className='relative mb-12'>
          {highlightedProjects.length > 0 ? (
            <div>
              <div
                ref={sliderRef}
                className='flex overflow-x-hidden snap-x snap-mandatory transition-all duration-500'
              >
                {highlightedProjects.map((project) => (
                  <div
                    key={project.name}
                    className='min-w-full h-96 bg-cover bg-center relative flex-shrink-0 rounded-lg'
                    style={{
                      backgroundImage: project.backgroundImage
                        ? `url(${project.backgroundImage})`
                        : 'none',
                    }}
                  >
                    <div className='absolute inset-0 bg-dark opacity-50'></div>
                    <div className='absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 py-6'>
                      <h3 className='text-2xl font-semibold'>{project.name}</h3>
                      <p className='text-md mt-2'>{project.description}</p>
                      {project.link && (
                        <a
                          href={project.link}
                          className='inline-block mt-4 text-accent hover:text-accent-600'
                          aria-label={`Learn more about ${project.name}`}
                        >
                          Learn More
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              {/* Scroll Controls */}
              <button
                className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-50 hover:opacity-100'
                onClick={handlePrevClick}
                aria-label='Previous'
              >
                &#10094;
              </button>
              <button
                className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-50 hover:opacity-100'
                onClick={handleNextClick}
                aria-label='Next'
              >
                &#10095;
              </button>
            </div>
          ) : (
            <div className='text-center text-light-800 p-8'>
              <h3 className='text-2xl font-semibold'>
                No Highlighted Projects
              </h3>
              <p className='text-md mt-2'>
                Explore all projects below or check back later!
              </p>
            </div>
          )}
        </div>

        {/* All Projects Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {[...highlightedProjects, ...otherProjects].length > 0 ? (
            [...highlightedProjects, ...otherProjects].map((project) => (
              <div
                key={project.name}
                className='relative group overflow-hidden rounded-2xl border border-gray-200 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl'
              >
                <div
                  className='w-full h-64 bg-cover bg-center'
                  style={{
                    backgroundImage: project.backgroundImage
                      ? `url(${project.backgroundImage})`
                      : 'none',
                  }}
                >
                  {!project.backgroundImage && (
                    <div className='absolute inset-0 bg-gray-200 opacity-50'></div>
                  )}
                </div>
                <div className='p-4'>
                  <h3 className='text-xl font-semibold'>{project.name}</h3>
                  <p className='text-md mt-2'>{project.description}</p>
                  {project.link && (
                    <a
                      href={project.link}
                      className='inline-block mt-2 text-accent hover:text-accent-600'
                      aria-label={`Learn more about ${project.name}`}
                    >
                      Learn More
                    </a>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className='text-center text-light-800 p-8 col-span-full'>
              <h3 className='text-2xl font-semibold'>No Projects Available</h3>
              <p className='text-md mt-2'>Check back soon for updates!</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
