import { useState, useEffect } from 'react';

/**
 * A custom React hook for fetching data from an API.
 * @param {string} url - The URL of the API endpoint.
 * @returns {object} - An Object containing response data, loading(boolean), error(if any).
 */
const useFetch = (url) => {

    // State for storing the API response data.
    const [data, setData] = useState(null);
    // State for checking the loading state of the request.
    const [loading, setLoading] = useState(true);
    // State for storing any errors while requesting the API.
    const [error, setError] = useState(null);

    useEffect(() => {
        // Function to handle API call.
        const apiRequest = async () => {
            try {
                // Fetching data from the API endpoint.
                const response = await fetch(url);
                // Fetching data from the obtained JSON.
                const data = await response.json();
                // Setting response data.
                setData(data);
            } catch (error) {
                // Catching and setting the error during the API call.
                setError(error);
            } finally {
                // Setting loading to false after the API call.
                setLoading(false);
            }
        };

        apiRequest(); // Invoking the function to fetch the data.
    }, [url]); // Re-run the effect if the URL changes.

    // Returning the data, loading and error states.
    return { data, loading, error };
};

export default useFetch;
