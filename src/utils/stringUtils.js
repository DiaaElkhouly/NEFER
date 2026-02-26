/**
 * String utility functions
 */

/**
 * Convert a string to URL-friendly slug format
 * @param {string} str - The string to convert
 * @returns {string} - URL-friendly slug
 */
export const toSlug = (str) => {
  return str.toLowerCase().replace(/\s+/g, "");
};

/**
 * Generate a route path from type and product name
 * @param {string} type - Product type (e.g., 'body-splash')
 * @param {string} title - Product title
 * @returns {string} - Generated route path
 */
export const generateProductRoute = (type, title) => {
  return `/${type}/${toSlug(title)}`;
};

/**
 * Capitalize first letter of each word
 * @param {string} str - The string to capitalize
 * @returns {string} - Capitalized string
 */
export const capitalizeWords = (str) => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};
