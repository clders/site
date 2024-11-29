/**
 * @fileoverview Events Data
 * @description Data for the events page.
 */

/**
 * @type {Event[]}
 * @typedef {Object} Event
 * @property {string} title The title of the event.
 * @property {string} date The date of the event. Must be in ISO 8601 format.
 * @property {string} thumbnail The path to the thumbnail image of the event. Must be in the public/images/events directory.
 * @property {string} description The description of the event. Should be a brief summary.
 * @property {string} link The link to the event page. Must be in the /events directory.
 * @property {boolean} archived Whether the event is archived or not. Archived events are not displayed on the events page.
 */
const eventsData = [];

export default eventsData;
