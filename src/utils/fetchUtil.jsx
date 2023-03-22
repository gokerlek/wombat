/**
 * A utility function for making API requests using the Fetch API.
 *
 * @async
 * @function fetchUtil
 *
 * @param {string} url - The endpoint URL for the API request.
 * @param {string} method - The HTTP method for the API request.
 * @param {Object} body - The request body for the API request.
 * @param {AbortSignal} signal - An optional AbortSignal to abort the API request.
 *
 * @returns {Promise<Object>} A Promise that resolves to an object containing the response data.
 *
 * @example
 * const response = await fetchUtil('https://example.com/api', 'POST', { id: 1 }, abortController.signal);
 * const { success, data, error } = response;
 *
 * @author Göker Zafer https://github.com/gokerlek
 * @version 1.0.0
 * @since 1.0.0
 */

export const fetchUtil = async (url, method, body, signal) => {
  const baseurl = import.meta.env.VITE_BASE_URL;
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  const options = {
    method,
    headers,
    body: method === "GET" ? null : JSON.stringify(body),
    signal,
  };

  const response = await fetch(`${baseurl}/${url}`, options);
  return await response.json();
};
