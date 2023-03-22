/**
 * Calls an API endpoint using the fetchUtil function and sets the data accordingly.
 * If an error occurs, sets the initial data and displays the error using the setError function from the ErrorProvider context.
 *
 * @async
 * @function sm
 *
 * @param {Object} options - An object containing the options for the API call.
 * @param {Function} options.setData - A function to set the data from the API call.
 * @param {Function} options.setLoading - A function to set the loading state.
 * @param {string} options.end_point - The endpoint URL for the API call.
 * @param {Object} options.body - The request body for the API call.
 * @param {Object} options.initial_data - The initial data to be set if an error occurs.
 * @param {string} [options.method="GET"] - The HTTP method for the API call.
 * @param {AbortSignal} [options.signal] - An optional AbortSignal to abort the API call.
 *
 * @example
 * // Aborting API call using AbortController
 * import { useState, useEffect } from 'react';
 * import sm from './sm';
 *
 * function MyComponent() {
 *   const [data, setData] = useState([]);
 *   const [loading, setLoading] = useState(false);
 *
 *   useEffect(() => {
 *     const abortController = new AbortController();
 *     const { signal } = abortController;
 *
 *     sm({
 *       setData,
 *       setLoading,
 *       end_point: 'https://example.com/api',
 *       body: { id: 1 },
 *       initial_data: [],
 *       method: 'POST',
 *       signal: signal,
 *     });
 *
 *     return () => {
 *       abortController.abort();
 *     };
 *   }, []);
 *
 *   return <div>{loading ? 'Loading...' : JSON.stringify(data)}</div>;
 * }
 *
 * @A
 */

import { useError } from "../context/ErrorProvider.jsx";
import { fetchUtil } from "./fetchUtil.jsx";
import { useEffect } from "react";

const sm = async ({
  setData,
  setLoading,
  end_point,
  body,
  initial_data,
  method = "GET",
  signal,
}) => {
  const { setError } = useError();
  const url = `${end_point}`;
  setLoading(true);

  try {
    const result = await fetchUtil(url, method, body, signal);
    const { success, data, error } = result;
    if (success) {
      setData(data);
    } else {
      setData(initial_data);
      setError(error);
    }
  } catch (error) {
    console.error(error);
    setData(initial_data);
    setError(error);
  } finally {
    setLoading(false);
  }
};

const useApi = ({ end_point, body, initial_data, method = "GET" }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState();
  const { setError } = useError();
  const url = `${end_point}`;

  useEffect(async () => {
    const abortController = new AbortController();
    const { signal } = abortController;
    setLoading(true);

    try {
      const result = await fetchUtil(url, method, body, signal);
      const { success, data, error } = result;
      if (success) {
        setData(data);
      } else {
        setData(initial_data);
        setError(error);
      }
    } catch (error) {
      console.error(error);
      setData(initial_data);
      setError(error);
    } finally {
      setLoading(false);
    }

    return () => {
      abortController.abort();
    };
  }, []);

  return {
    data,
    loading,
  };
};

export default sm;
