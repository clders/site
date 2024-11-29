/**
 * @fileoverview Events Page
 * @description The events page of the website. (NOTE: Data is imported from data/events.mjs)
 */

import { useEffect, useState, useRef } from 'react';
import eventsData from '../data/events.mjs';

export default function EventsPage() {
  const [currentEvent, setCurrentEvent] = useState(null);
  const eventsRef = useRef([]);

  // Sort the events and filter out archived ones
  const sortedEvents = eventsData
    .filter((event) => !event.archived) // Only show events that are not archived
    .sort((a, b) => new Date(a.date) - new Date(b.date)); // Sort events by date

  useEffect(() => {
    const now = new Date().toISOString();
    // Find the first upcoming event
    const upcomingEvent = sortedEvents.find(
      (event) => new Date(event.date) > new Date(now),
    );
    setCurrentEvent(upcomingEvent); // Set the current event to be the first upcoming one

    // Scroll to the current event in the list
    const currentEventElement =
      eventsRef.current[sortedEvents.indexOf(upcomingEvent)];
    if (currentEventElement) {
      setTimeout(() => {
        currentEventElement.scrollIntoView({
          behavior: 'smooth',
          block: 'center', // Scroll to the center of the event
        });
      }, 200);
    }
  }, [sortedEvents]); // Re-run when the sorted events change

  return (
    <div className='p-8'>
      <h1 className='text-3xl font-bold mb-6 text-primary'>Events</h1>
      <div className='space-y-8'>
        {sortedEvents.length > 0 ? (
          // Map through the sorted events and display each one
          sortedEvents.map((event, index) => {
            const eventDate = new Date(event.date);
            const isPastEvent = eventDate < new Date(); // Check if the event is in the past

            return (
              <div
                key={event.date}
                ref={(el) => (eventsRef.current[index] = el)} // Save a reference to the event element
                className='relative group transition-all duration-500'
              >
                {/* Event Thumbnail */}
                <div
                  className='w-full h-64 bg-cover bg-center relative'
                  style={{
                    backgroundImage: event.thumbnail
                      ? `url(${event.thumbnail})`
                      : 'none', // Use event's thumbnail if available
                    filter: isPastEvent ? 'grayscale(100%) blur(2px)' : 'none', // Apply grayscale and blur for past events
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundColor: event.thumbnail
                      ? 'transparent'
                      : '#f0f0f0', // Set background color if no thumbnail
                  }}
                >
                  {/* Show a gray overlay for events without a thumbnail */}
                  {!event.thumbnail && (
                    <div className='absolute inset-0 bg-gray-200 opacity-50'></div>
                  )}
                  {/* Gradient overlay */}
                  <div className='absolute rounded-lg inset-0 bg-gradient-to-r from-black to-transparent opacity-50'></div>
                </div>

                {/* Event Title and Description */}
                <div
                  className={`absolute top-0 left-0 w-full h-full flex justify-center items-center ${isPastEvent ? 'opacity-40 hover:opacity-80' : 'opacity-80 hover:opacity-100'} transition-opacity duration-300`}
                >
                  <div className='text-center text-light px-4 py-6'>
                    <h3 className='text-2xl font-semibold'>{event.title}</h3>
                    <p className='text-md mt-2'>{event.description}</p>
                    <p className='text-sm mt-2'>
                      {/* Format and display event date */}
                      {eventDate.toLocaleString('en-US', {
                        weekday: 'short',
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </p>
                    {event.link && (
                      // Link to event details, if available
                      <a
                        href={event.link}
                        className='inline-block mt-2 text-accent hover:text-accent-600'
                        aria-label={`Learn more about ${event.title}`}
                      >
                        Learn More
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          // Display message when no upcoming events are available
          <div className='text-center text-light-800 p-8'>
            <h3 className='text-2xl font-semibold'>No Upcoming Events</h3>
            <p className='text-md mt-2'>
              All events are either archived or no events are scheduled.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
