/**
 * @fileoverview Projects Data
 * @description Data for the projects page.
 */

/**
 * @type {Project[]}
 * @typedef {Object} Project
 * @property {string} name The name of the project.
 * @property {string} description The description of the project.
 * @property {string} backgroundImage The path to the background image of the project. Must be in the public/images/projects directory.
 * @property {string} link The link to the project page. Must be a valid URL. (a demo, a GitHub repo, YouTube video, etc.)
 * @property {boolean} isHighlighted Whether the project is highlighted or not. Highlighted projects are displayed in the top scrolling section.
 */
const projects = [];

export default projects;
